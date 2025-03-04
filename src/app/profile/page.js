import { useUser } from "../../providers/UserProvider"


export default function Profile({}) {

    const { userData, handleUpdateEmail, handleUpdatePassword } = useUser()

    return (
        <div className="flex bg-theme text-theme h-screen items-center justify-center">
        
        </div>
    )
}