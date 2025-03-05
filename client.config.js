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

    sessions_get: "https://backend.callvize.com/api/v1/subs/get/",

    //Misc
    motivationalSamples: [
        {
            message: "",
            transcription: "You've been given one mouth and two ears, so that you can listen more and talk less",
        },
        {
            message: "",
            transcription: "A great seller gives away happiness, not a product",
        },
        {
            message: "",
            transcription: "Keep calm, talk slow, be assertive",
        },
        {
            message: "",
            transcription: "Happiness is the smell of a new car. It's freedom from fear. It's a billboard on the side of a road that screams with reassurance that whatever you're doing is OK. You are OK (Don Draper).",
        },
        {
            message: "",
            transcription: "It's does not matter what you're doing, you're always selling something.",
        },
        {
            message: "",
            transcription: "Sell me this pen (Jordan Belfort).",
        },
        {
            message: "",
            transcription: "The only thing standing between you and your goal is the bulls**t story you keep telling yourself as to why you can't achieve it (Jordan Belfort).",
        },
        {
            message: "",
            transcription: "Best way to sell something: don't sell anything. Earn awareness, respect and trust of those who might buy (Jordan Belfort).",
        },
    ],

    sampleCall : { 
        title: "Sample call", 
        description: "Meeting with Mr. Doe for the monthly order", 
        context:"sample description", 
        resume:"sample resume", 
        id: "050550a8-d70c-4394-bef0-8868713b34df", 
        timestamp: 1740584529000
    },

    availableLlms: [
        {key: "claude", label: "Claude"}, 
        {key: "gpt", label: "GPT 4"},
        {key: "deepseek", label: "Deepseek"}
    ],
    
    sources: [
        {key: "user", label: "Only you", icon: <FaMicrophone /> },
        {key: "others", label: "Only Others", icon: <MdSpatialAudioOff /> },
        {key: "both", label: "Both", icon: <LuAudioLines /> },
    ],

    //Roles
    availableRoles: [
        { 
            key: "salesman",
            label: "Capable Salesman",
        },
        {
            key: "mentor",
            label: "Savy Mentor",
        },
        { 
            key: "engineer",
            label: "Skilled Engineer",
        },
    ],

    roles: {
        mentor: "You will act as an experienced coach and assist user during a real-time web-call. Your role is to give pieces of advice to user during a web-call. You role consists in reading the sentiment of the conversation and give useful hints about what to say and how to say it and how to prosecute the conversation. Be really concise and go straight to the point. Your job is to provide real-time advices given the current context about how to prosecute the conversation. User\'s goal is convince the other participants about his thesis, which will be specified later. You will be an assistant during web interviews and sales calls primarily. Your must provide single-sentence hints, be telegraphic, write one sentence max. You goal is that user has always a ready answer to anything he\'s being told.",
        engineer: "You will act as a highly skilled engineer and assist the user during a real-time technical discussion. Your role is to provide expert, practical guidance on how to explain complex concepts, troubleshoot problems, and respond effectively to technical questions. Read the flow of the conversation and offer precise, pieces of advice to help the user communicate clearly and confidently to his speaker. Provide examples to explain yourself better and be as much clear as possible. Your focus is to ensure technical accuracy, maintain logical structure, and reinforce credibility. Be concise, precise, and provide only the most relevant insight.",
        salesman: "You will act as a seasoned sales expert and assist the user during a real-time web call. Your role is to provide sharp, persuasive advice on how to handle objections, build rapport, and guide the conversation toward closing a deal. Analyze the sentiment and intent of the discussion, then offer concise, tactical suggestions in a single sentence. Your focus is to ensure the user stays in control of the conversation, keeps the prospect engaged, and maximizes chances of closing the sale. Be direct, to the point, and always deliver actionable advice.",
    },
    
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