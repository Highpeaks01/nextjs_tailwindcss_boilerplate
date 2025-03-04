"use client"


import { FaQuestionCircle, FaUnlockAlt } from "react-icons/fa";
import { useUser } from "../../providers/UserProvider";
import ButtonPrimitive from "../Primitives/ButtonPrimitive";
import Profile from "../Basic/Profile";
import Credits from "../Shop/Credits";
import Logo from "../Basic/Logo";
import { Button, Link, useDisclosure } from "@heroui/react";
import DocsModal from "../Basic/DocsModal";


export default function Navbar({}){

    const { user, authModal } = useUser()
    const docsModal = useDisclosure()

    return(
        <div className="flex md:w-1/2 w-full gap-4 justify-between items-center border-1 border-theme rounded-xl bg-theme px-4 py-2">
            {/* Logo on the Left */}
            <Button 
            as={Link}
            href={"/"}
            className="m-0 p-0 bg-transparent flex-1"
            >
                <Logo />
            </Button>

            {/* Buttons on the Right */}
            <div className="flex gap-4">
                {!user ? (
                    <Button 
                    isDisabled={false}
                    onPress={() => authModal.onOpen()}
                    className="px-4 py-2 rounded-xl text-base bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500"
                    startContent={<FaUnlockAlt />}
                    >
                        Login
                    </Button>
                ) : (
                    <>
                        <Profile />
                        <Credits />
                    </>
                )}
            </div>

            <Button
                onPress={docsModal.onOpen}
                className="bg-transparent  p-0 h-auto w-auto min-w-0 m-0 rounded-full"
                startContent={<FaQuestionCircle size={24} />}
            />
            <DocsModal docsModal={docsModal} />
        </div>
    )
}