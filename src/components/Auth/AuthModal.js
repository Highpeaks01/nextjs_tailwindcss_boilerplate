import { useDisclosure } from "@heroui/react"
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react"
import VerifyForm from './VerifyForm'
import { useUser } from "../../providers/UserProvider"
//Next UI
import { Tabs, Tab, Card, CardBody, CardHeader, Link } from "@heroui/react"

//Components
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default function AuthModal ({}) {

    const { authModal, verificationRequired } = useUser()
    //UI
    //Login or Signup tabs selector
    const [selectedTab, setSelectedTab] = useState("sign-up")

    return (
        <Modal
            isOpen={authModal.isOpen}
            onOpenChange={authModal.onOpenChange}
            isDismissable={!verificationRequired}
            isKeyboardDismissDisabled={verificationRequired}
            hideCloseButton={verificationRequired}
            placement="center"
            className="dark"
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
                },
            }}
        >
        <ModalContent className="bg-theme text-theme">
            <>
            <ModalHeader className="flex justify-center"></ModalHeader>
            <ModalBody className="flex flex-col justify-center items-center">
                {verificationRequired ? (
                    <VerifyForm /> 
                ) : (
                    <Tabs
                        fullWidth
                        className="bg-theme text-theme"
                        size={"md"}
                        variant={"underlined"}
                        aria-label="Tabs form"
                        radius={"sm"}
                        selectedKey={selectedTab}
                        onSelectionChange={setSelectedTab}
                    >
                        <Tab 
                            key="login" 
                            title={
                                <div className={`${selectedTab == "login" ? "text-sky-500" : "text-theme"} flex text-xl items-center space-x-2`}>
                                <span>Login</span>
                                </div>
                            }
                        >
                            <LoginForm />
                        </Tab>
                        <Tab 
                            key="sign-up" 
                            title={
                                <div className={`${selectedTab == "sign-up" ? "text-sky-500" : "text-theme"} flex text-xl items-center space-x-2`}>
                                <span>Sign Up</span>
                                </div>
                            }
                        >
                            <SignupForm />
                        </Tab>
                    </Tabs>
                )}
            </ModalBody>
            <ModalFooter className="flex flex-col justify-center items-center"></ModalFooter>
            </>
        </ModalContent>
        </Modal>
    )
    }
