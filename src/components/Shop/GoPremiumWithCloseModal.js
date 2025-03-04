//Shop
import { useShop } from "../../providers/ShopProvider"

//NextUI
import {
    Button,
    Modal,
    ModalContent,
    ModalBody,
} from "@heroui/react"

//Icons
import { BsStars } from 'react-icons/bs'

export const GoPremiumWithCloseModal = ({}) => {

  const { shopMessage, openShopModal, premiumModal } = useShop()

  return (
    <Modal
        scrollBehavior={"inside"}
        size={"5xl"}
        backdrop={"opaque"}
        className={"bg-black border border-default-900 border-opacity-60"}
        classNames={{
        backdrop: "bg-black bg-opacity-80",
        }}
        isOpen={premiumModal.isOpen}
        onClose={premiumModal.onOpenChange}
    >
            <ModalContent className={"w-full"}>
                <ModalBody className={"w-full"}>
      <div className={"light"}>
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
                <div
                    className="py-4 mx-4 flex text-center items-center align-center justify-center border border-default-900 bg-black bg-opacity-90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="px-4 pt-2 pb-4 sm:p-6 flex flex-col items-center">
                        <h3 className="text-2xl md:text-2xl leading-6 font-medium text-default-200" id="modal-headline">
                            Heads up!
                        </h3>
                        <p className="mt-4 text-base font-light md:text-xl text-default-400">
                            {shopMessage}
                        </p>
                        <Button
                            onPress={() => openShopModal()}
                            className="mt-4 py-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-transparent text-white hover:text-opacity-80 duration-500 flex rounded-full items-center align-center text-sm md:text-xl font-semibold justify-center"
                            startContent={<BsStars size={32} className={"text-default-100"} />}
                        >
                            Go Premium
                        </Button>
                        {/* Close button */}
                        <Button
                            onPress={() => premiumModal.onOpenChange()} // Close the modal when clicked
                            className="mt-4 bg-transparent text-default-400"
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </div>
      </div>
      </ModalBody>
            </ModalContent>
        </Modal>
  )
}
