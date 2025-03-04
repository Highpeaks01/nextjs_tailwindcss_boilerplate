// NextUI Components
import {
    Modal,
    ModalContent,
    ModalBody,
  } from "@heroui/react"
  
  // Components
  import PremiumFeatures from "./PremiumFeatures"
  import WaitingMessage from "./WaitingMessage"
  
  // Shop Context
import { useUser } from "../../providers/UserProvider"
import { useShop } from "../../providers/ShopProvider"
import ClientConfig from "@/components/client.config"
import Checkout from "./Checkout"
  
  
  export default function ShopModal ({}) {

    const { shopModal } = useShop()
    const { userData } = useUser()

  
    return (
        <Modal
            scrollBehavior={"inside"}
            size={"3xl"}
            backdrop={"opaque"}
            className={"text-theme bg-theme border h-1/2 border-default-900 border-opacity-60"}
            classNames={{
            }}
            isOpen={shopModal.isOpen}
            onClose={shopModal.onOpenChange}
        >
            <ModalContent className={"w-full p-4"}>
                <ModalBody className={"flex flex-col w-full"}>
        
                    <div className={" flex flex-col my-4 gap-2 text-center px-4"}>
                        <span className={"font-medium text-base md:text-3xl"}>
                            Do you like callvize?
                        </span>
                        <span className={""}>Subscribe to get more hints</span>
                    </div>

                    <div className="flex justify-center gap-4 w-full">
                        {ClientConfig.stripeProducts.map(product => (
                            <Checkout 
                            key={product.stripeId} 
                            product={product}
                            />
                        ))}
                    </div>
                
                </ModalBody>
            </ModalContent>
        </Modal>
    )
  }
  