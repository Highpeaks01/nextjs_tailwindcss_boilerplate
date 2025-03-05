import { Button } from "@heroui/react";
import { useShop } from "../../providers/ShopProvider"
import { useUser } from "../../providers/UserProvider"
import { Coins } from "lucide-react";
import { IoIosTimer } from "react-icons/io";

export default function Credits({}){
    
    const { userData } = useUser()
    const { shopModal } = useShop() 
    
    return(
        <>
            <div className="flex gap-2 border border-1 border-theme rounded-xl">
                <div className={`flex font-base font-semibold ${userData?.credits < 10 ? "text-red-400 animate-pulse" : "text-theme" } gap-1 items-center pl-2`}>
                    <IoIosTimer size={20} />
                    {userData?.credits}
                    <p className="font-light text-sm">hints</p>
                </div>
                    <Button
                    className="text-base px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-r-xl"
                    startContent={<p>{userData?.subscription?.plan == "free" ? "Upgrade" : userData?.subscription.plan}</p>}
                    onPress={() => shopModal.onOpen()}
                />                
            </div>
        </>
    )
}