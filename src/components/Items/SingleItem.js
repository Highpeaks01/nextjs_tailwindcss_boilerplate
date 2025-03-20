import ClientConfig from "@/components/client.config";
import CallNavbar from "./CallNavbar";
import CallMessages from "./SubItems";
import GetCallAudio from "./GetCallAudio";
import { useEffect, useRef, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Link,
  } from "@heroui/react";
import { FaEllipsisV, FaHome } from "react-icons/fa";
import { useUser } from "../../providers/UserProvider";

export default function CallId({
    callId
}){

    //Interval
    const [interval, setInterval] = useState(20);
    const [autoInterval, setAutoInterval] = useState(true);
    //Silence interval
    const [silence, setSilence] = useState(1);
    //Source
    const [source, setSource] = useState(new Set(["both"]));
    const [llm, setLlm] = useState(new Set(["claude"]))
    const [role, setRole] = useState(new Set(["salesman"]))
    const [status, setStatus] = useState("Waiting for user action...")

    //Context
    const [context, setContext] = useState("") 
    //Options
    const optionsModal = useDisclosure()   

    const oldCall = useRef({})
    const [title, setTitle] = useState("")
    const [isPublic, setPublic] = useState(true)
    const [ knowledge, setKnowledge ] = useState([
        {id: "pdf-1", title: "Pdf", description: "good pdf", timestamp: 123456},
        {id: "pdf-2", title: "Pdf 2", description: "good pdf", timestamp: 123456}
    ])

    const { userData, message, setMessage, handleGetIdToken } = useUser()

    //Messages
    const [messages, setMessages] = useState([]);

    //Fetch the call
    const fetchCallData = async (id) => {
        const response = await fetch(`${ClientConfig.calls_get}?call_id=${id}&user_id=${userData.uid}&public_id=${userData.public_id}`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${await handleGetIdToken()}`,
            'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            const data = await response.json()
            const call = data.calls[0]
            const messages = data.messages
            
            oldCall.current = call
            setTitle(call.title)
            setContext(call.context)
            
            setSource(new Set([call.source]))
            setLlm(new Set([call.llm]))            
            setRole(new Set([call.role]))

            setAutoInterval(call.auto_interval)
            setInterval(call.recording_interval)
            setSilence(call.silence_interval)
            setPublic(call.privacy == "public")

            setMessages(messages)

        } else {
            setMessage({ type: "callFetchingError", msg: "Error fetching call"})
        }
        return
    }

    useEffect(() => {
        if(userData){
            fetchCallData(callId)
        }
    }, [userData])

    return(
        <div>
            <div className="flex gap-2 w-5/6 fixed px-6 top-0 left-1/2 -translate-x-1/2 z-10 mt-32 justify-center items-center bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 border-1 border-blue-500 rounded-2xl">
                <Button 
                as={Link}
                href={'/'}
                startContent={<FaHome />}
                className="bg-gray-300 rounded-xl"
                >
                    Home
                </Button>
                <GetCallAudio 
                callId={callId} 
                source={source} 
                interval={interval}
                autoInterval={autoInterval}
                silence={silence}
                context={context}
                llm={llm}
                role={role}
                messages={messages}
                setMessages={setMessages}
                setStatus={setStatus}
                />
                <Button 
                onPress={optionsModal.onOpen}
                startContent={<FaEllipsisV />}
                >
                    Options
                </Button>
                <Modal 
                isOpen={optionsModal.isOpen} 
                onOpenChange={optionsModal.onOpenChange}
                size={"4xl"}
                >
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col text-center gap-1">Options</ModalHeader>
                        <ModalBody>
                            <CallNavbar 
                                optionsModal={optionsModal}
                                callId={callId} 
                                source={source} 
                                setSource={setSource} 
                                interval={interval}
                                setInterval={setInterval}
                                autoInterval={autoInterval}
                                setAutoInterval={setAutoInterval} 
                                silence={silence}
                                setSilence={setSilence}
                                title={title}
                                setTitle={setTitle}
                                context={context}
                                setContext={setContext}     
                                isPublic={isPublic}
                                setIsPublic={setPublic}       
                                llm={llm}
                                setLlm={setLlm}
                                role={role}
                                setRole={setRole}
                                />
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
                <Link 
                href={'https://forms.gle/oNSu54Tvn5y4Axfw9'}
                isExternal={true}
                className="text-theme bg-transparent italic pl-4"
                >
                    Leave a feedback
                </Link>
            </div> 
            <div className="flex flex-col pt-36 justify-center">
                <div>
                    <CallMessages 
                    messages={messages}
                    status={status}
                    />
                </div>
                {messages?.length == 0 && (
                    <p className="text-md italic text-theme">Your hints will appear here a few seconds after you start recording.</p>
                )}
            </div>        
        </div>

    )
}