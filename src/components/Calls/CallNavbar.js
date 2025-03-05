import { MdOutlineMotionPhotosAuto, MdOutlineTextFields } from "react-icons/md";
import { 
    useDisclosure, 
    Select, 
    SelectSection, 
    SelectItem, 
    Input, 
    Accordion, 
    AccordionItem, 
    Textarea, 
    Button, 
    Switch, 
    Checkbox, 
    Slider,  
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@heroui/react";
import ClientConfig from "@/components/client.config";
import { useEffect, useRef, useState } from "react";
import { FaLock, FaLockOpen, FaMinus, FaPlus, FaRegClock } from "react-icons/fa";
import { FiChevronsDown } from "react-icons/fi";
import { FaBolt } from "react-icons/fa6";
import { useUser } from "../../providers/UserProvider";
import PopoverTip from "../Primitives/PopoverTip";

export default function CallNavbar({
    optionsModal,
    callId,
    source,
    setSource,
    interval,
    setInterval,
    autoInterval,
    setAutoInterval,
    silence,
    setSilence,
    isPublic,
    setPublic,
    context,    
    setContext,
    title,
    setTitle,
    setMessages,
    llm,
    setLlm,
    role,
    setRole,
}){

    const { userData, message, setMessage, handleGetIdToken } = useUser()
    
    //___________________________________________________________//

    const handleEditCall = async () => {

        if(!title){
          return setMessage({ type: "callTitleError", msg: "Please enter a title."})
        } else {
          setMessage({ type: "callEditing", msg: "" })
        }

        try {

            /*const formData = new FormData()

            formData.append("user_id", userData.uid)
            formData.append("public_id", userData.public_id)
            formData.append("call_id", callId)
            formData.append("title", title)
            formData.append("context", context)
            formData.append("llm", llm.values().next().value)
            formData.append("role", role.values().next().value)
            formData.append("auto_interval", autoInterval)
            formData.append("interval", interval)
            formData.append("source", source.values().next().value)
            formData.append("privacy", isPublic ? "public" : "private")*/

            const callData = {
                user_id: userData.uid,
                public_id: userData.public_id,
                call_id: callId,
                title,
                context,
                auto_interval: autoInterval,
                silence_interval: silence,
                recording_interval: interval,
                llm: llm.values().next().value,
                role: role.values().next().value,
                source: source.values().next().value,
                privacy: isPublic ? "public" : "private",
            }

            const response = await fetch(ClientConfig.calls_edit, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${await handleGetIdToken()}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(callData),
            })
    
            if (response.ok) {
                // ph: group
                /*posthog.capture('call', {
                action: "create",
                user_id, 
                call_title: title,
                })*/

                const newCall = await response.json()

                // Simulate some asynchronous action, like an API call
                setTimeout(() => {
                    optionsModal.onClose()
                    setMessage({})
                }, 1000)

            } else {
                throw new Error(response.statusText)
            }
        } catch (error) {
          console.error('Error creating group:', error)
          setMessage({ type: "submitError", msg: "Error editing call"})
          return setTimeout(() => {
            setMessage({})
          }, 2000)
        }
    
    }

    return(
        <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2 my-4">
                <Input
                className="text-theme w-full rounded-xl"
                size={"lg"}
                label="Title" 
                placeholder="Something meaningful" 
                errorMessage={message.msg}
                isInvalid={message.type == "callTitleError"}
                variant="faded"
                value={title} 
                onValueChange={setTitle} 
                />
                <Textarea
                className="text-theme w-full rounded-xl"
                defaultValue=""
                size={"lg"}
                errorMessage={message.msg}
                minRows={8}
                isInvalid={message.type == "callContextError"}
                label="Notes"
                placeholder="Last second thoughts. Anything the model should know on the fly."
                variant="faded"
                value={context}
                onValueChange={setContext}
                />
                <div className="grid grid-cols-2 items-center justify-center gap-4 my-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex">
                            <Checkbox
                            size="lg"
                            color="primary"
                            radius="sm"
                            icon={<MdOutlineMotionPhotosAuto />}
                            isSelected={autoInterval} 
                            onValueChange={setAutoInterval}
                            >
                                <p className="text-theme">Auto detect pauses</p>
                            </Checkbox>
                            <PopoverTip message={"If on, set the pause duration before getting a hint. If disabled, get the hints at specified intervals."} />
                        </div>
                        <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
                            
                            {!autoInterval ? (
                                <>
                                    <Slider
                                    aria-label="Volume"
                                    className="max-w-md"
                                    color="success"
                                    maxValue={60}
                                    minValue={20}
                                    step={5}
                                    endContent={
                                    <Button
                                        isIconOnly
                                        radius="full"
                                        variant="light"
                                        onPress={() => setInterval((prev) => (prev <= 55 ? prev + 5 : 60))}
                                    >
                                        <FaRegClock className="text-2xl" />
                                    </Button>
                                    }
                                    size="lg"
                                    startContent={
                                    <Button
                                        isIconOnly
                                        radius="full"
                                        variant="light"
                                        onPress={() => setInterval((prev) => (prev >= 25 ? prev - 5 : 20))}
                                    >
                                        <FaBolt className="text-2xl" />
                                    </Button>
                                    }
                                    value={interval}
                                    onChange={setInterval}
                                    />
                                    <p className="text-theme font-medium text-md">Current interval: {interval}</p>
                                </>
                            ) : (
                                <>
                                <Slider
                                aria-label="Silence duration"
                                className="max-w-md"
                                color="success"
                                maxValue={5}
                                minValue={1}
                                step={1}
                                endContent={
                                <Button
                                    isIconOnly
                                    radius="full"
                                    variant="light"
                                    onPress={() => setSilence((prev) => (prev <= 4 ? prev + 1 : 5))}
                                >
                                    <FaPlus className="text-2xl" />
                                </Button>
                                }
                                size="lg"
                                startContent={
                                <Button
                                    isIconOnly
                                    radius="full"
                                    variant="light"
                                    onPress={() => setSilence((prev) => (prev >= 2 ? prev - 1 : 1))}
                                >
                                    <FaMinus className="text-2xl" />
                                </Button>
                                }
                                value={silence}
                                onChange={setSilence}
                                />
                                <p className="text-theme font-medium text-md">Current silence duration: {silence}</p>
                            </>
                            )}
                        </div>  
                    </div>
                    <div className="w-full">
                        <p className="text-theme">Type of assitant</p>
                        <Select
                        disableSelectorIconRotation 
                        className="max-w-xs"
                        placeholder="Type of assistant"
                        selectedKeys={role}
                        variant="bordered"
                        onSelectionChange={setRole}
                        >
                            {ClientConfig.availableRoles.map((role) => (
                                <SelectItem 
                                key={role.key}
                                >
                                    {role.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <PopoverTip message={"Who's the best to help you right now?"} />
                    </div>
                    <div className="w-full">
                        <p className="text-theme">Reasoning model</p>
                        <Select
                        disableSelectorIconRotation 
                        className="max-w-xs"
                        placeholder="Text model"
                        selectedKeys={llm}
                        variant="bordered"
                        onSelectionChange={setLlm}
                        >
                            {ClientConfig.availableLlms.map((llm) => (
                                <SelectItem 
                                key={llm.key}
                                >
                                    {llm.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <PopoverTip message={"These are \"the brain\" that gives you the hints."} />
                    </div>
                    <div className="w-full">
                        <p className="text-theme">Audio source</p>
                        <Select
                        disableSelectorIconRotation 
                        className="max-w-xs" 
                        selectedKeys={source}
                        variant="bordered"
                        onSelectionChange={setSource}
                        placeholder="Select the audio source"
                        selectorIcon={<FiChevronsDown />}
                        >
                        {ClientConfig.sources.map((source) => (
                            <SelectItem
                            key={source.key}
                            startContent={source.icon}
                            >
                                {source.label}
                            </SelectItem>
                        ))}
                        </Select>
                        <PopoverTip message={"Select what's the most important audio to be recorded."} />
                    </div>
        
                </div>
                <div className={"flex items-center justify-center gap-2"}>
                    <Switch
                    isSelected={isPublic} 
                    onValueChange={setPublic}
                    color="primary"
                    size="sm"
                    thumbIcon={isPublic ? <FaLockOpen /> : <FaLock/>}
                    >
                        Link share
                    </Switch>      
                    <Button 
                    isLoading={message.type == "callEditing"}
                    onPress={handleEditCall}
                    className={`rounded-xl px-8 py-6 font-medium text-base text-white ${(message.type != "callEditing") ? "bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500" : "bg-gray-700"}`}
                    disabled={message.type == "callEditing"} // Disable the button if form is not valid or if loading
                    >
                        Save
                    </Button>
                
                </div>
            </div>
        </div>
    )
}