"use client"



//Firebase
import { auth } from "../lib/firebase"
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    getIdToken, 
    onAuthStateChanged, 
    signOut, 
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "firebase/auth"

//React
import { useRouter } from "next/navigation"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useDisclosure } from "@heroui/react"
import AuthModal from "../components/Auth/AuthModal"
import ClientConfig from "../../client.config"


export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {

    //Global message
    const [message, setMessage] = useState({})

    const router = useRouter()

    //Main user data
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)

    //__________________________________________________________________________________________//

    //Modals control
    //Open modal login if !user
    const authModal = useDisclosure()

    //__________________________________________________________________________________________//

    // Function to fetch user data
    const getUserData = useCallback(async (user_id, user_email) => {
        
        try {

            const response = await fetch(`${ClientConfig.users_get}?user_id=${user_id}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${await handleGetIdToken()}`,
                },
            })
            if (!response.ok) {
                throw new Error('Failed to fetch user data')
            }
    
            const data = await response.json()

            // Combine data from the response with additional fields
            const fullData = { ...data, uid: user_id, email: user_email }
        
            setUserData(fullData)
            storeUserData(fullData)
    
            //PhIdentify(user_email, fullData)

        } catch (error) {
            console.error('Error retrieving user data:', error)
        }

    }, [userData])

    //________________________________________________________________________________________________//

    //Handle getting authenticated user on loading
    useEffect(() => {

        if (user) return // Early return if we already have user data

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {

            if (authUser) {
                if (authUser.emailVerified) {
                    setUser(authUser)
                    // Make `user` accessible globally via `window`
                    window.currentUser = authUser
                    authModal.onClose()          
                    if (!userData) {
                        const storedUserData = getStoredUserData()
                        if (storedUserData) {
                            // If user data is available in local storage, use it
                            setUserData(storedUserData)
                        } else {
                            getUserData(authUser.uid, authUser.email) // Fetch user data
                        }   
                    }
                } else {
                    handleVerify(true)
                }
            } else {        
                const fullUrl = typeof window !== 'undefined' ? window.location.href : ''
                if (typeof window !== 'undefined') {
                    // If no user, redirect to login on certain page, otherwise open login modal
                    const notLoggedInForbidden = ['home']
                    if(notLoggedInForbidden.some(item => fullUrl.includes(item))){
                        router.push('/')
                        //authModal.onOpen()
                    } else {
                        //Allow browsing
                        //Open login modal only if user perform certain actions
                    }
                }
            }
        })

        return () => unsubscribe() // Cleanup the auth listener on unmount
    
    }, [user, userData, getUserData])

    //__________________________________________________________________________________________//

    //Get firebase ID token
    const handleGetIdToken = async () => {
        try {
            //const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ false)
            const idToken = await getIdToken(auth.currentUser, false)
            return idToken
        } catch (error) {
            console.log(JSON.stringify(error))
            throw new Error({ error: "error"})
        }
    }

    //__________________________________________________________________________________________//

    //Update user email
    const handleUpdateUserEmail = async (email) => {

        try {

            const response = await fetch(ClientConfig.user_email_update, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${await handleGetIdToken()}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user?.uid,
                    user_email: user?.email
                }),
            })

            if(response.ok){
                /* ph: profile */
                posthog.capture('profile', {
                    type: "profile",
                    action: "update_email",
                    user_id: userData?.uid, 
                    user_email: userData?.email,
                })

                await getUserData(userData.uid, userData.email)

            }
            
        } catch (error) {
            console.error('Error updating user:', error)
            alert('An error occurred while updating user')
        }
    }

    //__________________________________________________________________________________________//

    //Disable user
    const handleDisableUser = async () => {

        try {

            const response = await fetch(ClientConfig.users_disable, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${await handleGetIdToken()}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                user_id: user?.uid,
                }),
            })

            if(response.ok){
            /* ph: profile */
            posthog.capture('profile', {
                type: "profile",
                action: "disable",
                premium: userData?.premium,
                user_id: userData?.uid, 
                user_email: userData?.email,
            })

            // Redirect user to the specified feedback URL(google form)
            router.push(ClientConfig.deletedUsersFeedbackForm)
            setUser(null)
            setUserData(null)
            // Update user to disable
            await signOut(auth)
            localStorage.clear()
            }
            
        } catch (error) {
            console.error('Error updating user:', error)
            alert('An error occurred while updating user')
        }
    }

    //__________________________________________________________________________________________//

    //Handle verification     
    const [verificationRequired, setVerificationRequired] = useState(false)

    const handleVerify = (action) => {
        if(action){
            setVerificationRequired(action)
            authModal.onOpen()
        } else {
            setVerificationRequired(action)
            authModal.onOpenChange()
        }
    }

    //__________________________________________________________________________________________//

    //Resend email verification 
    const handleSendVerificationEmail = async () => {
        try {
            await sendEmailVerification(auth.currentUser)
        } catch (error) {
            console.error('Error sending verification email:', error)
        }
    }

    //__________________________________________________________________________________________//

    //Handle Logout
    const handleLogout = async () => {

        try {

        await signOut(auth)

        /* ph: reset */
        //posthog.reset()

        setUser(null)
        setUserData(null)
        handleVerify(false)
        localStorage.clear()
        window.location.reload()

        } catch (error) {
            console.error("Error logging out:", error)
        }

    }

    //__________________________________________________________________________________________//

    //Handle stored user data
    //Set stored user data on localstorage
    const storeUserData = (data) => {
        localStorage.setItem('userData', JSON.stringify(data))
    }

    //Get stored user data from localstorage
    const getStoredUserData = () => {
        const storedUserData = localStorage.getItem('userData')
        if (storedUserData) {
        return JSON.parse(storedUserData)
        }
        return null
    }

    //_____________________________________________________________________________//

    //Handle login
    const handleLogin = async (email, password) => {

        const isValidEmail = handleCheckEmail(email)

        if(!isValidEmail){
            return setMessage({type: "loginEmailError", msg: "Please enter a valid email"})
        }

        setMessage({type: "isLoginLoading", msg: "Loading..."})

        try {

        const userCredential = await signInWithEmailAndPassword(auth, email, password)

        const user = userCredential.user

        getUserData(user.uid, user.email)

        setMessage({type: "loginMessage", msg: "Login successful"})

        setTimeout(() => {
            setMessage({type: "", msg: ""})
            return router.push("/")
        }, 2000)

        } catch (error) {
            console.error("Error logging in:", error)
            setMessage(
                {type: "loginMessage", msg: `Login error. \n 
                ${error.message
                .replace('Firebase: Error','').replace('(auth/user-not-found)', 'User not Found - IMPORTANT: If you’re sure you already have an account, please sign-up again using your previous email address!')
                .replace('(auth/wrong-password)', 'Wrong password')
                .replace('(auth/invalid-credential)', 'Wrong password')
                .replace('Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).', 'Account Restricted, please reset password.')
            }`})

            setTimeout(() => {
                setMessage({type: "", msg: ""})
            }, 4000)
        }
    }

    //____________________________________________________________________________________________//

    //Google login
    const handleGoogleLogin = async () => {
        setMessage({type:"googleLoading", msg:"Google Logging in..."})
        try {
        
            const googleProvider = new GoogleAuthProvider()
            const userCredential = await signInWithPopup(auth, googleProvider)
            const user = userCredential?.user

            /* ph: auth */
            /*posthog.capture('auth', {
                type: "google",
                action: "login",
            })*/
    
            const response = await fetch(ClientConfig.users_add, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${await handleGetIdToken()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    user_id: user.uid,
                    email: user.email, 
                }),
            })

            await getUserData(user.uid, user.email)

            if(response.ok) {
                setMessage({type:"loginMessage", msg:"Login..."})
                setTimeout(() => {
                    setMessage({type:"", msg:""})
                    return router.push("/")
                }, 2000)
            } else {
                throw new Error("Google Login error")
            }
        
        } catch (error) {
            console.error(error)
            setMessage({type:"loginError", msg:"Error login"})
                setTimeout(() => {
                    setMessage({type:"", msg:""})
            }, 1000)
        }
    }

    //_____________________________________________________________________________//

    //Handle check email
    const handleCheckEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const isValidEmail = emailRegex.test(email)
        return isValidEmail
    }

    //_____________________________________________________________________________//


    return(
        <UserContext.Provider 
            value={{ 
                message, 
                setMessage,
                user,
                setUser,
                userData,
                setUserData,
                storeUserData,
                getUserData,
                handleDisableUser, 
                handleGetIdToken, 
                handleLogout, 
                handleLogin, 
                handleGoogleLogin,
                authModal,
                verificationRequired,
                handleCheckEmail,
                handleSendVerificationEmail
            }}
        >
            <AuthModal />
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}