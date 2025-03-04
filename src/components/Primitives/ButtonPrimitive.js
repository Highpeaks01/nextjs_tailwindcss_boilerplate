import { Button, Link } from "@heroui/react";

export default function ButtonPrimitive ({
    isDisabled,
    goal,
    text,
    content,
    size,
}) {

    if(typeof(goal) !== "function") {
        return(
            <Button
                isDisabled={isDisabled} 
                isLoading={isDisabled}
                as={Link}
                href={goal}
                startContent={content}                
                className={`${size == "small" ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"} rounded-xl bg-gradient-to-br from-cyan-300 to-sky-500`}
            >
                {text}
            </Button>
        )
    } else {
        return(
            <Button
                isDisabled={isDisabled} 
                isLoading={isDisabled}
                onPress={() => goal()}
                startContent={content}                
                className={`${size == "small" ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"} rounded-xl bg-gradient-to-br from-cyan-300 to-sky-500`}
            >
                {text}
            </Button>
        )       
    }
}