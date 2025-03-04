// components/SignupForm.js
import { useState } from 'react'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@heroui/react"

import { sendPasswordResetEmail} from 'firebase/auth'
import { auth } from '../../lib/firebase'


export default function ForgotPassword({

  message,
  setMessage,
  forgotPasswordModal,
  handleCheckEmail,

}) {

  //Handle reset password
  const [resetPasswordEmail, setResetPasswordEmail] = useState('')
  const handleResetPassword = async () => {

    const isValidEmail = handleCheckEmail(resetPasswordEmail)

    if(!isValidEmail){
      setMessage({type: "forgotEmailType", msg: "Please enter a valid email"})
      return setTimeout(() => {
        setMessage({type: "", msg: ""})
      }, 3000)
    }

    try {
        setMessage({type: "forgotEmailLoading", msg:""})
        await sendPasswordResetEmail(auth, resetPasswordEmail)
        setMessage({type: "forgotEmailSuccess", msg:"Check your mailbox!"})
        return setTimeout(() => {
          setMessage({type: "", msg: ""})
          setResetPasswordEmail("")
          forgotPasswordModal.onOpenChange()
        }, 2000)
    } catch (error) {
        console.error('Error sending password reset email:', error.message)
        setMessage({type: "forgotEmailError", msg: `Error sending email. \n ${error.message.replace('Firebase: Error','').replace('(auth/user-not-found).', 'User not Found')}`})
        return setTimeout(() => {
          setMessage({type: "", msg: ""})
        }, 3000)
    }

  }


  return (

    <div>
      {/*Forgot password modal*/}
      <Modal 
        isOpen={forgotPasswordModal.isOpen} 
        onOpenChange={() => forgotPasswordModal.onOpenChange()}
        placement="center"
        className="mx-3"
        backdrop={"blur"}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent className={"bg-theme text-theme border border-default-100 border-opacity-60"}>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center"><p className="md:text-md text:base text-default-800">Reset password</p></ModalHeader>
              <ModalBody>
                <div>
                  <Input 
                    variant={"underlined"}
                    isRequired 
                    onClear={() => setResetPasswordEmail("")}
                    label="Email" 
                    className={"dark text-default-400 w-full rounded-xl"}
                    size={"lg"} 
                    value={resetPasswordEmail}
                    onChange={(e) => setResetPasswordEmail(e.target.value)}
                    isInvalid={message.type == "forgotEmailType"}
                    errorMessage={message.type == "forgotEmailType" && message.msg}
                    type="email" 
                  />
                </div>
                </ModalBody>
                <ModalFooter className="flex flex-col justify-center items-center">
                  <div className="flex flex-col space-y-2 justify-center items-center">
                      <Button
                        size={"md"}
                        isLoading={message.type == "forgotEmailLoading"}
                        onPress={() => handleResetPassword()} 
                        className='px-4 py-4 rounded-xl text-base bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500'
                      >
                        Send Reset Email
                      </Button>
                      {(message.type == "forgotEmailSuccess" || message.type == "forgotEmailError") && (
                        <p className="mt-4 md:text-sm text-xs font-bold">{message.msg}</p>
                      )}
                  </div>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>

  )
}
