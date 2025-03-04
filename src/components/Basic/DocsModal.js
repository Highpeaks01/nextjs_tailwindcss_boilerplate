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
import { FaVideo } from "react-icons/fa";


export default function DocsModal({ docsModal }){
    return(
        <>
            <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={docsModal.isOpen}
            onOpenChange={docsModal.onOpenChange}
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col text-center gap-1">Callvize Usage Guide</ModalHeader>
                    <ModalBody>
                        <div className="space-y-4">
                            {/* Title */}
                            <h2 className="text-2xl font-bold text-theme">Using Callvize is Easy!</h2>

                            {/* Subtitle */}
                            <h3 className="text-lg font-semibold text-theme">
                                Follow these steps to get started:
                            </h3>

                            {/* Step-by-step guide */}
                            <div className="space-y-2 text-theme">
                                <div>1️⃣ <strong>Initiate your call</strong> using your favorite client. <span className="text-red-500">IMPORTANT: Calls can be anywhere on your PC.</span></div>
                                <div>2️⃣ <strong>Create a new call</strong> on Callvize, add a title and notes (things your assistant must know), then go to the call page.</div>
                                <div>3️⃣ <strong>Split the screen</strong>: Callvize tab on one side and your call on the other. (So you can read the hints!)</div>
                                <div>4️⃣ <strong>Check the options</strong>: Choose when to get a hint, who to record, the style of your assistant.</div>
                                <div>5️⃣ <strong>Press the "Record" 🔴 button</strong>.</div>
                                <div>6️⃣ <strong>IMPORTANT: Provide both microphone and sound permissions in your browser tab.</strong>.</div>
                                <div>7️⃣ <strong>Select your call tab</strong> or the entire system.</div>
                                <div>8️⃣ <strong>Take confidence</strong>: Do some test runs a few minutes before your call.</div>
                                <div>9️⃣ <strong>You're all set!</strong> Callvize will listen to your conversation and will provide real-time hints.</div>
                            </div>
                        </div>
                        <Button
                            as={Link}
                            isExternal={true}
                            href={"https://www.youtube.com"}
                            className={"text-theme px-3 py-2"}
                            startContent={<FaVideo />}
                        >
                            Watch a Quick tutorial
                        </Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={docsModal.onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}