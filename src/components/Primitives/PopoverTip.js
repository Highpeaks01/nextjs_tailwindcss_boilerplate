import { Button, Popover, PopoverTrigger, PopoverContent } from "@heroui/react"
import { IoIosInformationCircleOutline } from 'react-icons/io'

export default function PopoverTip ({
    message,
}) {
    return(
        <Popover placement="top" className="dark">
            <PopoverTrigger>
                <Button
                    size={"md"}
                    radius={"full"}
                    isIconOnly
                    startContent={<IoIosInformationCircleOutline size={18} />}
                    className={"items-center bg-transparent text-default-500"}
                />
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2 text-default-600 w-auto">
                    <div className="text-xs text-default-500">
                        {message}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}