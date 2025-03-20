"use client"


import { useDisclosure } from "@heroui/react"
import { createContext, useContext, useEffect, useState } from "react"
import ShopModal from "../components/Shop/ShopModal"
import { GoPremiumWithCloseModal } from "../components/Shop/GoPremiumWithCloseModal"
import { GoPremiumWithGoBackModal } from "../components/Shop/GoPremiumWithGoBackModal"
import ClientConfig from "../../client.config"


export const ShopContext = createContext(null)

export const ShopProvider = ({ children }) => {

    const [premiumModal, goBackModal, shopModal] = [useDisclosure(), useDisclosure(), useDisclosure()]
    const [serverTime, setServerTime] = useState(null) // State for server time
    const [shopMessage, setShopMessage] = useState({})

    // Fetch server time on mount
    /*useEffect(() => {
        const fetchServerTime = async () => {
        try {
            const response = await fetch(ClientConfig.server_info)
            const data = await response.json()
            setServerTime(data.timestamp) // Set the server timestamp
        } catch (error) {
            console.error("Failed to fetch server time:", error)
        }
        }
        fetchServerTime()
    }, [])*/

    // Waiting message condition
    /*const isWaitingMessageTrue = serverTime && userData?.subscription?.plan !== "plus" &&
    userData?.api_calls?.botchats_messages_add + userData?.api_calls?.botchats_messages_regenerate >= 1 &&
    (userData?.api_calls?._lastUpdate + 24 * 60 * 60 * 1000 - serverTime) > 0*/

    const isWaitingMessageTrue = false

    // Open Shop Modal if waiting message is true
    useEffect(() => {
        if (isWaitingMessageTrue) {
            shopModal.onOpen()
        }
    }, [isWaitingMessageTrue])

    const openShopModal = () => {
        shopModal.onOpen()
        localStorage.setItem("lastShopModalShown", serverTime || Date.now()) // Use server time if available
    }

    const closeShopModal = () => {
        if (!isWaitingMessageTrue) {
            shopModal.onOpenChange()
        }
    }

    const openPremiumModal = (message) => {
        setShopMessage({ type: "premium", msg: message})
        premiumModal.onOpen()
    }

    const openGoBackModal = (message) => {
        setShopMessage({ type: "goBack", msg: message})
        goBackModal.onOpen()
    }


    return(
        <ShopContext.Provider value={{ 
            openPremiumModal,
            openGoBackModal,
            openShopModal,
            closeShopModal,
            shopModal,
            shopMessage,
            premiumModal,
            goBackModal,
         }}>
            {children}
            {/* Render modals conditionally */}
            <ShopModal
                shopModal={shopModal}
            />

            <GoPremiumWithCloseModal />

            <GoPremiumWithGoBackModal />

        </ShopContext.Provider>
    )
}

export function useShop() {
    return useContext(ShopContext)
}