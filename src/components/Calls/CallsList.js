import { useUser } from "../../providers/UserProvider"
import ClientConfig from "@/components/client.config"
import { Button, Card, CardBody, CardFooter, CardHeader, Link, useDisclosure } from "@heroui/react"
import { useEffect, useRef, useState } from "react"
import { FaBook, FaCopy, FaPlus, FaTrash } from "react-icons/fa"
import NewCallModal from "./NewCallModal"
import CallsFilter from "./CallsFilter"
import { formatTimestamp } from "../../utils/utils"


export default function CallsList({}){

    const { user, userData, authModal, message, setMessage, handleGetIdToken } = useUser()

    const sampleCall = ClientConfig.sampleCall
    const calls = useRef([])
    const [filteredCalls, setFilteredCalls] = useState([])

    const newCallModal = useDisclosure()

    //Fetch the call
    const fetchCallsData = async () => {
        setMessage({ type: "callsLoading", msg: "" })
        const response = await fetch(`${ClientConfig.calls_get}?user_id=${userData?.uid}&public_id=${userData.public_id}`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${await handleGetIdToken()}`,
            'Content-Type': 'application/json',
            },
        })

            if (response.ok) {
                const data = await response.json()
                calls.current = data.calls
                setFilteredCalls(data.calls)
                setMessage({ type: "", msg: "" })

            } else {
                setMessage({ type: "callsFetchingError", msg: "Error fetching calls"})
            }

        return
    }

    useEffect(() => {
        if(userData){
            fetchCallsData()
        }
    }, [userData])

    const handleDeleteCall = async (call) => {

        setMessage({ type: `deleting${call.id}`, msg: "" })

        try {

            const response = await fetch(ClientConfig.calls_delete, {
                method: 'POST',
                headers: {
                'Authorization': `Bearer ${await handleGetIdToken()}`,
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userData.uid,
                    public_id: userData.public_id,
                    call_id: call.id,
                }),
            })
    
            if (response.ok) {
                // ph: group
                /*posthog.capture('call', {
                action: "create",
                user_id, 
                call_title: title,
                })*/

                const newCalls = filteredCalls.filter(item => item.id !== call.id)
                setFilteredCalls(newCalls)

                // Simulate some asynchronous action, like an API call
                setTimeout(() => {
                    setMessage({})
                }, 1000)

            } else {
                throw new Error(response.statusText)
            }
        } catch (error) {
          console.error('Error creating group:', error)
          setMessage({ type: "deleteError", msg: "Error deleting call"})
          return setTimeout(() => {
            setMessage({})
          }, 2000)
        }
    }

    const handleDuplicateCall = async (call) => {

        setMessage({ type: `duplicating${call.id}`, msg: "" })

        try {

            const response = await fetch(ClientConfig.calls_duplicate, {
                method: 'POST',
                headers: {
                'Authorization': `Bearer ${await handleGetIdToken()}`,
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userData.uid,
                    public_id: userData.public_id,
                    call_id: call.id,
                }),
            })
    
            if (response.ok) {
                // ph: group
                /*posthog.capture('call', {
                action: "create",
                user_id, 
                call_title: title,
                })*/

                const newCall = await response.json()
                const newCalls = [...filteredCalls, newCall]

                setFilteredCalls(newCalls)

                // Simulate some asynchronous action, like an API call
                setTimeout(() => {
                    setMessage({})
                }, 1000)

            } else {
                throw new Error(response.statusText)
            }
        } catch (error) {
          console.error('Error creating group:', error)
          setMessage({ type: "deleteError", msg: "Error deleting call"})
          return setTimeout(() => {
            setMessage({})
          }, 2000)
        }
    }

    return(

        <div className="flex flex-col w-full p-8">
            <div className="flex flex-col space-y-4 w-full items-center text-center justify-center">
                <h1 className="font-bold text-2xl">Your Hint Boxes</h1>
                <h2 className="font-semibold text-xl">Hints boxes are containers to organize and share your transcriptions and hints</h2>
                <h3 className="flex flex-col items-start font-normal text-lg">
                    <p>1. Add a new box and start recording your device audio</p>
                    <p>2. Split your screen between the call tab and the box tab</p>
                    <div className="flex gap-1">
                        <p>3.</p>
                        <p className="font-bold text-sky-500">{ClientConfig.appName}</p> 
                        <p> will listen to your conversation and provide real-time hints</p>
                    </div>
                </h3>
                <div className="flex mt-2 gap-2">
                    <Button
                        onPress={() => {
                            if(user) {
                                newCallModal.onOpen()
                            } else {
                                authModal.onOpen()
                            }
                            return
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500"
                        startContent={<FaPlus />}
                    >
                        New
                    </Button>
                </div>
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
                <CallsFilter
                    calls={calls}
                    setFilteredCalls={setFilteredCalls}
                />
                {message.type == "callsLoading" ? (
                    <div className="flex flex-col gap-2">
                        <div className="h-24 w-full rounded-xl bg-cyan-500 opacity-30 animate-pulse font-semibold">
                        </div>
                        <div className="h-24 w-full rounded-xl bg-cyan-500 opacity-30 animate-pulse font-semibold">
                        </div>
                        <div className="h-24 w-full rounded-xl bg-cyan-500 opacity-30 animate-pulse font-semibold">
                        </div>
                        <div className="h-24 w-full rounded-xl bg-cyan-500 opacity-30 animate-pulse font-semibold">
                        </div>
                    </div>
                ) : (
                    <>
                    {filteredCalls.length > 0 ? (
                        filteredCalls.map((call, index) => (
                        <Card 
                            key={call.id}
                            className="w-full p-2 text-theme"
                        >
                            <CardHeader className="flex flex-col w-full">
                            <div className="flex w-full justify-start">      
                                <p className="text-xs font-semibold italic text-theme">{formatTimestamp(call.timestamp)}</p>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <span className="text-lg font-bold">{call.title}</span>
                                
                                <div className="flex space-x-2">
                                    <Button 
                                    isLoading={message.type == `deleting${call.id}`}
                                    className="bg-transparent p-0 h-auto w-auto min-w-0"
                                    startContent={<FaTrash />}
                                    onPress={() => handleDeleteCall(call)}
                                    />
                                    <Button 
                                    isLoading={message.type == `duplicating${call.id}`}
                                    className="bg-transparent p-0 h-auto w-auto min-w-0"
                                    startContent={<FaCopy />}
                                    onPress={() => handleDuplicateCall(call)}
                                    />
                                </div>
                            </div>
                            
                            </CardHeader>
                            <CardBody>{call.context.slice(0,300) + "..."}</CardBody>
                            <CardFooter>
                            <Button
                                as={Link}
                                className="px-4 py-2 bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500"
                                href={`/calls/${call.id}`} 
                            >
                                Open Box
                            </Button>
                            </CardFooter>
                        </Card>
                    ))) : (
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-theme italic font-light text-sm">You have no boxes, create you first one!</p>
                        </div>
                    )}
                    </>
                )}
            </div>

            <NewCallModal newCallModal={newCallModal} />

        </div>
    )
}