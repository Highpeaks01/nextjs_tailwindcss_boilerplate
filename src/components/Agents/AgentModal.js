"use client";


import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";


export default function AgentModal({ 
  agentModal,
  modalAgent 
}) {

  if (!agentModal) return null

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={agentModal.isOpen}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        onOpenChange={agentModal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div>
                  {modalAgent.author_avatar}
                  {modalAgent.author_username}
                </div>
                
              </ModalHeader>
              <ModalBody className="flex">
                <Image
                  src={modalAgent.src}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
                <p>
                  {modalAgent.prompt}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  See all templates
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
  