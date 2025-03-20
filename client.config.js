import { FaMicrophone } from "react-icons/fa"
import { LuAudioLines } from "react-icons/lu"
import { MdSpatialAudioOff } from "react-icons/md"

const ClientConfig = {

    appHeadline: "Your mentor on the line.",
    appTitle: "Reach your goal faster with real-time hints and insights.",
    appDrophead: "",

    //API ENDPOINTS
    //Server
    server_info: "https://backend.callvize.com/api/v1/server-info",

    //Live call
    call_audio: "https://backend.callvize.com/api/v1/call/audio",

    //Users
    users_add: "https://backend.callvize.com/api/v1/users/add",
    users_get: "https://backend.callvize.com/api/v1/users/get",

    //Calls
    calls_add: "https://backend.callvize.com/api/v1/calls/add",
    calls_edit: "https://backend.callvize.com/api/v1/calls/edit",
    calls_get: "https://backend.callvize.com/api/v1/calls/get",
    calls_delete: "https://backend.callvize.com/api/v1/calls/delete",
    calls_duplicate: "https://backend.callvize.com/api/v1/calls/duplicate",

    //Subs
    subs_add: "https://backend.callvize.com/api/v1/subs/add",
    subs_get: "https://backend.callvize.com/api/v1/subs/get",

    //Misc

    
    //App data
    appUrl: "https://talk.callvize.com",
    email: "info@callvize.com",
    linkedin: "https://www.linkedin.com/callvize",
    calendly: "https://calendly.com/callvize/30min",
    medium: "https://medium.com/@callvize",
    appName: "Callvize",

    //Payments
    stripePublic: "pk_live_51QyUaaGvBrN14sckgeKdfJbnghzA1ni7LXWcreM6ZwsJoA2PTCuoyWZQo2Fqv5IUgHrJNdm91u0SKu8z4sMkGkTJ001oTgv9tj",
    stripePublicTest:"pk_test_51Qyd202fOUy6akPbOBdPZjXdhHoNNr8F91pqwgJGAFTlR6yOMSGXZi806lQL0vVgyWn3eRhyjcmfNps9Miq4hSEp00A7x0I5e5",

    //Products
    stripeProducts: [
        {
            stripeId: "price_1QycUKGvBrN14sckTrC032Oi",
            stripeIdTest: "price_1Qyd4B2fOUy6akPbgbZHt67V",
            id: "starter",
            price: 7.99,
            hints: 500,
            duration: "1 month",
            name: "Callvize Pro",
            description: "Ideal for occasional callers"
        },
        {
            stripeId: "price_1QycV3GvBrN14sckYpxJHBwZ",
            stripeIdTest: "price_1Qyd4Z2fOUy6akPbg1G2UzA0",
            id: "pro",
            price: 17.99,
            hints: 2000,
            duration: "1 month",
            name: "Callvize Pro",
            description: "Perfect for heavy callers"
        },
    ]
}

export default ClientConfig