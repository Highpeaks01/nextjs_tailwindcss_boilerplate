import ClientConfig from '@/components/client.config'
import { FaMemory } from 'react-icons/fa'
import { IoSparklesSharp, IoLockOpen, IoCamera, IoColorPaletteOutline, IoPeopleCircleOutline } from "react-icons/io5"
import { RiAdvertisementFill, RiSettings3Fill } from 'react-icons/ri'


const featuresData = [
    { icon: <RiAdvertisementFill size={22} className='text-emerald-200' />, title: 'No Ads', description: 'Enjoy a smoother experience' },
    { icon: <IoSparklesSharp size={24} className='text-emerald-200' />, title: 'Best models available', description: 'Get premium models 70b and 120B' },
    { icon: <IoLockOpen size={24} className='text-emerald-200' />, title: 'Unlock all bots', description: 'Enjoy premium character' },
    { icon: <IoCamera size={24} className='text-emerald-200' />, title: 'Pictures in chat', description: 'AI Pictures from Chatbots like IRL' },
    { icon: <IoColorPaletteOutline size={24} className='text-emerald-200' />, title: 'Studio extended features', description: 'Generate custom pictures and explore your Gallery' },
    { icon: <IoPeopleCircleOutline size={24} className='text-emerald-200' />, title: 'Group chats', description: 'Chat with multiple bots at the same time' },
    { icon: <FaMemory size={22} className='text-emerald-200' />, title: 'Better memory', description: 'You characters remember the old messages' },
    { icon: <RiSettings3Fill size={22} className='text-emerald-200' />, title: 'Custom settings', description: 'Customize your chats with advanced options' },
]

export default function PremiumFeatures ({}) {

    return (
        <div className="text-theme bg-theme my-16">

            <div className="text-center mb-12">
                <h1 className="text-4xl font-light">
                    Unlock the Full <br className="md:hidden"/> <span className={"font-thin text-emerald-300"}>{ClientConfig.appName}</span> Experience
                </h1>
                <p className="text-2xl font-thin">
                    Subscribe to unlock exclusive features and improve your experience!                
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {featuresData.map((feature, index) => (
                    <div key={index} className="bg-theme hover:border-emerald-400 duration-1000 p-4 text-left border rounded-2xl border-default-900">
                        <div className="flex items-center mb-2">
                            {feature.icon}
                            <h3 className="text-emerald-500 text-2xl font-light ml-2">{feature.title}</h3>
                        </div>
                        <p className="text-xl font-extralight">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
