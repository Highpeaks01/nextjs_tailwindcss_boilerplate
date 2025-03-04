"use client"


import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Link,
  } from "@heroui/react";
import { useState } from "react";
import ButtonPrimitive from "../Primitives/ButtonPrimitive";
import { useUser } from "../../providers/UserProvider";
import { FaBookOpen, FaBug, FaPhone, FaScrewdriver, FaUnlockAlt } from "react-icons/fa";
import { useShop } from "../../providers/ShopProvider";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineGroups, MdSupportAgent } from "react-icons/md";
import { TiFlowSwitch } from "react-icons/ti";
import { TbApi, TbLogs, TbWebhook } from "react-icons/tb";
import Credits from "../Shop/Credits";
import Profile from "../Basic/Profile";
import Footer from "../Basic/Footer";
import { GiSoundWaves } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useDeprecatedAnimatedState } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";
  
  export default function HomeLeftSidebar({}) {

    const router = useRouter()
    const pathname = usePathname();

    const { user, userData, authModal } = useUser()

    const drawer = useDisclosure()
    const [ drawerTitle, setDrawerTitle ] = useState("")
    const [ drawerContent, setDrawerContent ] = useState({})

    const handleOpenMenu = (feature) => {
      setDrawerTitle(feature.name)
      setDrawerContent(feature.content)
      drawer.onOpen()
    }

  
    return (
      <div className="h-screen">
        <div className="flex flex-col items-center h-screen md:w-64 w-48 bg-theme text-theme">
          {/* Top section: menu */}
          <div className="mt-8 mb-auto pl-4 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-xl">Menu</p>
                <div className="flex flex-col items-start pl-4">
                  <Button
                    as={Link}
                    href={"/calls"}
                    className={`${pathname.includes("calls") ? "bg-cyan-300" : "bg-transparent"} text-lg px-4 py-2`}
                    startContent={<RiCustomerService2Fill size={16} />}
                  >
                    Calls
                  </Button>
                  {/*<Button
                    as={Link}
                    href={"/knowledge"}
                    className={`${pathname.includes("knowledge") ? "bg-cyan-300" : "bg-transparent"} text-lg px-4 py-2`}
                    startContent={<FaBookOpen size={16} />}
                  >
                    Knowledge
                  </Button>
                  
                  <Button
                  as={Link}
                  href={"/people"}
                  className={`${pathname.includes("people") ? "bg-cyan-300" : "bg-transparent"} text-lg px-4 py-2`}
                  startContent={<FaPeopleGroup size={16} />}
                  >
                    People
                  </Button>

                  <Button
                    as={Link}
                    href={"/agents"}
                    className={`${pathname.includes("agents") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<MdSupportAgent size={16} />}
                  >
                    Agents
                  </Button>
                  
                  <Button
                    as={Link}
                    href={"/workflows"}
                    className={`${pathname.includes("workflows") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<TiFlowSwitch size={16} />}
                  >
                    Workflows
                  </Button>
                  <Button
                    as={Link}
                    href={"/numbers"}
                    className={`${pathname.includes("numbers") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<FaPhone size={16} />}
                  >
                    Phone numbers
                  </Button>
                  <Button
                    as={Link}
                    href={"/tools"}
                    className={`${pathname.includes("tools") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<FaScrewdriver size={16} />}
                  >
                    Tools
                  </Button>
                  <Button
                    as={Link}
                    href={"/crews"}
                    className={`${pathname.includes("crews") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<MdOutlineGroups size={16} />}
                  >
                    Crews
                  </Button>*/}
                </div>
                {/*<p>Debugging and testing</p>
                <div className="flex flex-col items-start pl-4">
                  <Button
                    as={Link}
                    href={"/debugging"}
                    className={`${pathname.includes("debugging") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<FaBug size={16} />}
                  >
                    Debugging and testing
                  </Button>
                </div>
                <p>Monitoring</p>
                <div className="flex flex-col items-start pl-4">
                  <Button
                    as={Link}
                    href={"/call-logs"}
                    className={`${pathname.includes("Call logs") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<TbLogs size={16} />}
                  >
                    Call logs
                  </Button>
                  <Button
                    as={Link}
                    href={"/api-logs"}
                    className={`${pathname.includes("api-logs") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<TbApi size={16} />}
                  >
                    API logs
                  </Button>
                  <Button
                    as={Link}
                    href={"/webhook-logs"}
                    className={`${pathname.includes("webhook-logs") ? "bg-cyan-300" : "bg-transparent"} px-4 py-2`}
                    startContent={<TbWebhook size={16} />}
                  >
                    Webhook logs
                  </Button>
                </div>*/}
              </div>
            </div>
          </div>

          {/* Bottom section: login and credits */}
          <div className="w-full mb-2 flex flex-col gap-2 items-center">
            {!user ? (
              <ButtonPrimitive
                isDisabled={false}
                goal={() => authModal.onOpen()}
                content={<FaUnlockAlt />}
                text={"Login"}
                size={"medium"}
              />
            ) : (
              <Profile />
            )}
            <Credits />
            <Footer />
          </div>
        </div>

        <Drawer
          backdrop={"opaque"}
          placement={"right"}
          isOpen={drawer.isOpen}
          motionProps={{
              variants: {
              enter: {
                  opacity: 1,
                  x: 0,
                  duration: 0.3,
              },
              exit: {
                  x: 100,
                  opacity: 0,
                  duration: 0.3,
              },
              },
          }}
          onOpenChange={drawer.onOpenChange}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                </DrawerHeader>
                <DrawerBody>
                  {drawerContent}
                </DrawerBody>
                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={drawer.onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={drawer.onClose}>
                    Action
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    )
  }
  