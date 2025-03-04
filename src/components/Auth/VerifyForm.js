"use client"


//Next React
import Head from 'next/head'
import { useEffect, useState } from 'react'

//NextUI
import { Button } from "@heroui/react"
import { useUser } from '../../providers/UserProvider'
import { useRouter } from 'next/navigation'


export default function VerifyForm() {

    const router = useRouter()

    // ____ USER / AUTH _________________________________________//

    const { handleLogout, handleSendVerificationEmail, message, setMessage } = useUser()

    const resendVerificationEmail = async () => {
        setMessage({ type: "sendingVerificationEmail", msg: ""})
        await handleSendVerificationEmail()
        setMessage({ type: "verificationEmailSent", msg: "Check your email!"})
        setTimeout(() => {
            setMessage("")
        }, 3000)
    }
    
    return (
    <>
        <div>

            <div className="text-theme bg-theme h-auto flex justify-center items-center">
                <div className="p-2 text-center">
                    <div className={"font-semibold p-4"}>
                        <h1 className="text-2xl mb-4">Email Verification</h1>
                        <p className="mb-4">Please check your email for the verification link.</p>
                        <p className="mb-4">
                            If you haven't received the email, you can request a new one by clicking the button below.
                        </p>
                    </div>

                    {message ? (
                        <p className="font-medium md:text-base text-sm">{message.msg}</p>
                    ) : (
                        <div className="h-8"></div>
                    )}

                    <Button
                        className='mt-6 mb-4 text-xl px-8 py-6 font-base rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 hover:opacity-60' 
                        onPress={() => window.location.reload()}>
                            Check Verification
                    </Button>

                    <br/>

                    <Button
                        isLoading={message.type == "sendingVerificationEmail"}
                        disabled={message.type == "sendingVerificationEmail"}
                        className='mb-2 bg-default-50 px-8 py-6 font-base text-lg md:text-lg rounded-xl' 
                        onPress={resendVerificationEmail}>
                            Resend Verification Email
                    </Button>

                    <br/>   

                    <Button
                        className="px-8 py-6 font-light rounded-xl bg-black hover:opacity-60"
                        onPress={handleLogout}>
                            Logout
                    </Button>

                </div>
            </div>

        </div>
    </>
  )
}
