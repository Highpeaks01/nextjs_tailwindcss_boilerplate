"use client";

// Icons
import { BsStars } from "react-icons/bs"
import { MdOutlineExplore } from "react-icons/md"
import { RiChatSmile2Line } from "react-icons/ri"
import { LuFrame, LuPalette, LuUser2, LuUserCircle2, LuVenetianMask } from "react-icons/lu"
import { FaDiscord, FaHeart, FaReddit } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"

// NextUI
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@heroui/react"

// Studio
import { useRouter } from "next/navigation"
import { useUser } from "../../providers/UserProvider";
import { useShop } from "../../providers/ShopProvider";


export default function HomeMenu({}) {

    const router = useRouter()

    // User
    const { user, userData, openLoginModal, openAuthModal } = useUser()

    //Shop
    const { isShopModalOpen, openShopModal, closeShopModal } = useShop()

    const toggleLoginOrRedirect = (path) => {
        if (user) {
            router.push(path)
        } else {
            openLoginModal()
        }
    }

  return (
    <>
      <div className="z-30 md:mb-4 w-full flex items-center justify-center align-center fixed bottom-0 left-0 right-0 md:p-4 bg-gray-800 text-white md:rounded-full bg-transparent">
        <div className="md:p-0 p-2 w-full md:w-auto flex justify-center align-center border-t border-t-default-900 md:border md:border-default-900 flex-rows md:rounded-full backdrop-blur-md bg-opacity-80 bg-black">
            <Button
            as={Link}
            href={"/"}
            className="flex flex-col py-8 px-2 md:py-8 md:px-4 bg-transparent text-white hover:text-opacity-80 duration-500 flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
            >
                <MdOutlineExplore size={30} />
                <span className="hidden md:flex">Realtime canvas</span>
            </Button>

            <Button
            as={Link}
            href={"/search/anime"}
            className="flex flex-col py-8 px-2 md:py-8 md:px-4 bg-transparent text-white hover:text-opacity-80 duration-500 flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
            >
                <FiSearch size={28} />
                <span className="hidden md:flex">Realtime Generation</span>
            </Button>

            <Button
            onPress={() => toggleLoginOrRedirect("/motion")}
            className="flex flex-col py-8 px-2 md:py-8 md:px-4 bg-transparent text-white hover:text-opacity-80 duration-500 flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
            >
                <BsStars size={28} />
                <span className="hidden md:flex">Motion</span>
            </Button>

            <Button
            onPress={() => toggleLoginOrRedirect("/chats")}
            className="flex flex-col py-8 px-2 md:py-8 md:px-4 bg-transparent text-white hover:text-opacity-80 duration-500 md:flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
            >
                <RiChatSmile2Line size={30} />
                <span className="hidden md:flex">Image Creation</span>
            </Button>

            <Button
            onPress={() => toggleLoginOrRedirect("/chats")}
            className="flex flex-col py-8 px-2 md:py-8 md:px-4 bg-transparent text-white hover:text-opacity-80 duration-500 md:flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
            >
                <RiChatSmile2Line size={30} />
                <span className="hidden md:flex">Upscale</span>
            </Button>

            <Button
            onPress={() => toggleLoginOrRedirect("/chats")}
            className="flex flex-col py-8 px-2 md:py-8 md:px-4 bg-transparent text-white hover:text-opacity-80 duration-500 md:flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
            >
                <RiChatSmile2Line size={30} />
                <span className="hidden md:flex">Canvas Editor</span>
            </Button>
        </div>
      </div>
    </>
  )
}
