"use client"


//Next React
import React, { useEffect, useState } from "react"

//Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'

//Next UI
import { Button, Input, Checkbox, Select, SelectItem } from "@heroui/react"

// PostHog
import posthog from 'posthog-js'

//Icons
import { FcGoogle } from "react-icons/fc"
import { IoEye, IoEyeOff } from "react-icons/io5"

//ClientConfig
import { auth } from "../../lib/firebase"
import { useUser } from "../../providers/UserProvider"
import ClientConfig from "../../../client.config"

export const roles = [
  {key: "developer", label: "Developer"},
  {key: "founder", label: "Founder"},
  {key: "salesman", label: "Salesman"},
  {key: "marketer", label: "Marketer"},
  {key: "manager", label: "Manager"},
  {key: "c-level", label: "C-Level"},
  {key: "student", label: "Student"},
];

export const froms = [
  {key: "linkedin", label: "Linkedin"},
  {key: "reddit", label: "Reddit"},
  {key: "google", label: "Google"},
  {key: "youtube", label: "Youtube"},
  {key: "email", label: "E-mail"},
  {key: "podcast", label: "Podcast"},
  {key: "word-mouth", label: "Word of Mouth"},
  {key: "x", label: "X(Twitter)"},
];

export default function SignupForm ({}) {

  //____________________________________________________________________________________________//

  const { handleVerify, setUser, setUserData, handleSendVerificationEmail, handleGetIdToken, handleCheckEmail, handleGoogleLogin, message, setMessage } = useUser()

  //Signup
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [company, setCompany] = useState('')

  //Role
  const [role, setRole] = useState(new Set([]));

  //Froms
  const [from, setFrom] = useState(new Set([]));

  //Change password
  const handleSignupPasswordChange = (e) => {
      const password = e.target.value
      validatePassword(e.target.value)
      setSignupPassword(password)
  }

  //Handle Signup
  const handleSignup = async () => {
    
    const isValidEmail = handleCheckEmail(signupEmail)
    const isValidPassword = validatePassword(signupPassword)

    if(!isValidEmail){
      setMessage({type: "signupEmailError", msg: "Please enter a valid email"})
      setTimeout(() => {
        setMessage({type: "", msg: ""})
      }, 3000)
      return
    } else if(!isValidPassword){
      setMessage({type: "signupPasswordError", msg: "Please enter a valid password"})
      setTimeout(() => {
        setMessage({type: "", msg: ""})
      }, 3000)
      return
    }

    setMessage({type: "isSignupLoading", msg: "Loading..."})
    
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      const user = userCredential.user

      const response = await fetch(ClientConfig.users_add, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${await handleGetIdToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           user_id: user.uid,
           email: user.email,
           from: from.values().next().value,
           role: role.values().next().value,
           company,
        }),
      })

      if(response.ok) {

        /* ph: auth */
        /*posthog.capture('auth', {
          type: "email",
          action: "signup",
        })*/

        const data = await response.json()
        setUser(user)
        setUserData(data)

        //Send verification email
        handleSendVerificationEmail()

        setMessage({type:"signupMessage", msg:"Check your e-mail box!"})
        setTimeout(() => {
            handleVerify(true)
            setMessage({type:"", msg:""})
            return
        }, 2000)  
      } else {
        throw new Error("Error sign up")
      }

    } catch (error) {
      console.error("Error signup in:", error)
      setMessage({type: "signupMessage", msg: `Signup error. \n ${error.message.replace('Firebase: Error','').replace('(auth/email-already-in-use).', 'Email already in use.')}`})
      setTimeout(() => {
        setMessage({type: "", msg: ""})
      }, 3000)
    }

  }

  //____________________________________________________________________________________________//
  
  //Handle password errors
  const [passwordErrors, setPasswordErrors] = useState([])

  //Function to validate password
  const validatePassword = (password) => {

    const minLengthRegex = /.{8,}/
    const uppercaseRegex = /[A-Z]/
    const lowercaseRegex = /[a-z]/
    const numberRegex = /\d/
    const specialCharRegex = /[@#$!%*?&]/

    const tempErrors = []

    if (!uppercaseRegex.test(password)) {
      tempErrors.push("Password must contain at least one uppercase letter.")
    }
    if (!lowercaseRegex.test(password)) {
      tempErrors.push("Password must contain at least one lowercase letter.")
    }
    if (!numberRegex.test(password)) {
      tempErrors.push("Password must contain at least one number.")
    }
    if (!specialCharRegex.test(password)) {
      tempErrors.push("Password must contain at least one special character.")
    }
    if (!minLengthRegex.test(password)) {
      tempErrors.push("Password must be at least 8 characters long.")
    }

    setPasswordErrors(tempErrors)

    const isPasswordValid = tempErrors.length == 0

    return isPasswordValid

  }

  //____________________________________________________________________________________________//

  //Handle password visibility
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  //____________________________________________________________________________________________//


  return (
    <div className="flex flex-col gap-2 w-96 h-auto items-center content-center align-center justify-center overflow-hidden">
      <Input 
      variant={"faded"}
      isRequired
      type="email" 
      isClearable={true}
      onClear={() => setSignupEmail("")}
      label="Email" 
      value={signupEmail}
      onValueChange={setSignupEmail}
      isInvalid={message.type == "signupEmailError"}
      errorMessage={message.type == "signupEmailError" && message.msg}
      size={"md"}
      className={"text-sky-500 bg-theme"}
      />
  
      <Input
      variant={"faded"}
      isRequired
      label="Password"
      endContent={
        <button type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <IoEye className="text-xl pointer-events-none" />
          ) : (
            <IoEyeOff className="text-xl pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      value={signupPassword}
      onChange={(e) => handleSignupPasswordChange(e)}
      isInvalid={message.type == "signupPasswordError"}
      errorMessage={message.type == "signupPasswordError" && message.msg} 
      size={"md"}
      className={"text-sky-500 bg-theme"}
      />

      <Input 
      variant={"faded"}
      label="Company" 
      value={company}
      onValueChange={setCompany}
      size={"md"}
      className={"text-sky-500 bg-theme"}
      />

      <Select
      className="text-sky-500"
      label="Role"
      placeholder="Select a role"
      selectedKeys={role}
      variant="faded"
      isRequired
      onSelectionChange={setRole}
      >
        {roles.map((role) => (
          <SelectItem key={role.key}>{role.label}</SelectItem>
        ))}
      </Select>

      <Select
      className="text-sky-500"
      label="From"
      placeholder="How did you hear about us?"
      selectedKeys={from}
      variant="faded"
      isRequired
      onSelectionChange={setFrom}
      >
        {froms.map((from) => (
          <SelectItem key={from.key}>{from.label}</SelectItem>
        ))}
      </Select>

    <div className={"flex w-full items-center justify-end pr-4"}>
      <Checkbox 
        size='sm' 
        defaultSelected
        className={"bg-theme text-theme"}
        isRequired
        isDisabled
      >
        <p className="bg-theme text-theme">I agree to the terms of service</p>
      </Checkbox>
    </div>

    <div className="flex content-start justify-start">
      {passwordErrors.length > 0 && (
        <div className="flex flex-col">
            <p className="text-rose-500 text-xs italic">
              @{passwordErrors[0]}
            </p>
        </div>
      )}
    </div>

    <div className={"flex flex-col w-full gap-2 justify-center"}>
      <div className="flex text-center justify-center h-4">
        {message.type == "signupMessage" && (
          <p className="md:text-sm text-base text-blue-400 font-medium">{message.msg}</p>
        )}
      </div>
      <Button      
        variant="solid"                                    
        isLoading={(message.type == "isSignupLoading")}
        disabled={message.type == "signupLoading"} 
        onPress={() => handleSignup()}   
        className={`w-full px-4 py-6 text-base md:text-base rounded-xl bg-gradient-to-br from-cyan-300 via-blue-500 to-sky-500 text-theme font-medium`}
      >
          Signup
      </Button>
      <Button
        variant="solid"
        isLoading={(message.type == "googleLoading")}
        disabled={(message.type == "signupLoading")} 
        onPress={(e) => handleGoogleLogin()} 
        startContent={<FcGoogle size={28} />}
        className={`w-full px-4 py-6 text-base md:text-base border border-default-400 bg-white text-theme font-medium flex items-center align-center text-center justify-center rounded-xl`} >
          Sign up with Google
      </Button>
    </div>
  </div>
  )
}
