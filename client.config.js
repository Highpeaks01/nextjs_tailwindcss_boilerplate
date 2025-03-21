const ClientConfig = {

    appHeadline: "Headline.",
    appTitle: "Title.",
    appDrophead: "",

    //API ENDPOINTS
    //Server
    server_info: "/api/v1/server-info",

    //Users
    users_add: "/api/v1/users/add",
    users_get: "/api/v1/users/get",

    //Calls
    calls_add: "/api/v1/calls/add",
    calls_edit: "/api/v1/calls/edit",
    calls_get: "/api/v1/calls/get",
    calls_delete: "/api/v1/calls/delete",
    calls_duplicate: "/api/v1/calls/duplicate",

    //Subs
    subs_add: "/api/v1/subs/add",
    subs_get: "/api/v1/subs/get",

    //Misc

    
    //App data
    appUrl: "https://url",
    email: "email",
    linkedin: "https://www.linkedin.com/name",
    calendly: "https://calendly.com/name/30min",
    medium: "https://medium.com/@name",
    appName: "name",

    //Payments
    stripePublic: "",
    stripePublicTest:"",

    //Products
    stripeProducts: [
        {
            stripeId: "",
            stripeIdTest: "",
            id: "starter",
            price: 7.99,
            hints: 500,
            duration: "1 month",
            name: "Pro",
            description: ""
        },
        {
            stripeId: "",
            stripeIdTest: "",
            id: "pro",
            price: 17.99,
            hints: 2000,
            duration: "1 month",
            name: "",
            description: ""
        },
    ]
}

export default ClientConfig