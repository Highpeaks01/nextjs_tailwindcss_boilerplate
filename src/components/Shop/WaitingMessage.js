//NextJS
import React, { useState, useEffect } from 'react'

//ClientConfig
import ClientConfig from '../../../client.config'

//NextUI
import { Button } from "@heroui/react"

//ShopProvider
import { BsStars } from 'react-icons/bs'
import { useShop } from '../../providers/ShopProvider'

export default function WaitingMessageGoPremium ({ userData }) {

  const { shopModal } = useShop()

  const [serverTime, setServerTime] = useState(null) // State for server time
  const [timeRemaining, setTimeRemaining] = useState(null) // State for countdown

  // Fetch server time on mount
  useEffect(() => {
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
  }, [])

  // Update countdown every second if there is time remaining
  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prev) => Math.max(prev - 1000, 0))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timeRemaining])

  if (
    userData?.subscription?.plan !== "plus" &&
    (
      userData?.api_calls?.botchats_messages_regenerate >= 100 ||
      userData?.api_calls?.chats_text_generation >= 100 ||
      userData?.api_calls?.chats_pictures_generation >= 20 ||
      userData?.api_calls?.chats_pictures_caption >= 20
    )
  ) {
    const nextAllowedTime = userData?.api_calls?._lastUpdate + 24 * 60 * 60 * 1000

    if (serverTime) {
      const initialTimeRemaining = nextAllowedTime - serverTime
      if (initialTimeRemaining > 0 && timeRemaining === null) {
        setTimeRemaining(initialTimeRemaining)
      }
    }

    if (timeRemaining > 0) {
      const hours = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(2, '0')
      const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
      const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0')

      return (
        <div className={"fixed bottom-0 left-0 w-full bg-black bg-opacity-40 w-screen z-50 flex align-center items-center justify-center"}>
          <div className={"bg-black w-full border-t border-default-900 rounded-2xl p-6"}>          
            <div className="text-center mt-4 px-4">
              <p className="font-extralight text-default-400">
                You have reached your limit for the day. <br />
                Wait {hours}:{minutes}:{seconds} to continue, or upgrade your plan to unlock unlimited access.
              </p>
            </div>
            <div className={"flex align-center items-center justify-center"}>
              <Button
                onPress={() => shopModal.onOpen()}
                className="mt-4 py-6 bg-gradient-to-r from-violet-500 to-purple-500 bg-transparent text-white hover:text-opacity-80 duration-500 flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
                startContent={<BsStars size={20} className={"text-default-100"} />}
              >
                Get Premium
              </Button>
            </div>
          </div> 
        </div>
      )
    }
  }
  return null
}
