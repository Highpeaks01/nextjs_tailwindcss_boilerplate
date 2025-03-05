"use client"


//React Next
import { useState } from "react"

//Next UI
import { Button, useDisclosure, Input } from "@heroui/react"

//Components
import ForgotPassword from "./ForgotPassword"

//Icons
import { FcGoogle } from "react-icons/fc"
import { IoEye, IoEyeOff } from "react-icons/io5"
import { useUser } from "../../providers/UserProvider"


export default function LoginForm ({}) {

  //____________________________________________________________________________________________//

  //Login

  //User authorization
  //Handle user auth
  const { message, setMessage, handleCheckEmail, handleLogin, handleGoogleLogin } = useUser()

  //Main login variables
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleLoginEmailChange = (e) => {
      const email = e.target.value
      setLoginEmail(email)
  }

  const handleLoginPasswordChange = (e) => {
      const password = e.target.value
      setLoginPassword(password)
  }

  //____________________________________________________________________________________________//

  //Handle reset password modal
  const forgotPasswordModal = useDisclosure()

  //____________________________________________________________________________________________//

  //Handle password visibility
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  //____________________________________________________________________________________________//


  return (
    <>
        <div className="w-full">
            <div className="flex flex-col gap-4 w-96 h-auto items-center content-center align-center justify-center overflow-hidden">
                <Input 
                    variant={"faded"}
                    isRequired
                    type="email" 
                    isClearable
                    onClear={() => setLoginEmail("")}
                    label="Email" 
                    value={loginEmail}
                    onChange={(e) => handleLoginEmailChange(e)}
                    isInvalid={message.type == "loginEmailError"}
                    errorMessage={message.type == "loginEmailError" && message.msg} 
                    size={"md"}
                    className={"text-sky-500 text-base"}
                />

                <Input
                    isRequired
                    variant={"faded"}
                    label="Password"
                    endContent={
                        <button type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <IoEye className="text-xl text-default-400 pointer-events-none" />
                        ) : (
                            <IoEyeOff className="text-xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}

                    value={loginPassword}
                    onChange={(e) => handleLoginPasswordChange(e)}

                    isInvalid={message.type == "loginPasswordError"}
                    errorMessage={message.type == "loginPasswordError" && message.msg} 

                    size={"md"}
                    className={"text-sky-500 text-base"}
                />

                <div className={"mb-6 flex w-full items-end justify-end"}>
                    <Button
                        disabled={message.type == "isLoginLoading"}  
                        onPress={forgotPasswordModal.onOpen} 
                        className={`p-0 bg-transparent text-sm text-default-400`}
                    >
                        Forgot password?
                    </Button>
                </div>

                <div className="w-full mt-8">
                    <div className="flex flex-col w-full space-y-4 items-center content-center align-center justify-center">
                        
                        <div className="flex text-center">
                        {message?.type == "loginMessage" ? (
                        <p className="text-base text-blue-500 font-semibold">{message.msg}</p>
                        ) : (
                            <div className="h-9"></div>
                        )}
                        </div>

                        <Button   
                            variant="solid"                                      
                            isLoading={(message.type == "isLoginLoading")}
                            disabled={message.type == "isLoginLoading"} 
                            onPress={() => handleLogin(loginEmail, loginPassword)}   
                            className={`w-full px-4 py-6 text-base md:text-base rounded-xl bg-gradient-to-br from-cyan-300 via-blue-500 to-sky-500 text-theme font-medium`}
                        >
                            Login
                        </Button>
                        <Button 
                            variant="solid"
                            isLoading={(message.type == "isLoginGoogleLoading")}
                            disabled={(message.type == "googleLoading")} 
                            onPress={(e) => handleGoogleLogin()} 
                            startContent={<FcGoogle size={24} />}
                            className={`w-full px-4 py-6 border border-default-400 bg-white text-theme font-medium flex items-center align-center text-center justify-center rounded-xl`} 
                        >
                            Login with Google
                        </Button>
                    </div>
                </div>

                <ForgotPassword 
                    message={message}
                    setMessage={setMessage}
                    forgotPasswordModal={forgotPasswordModal}
                    handleCheckEmail={handleCheckEmail}
                />

            </div>
        </div>
    </>
  )
}
