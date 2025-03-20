import ClientConfig from "@/components/client.config"
import { FaEllipsisV } from "react-icons/fa"
import { useUser } from "../../providers/UserProvider"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react"

export default function EditCallDataModal({
    editCallModal,
    callId,
    title,
    setTitle, 
    context,
    setContext,
    knowledge,
    setKnowledge,
}) {

    const { user_id, message, setMessage, handleGetIdToken } = useUser()

    const handleCallUpdate = async () => {

        if(!title){
          return setMessage({ type: "callTitleError", msg: "Please enter a title."})
        } else {
          setMessage({ type: "callEditing", msg: "" })
        }
    
        const callData = {
          user_id,
          call_id: callId,
          title,
          context,
        }
        
        try {
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
            posthog.capture('group', {
              type: "studio",
              action: "create",
              user_id: userData?.uid, 
              email: userData?.email, 
              group_title: title,
            })
    
            /* ph: group - publish */
            /*if(privacySelection === "public") {
              posthog.capture('group', {
                type: "studio",
                action: "publish",
                user_id: user?.uid,
                email: user?.email,
                group_id: "new",
                group_title: storylineData?.title,
                group_cover: groupData?.cover_img,
                group_description: groupData?.description,
                group_scenario: groupData?.scenario,
              })
            }*/
    
            const newCall = await response.json()
    
            setCalls([...calls, newCall])
    
            // Simulate some asynchronous action, like an API call
            setTimeout(() => {
                editCallModal.onOpenChange()
              setMessage({})
            }, 1000)
    
          } else {
            throw new Error(response.statusText)
          }
        } catch (error) {
          console.error('Error creating group:', error)
          setMessage({ type: "submitError", msg: "Error creating group"})
          return setTimeout(() => {
            setMessage({})
          }, 2000)
        }
    
      }
    
    return(
        <>
            <div className='mt-12 px-8 flex items-center align-center justify-center'>
                <Button 
                onPress={editCallModal.onOpen}
                startContent={<FaEllipsisV size={18} />}
                className={"font-medium text-base text-theme border border-sky-900 rounded-xl bg-transparent px-4 py-3"}
                >
                    Edit details
                </Button>
            </div>
  
            <Modal
            isOpen={editCallModal.isOpen} 
            onOpenChange={editCallModal.onOpenChange} 
            className='dark bg-black border border-default-50'
            backdrop="opaque"
            scrollBehavior={"inside"}
            size={"3xl"}
            >
                <ModalContent>
                    {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-theme bg-theme">
                                           
                        </ModalHeader>
            
                        <ModalBody>
                            <Input 
                            label="Title" 
                            placeholder="Something meaningful" 
                            errorMessage={message.msg}
                            isInvalid={message.type == "callTitleError"}
                            variant="underlined"
                            value={title} 
                            onValueChange={setTitle} 
                            />
                            <Textarea
                            className="max-w-xs"
                            defaultValue=""
                            errorMessage={message.msg}
                            isInvalid={message.type == "callContextError"}
                            label="Context"
                            placeholder="Last second thoughts. Anything the model should know on the fly."
                            variant="underlined"
                            value={context}
                            onValueChange={setContext}
                            />
                        </ModalBody>

                        <ModalFooter className={"flex flex-col items-center justify-center"}>
                            <Button 
                                isLoading={message.type == "callUpdating"}
                                onPress={handleCallUpdate}
                                className={`rounded-full px-8 py-6 font-medium text-base text-white ${(message.type != "callUpdating") ? "bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500" : "bg-default-50"}`}
                                disabled={message.type == "callUpdating"} // Disable the button if form is not valid or if loading
                            >
                              Update
                            </Button>
                            {message.msg ? (
                                <p className="text-base font-base text-fuchsia-500">{message.msg}</p>
                            ) : (
                                <div className="h-12"></div>
                            )}
                        </ModalFooter>
                    </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}