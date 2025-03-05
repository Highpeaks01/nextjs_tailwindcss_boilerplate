import ClientConfig from "@/components/client.config";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Switch,
    Textarea,
  } from "@heroui/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "../../providers/UserProvider";
import { FaLock, FaLockOpen } from "react-icons/fa";
import DragDropUploader from "./DragDropUploader";
import { ContainerWithChildren } from "postcss/lib/container";
  
  export default function NewCallModal({ newCallModal }) {

    const router = useRouter()

    const { message, setMessage, userData, handleGetIdToken } = useUser()

    const [title, setTitle] = useState("")
    const [context, setContext] = useState("")
    const [knowledge, setKnowledge] = useState([])
    const [isPublic, setPublic] = useState(false)

    const handleCreateCall = async () => {

      try{

        setMessage({ type: "callCreationLoading", msg: "Creating Call"})

        const response = await fetch(ClientConfig.calls_add, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${await handleGetIdToken()}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userData.uid,
              owner_id: userData.public_id,
              title,
              context,
              privacy: isPublic ? "public" : "private", 
            })
        })
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json()
        const id = data.id

        setMessage({})
        newCallModal.onClose()
        router.push(`/calls/${id}`)

      } catch(error){
        setMessage({})
      }
    }
  
    return (
      <>
        <Modal 
        isOpen={newCallModal.isOpen} 
        onOpenChange={newCallModal.onOpenChange}
        size="3xl"
        className="bg-theme text-theme"
        >
          <ModalContent className="flex flex-col w-full">
            {(onClose) => (
              <div className="flex flex-col w-full">
                <ModalHeader className="flex flex-col gap-1">
                </ModalHeader>
                <ModalBody className="flex flex-col w-full">
                  <Input
                  isRequired
                  className="w-full"
                  variant={"faded"}
                  placeholder="Something easily searchable and recognizable"
                  value={title} 
                  onValueChange={setTitle}
                  label="Title"
                  />
                  <Textarea
                  className="font-light italic w-full"
                  defaultValue=""
                  minRows={8}
                  errorMessage={message.msg}
                  isInvalid={message.type == "callContextError"}
                  label="Notes"
                  placeholder="Useful knowledge about the topic of the call. Pieces of information about participants, any preferences of yours."
                  variant="faded"
                  value={context}
                  onValueChange={setContext}
                  />
                  {/*<DragDropUploader setKnowledge={setKnowledge} />*/}
                  <Switch
                  isSelected={isPublic} 
                  onValueChange={setPublic}
                  defaultSelected
                  color="primary"
                  size="sm"
                  thumbIcon={isPublic ? <FaLockOpen  /> : <FaLock/>}
                  >
                    Link share
                  </Switch>
                </ModalBody>
                <ModalFooter className="flex gap-2">
                  <Button 
                  variant="light" 
                  onPress={() => newCallModal.onClose()}
                  >
                    Back
                  </Button>
                  <Button 
                  isLoading={message.type == "callCreationLoading"}
                  className={`${message.type == "callCreationLoading" ? "bg-gray-800" : "bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500"} px-6 py-3 rounded-xl`}
                  onPress={() => handleCreateCall()}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </div>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }