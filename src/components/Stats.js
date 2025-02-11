import ClientConfig from '@/components/client.config'
import { Card, p } from '@heroui/react'
import { FaGlobe, FaSmile, FaUser } from 'react-icons/fa'
import { FaArrowTrendUp } from "react-icons/fa6"


const StatItem = ({ icon, value, label }) => (
  <Card className="w-[279px] h-[250px] flex flex-col items-start justify-between overflow-hidden rounded-2xl bg-[#131316] p-6 transition-all shadow-[0px_0px_42px_0px_rgba(0,0,0,0.63)]">
    <div className="mb-4 rounded-full">{icon}</div>
    <div>
      <p className="mb-1 text-5xl font-semibold tracking-tight leading-[57.6px] text-[#fff]">
        {value}
      </p>
      <p className="text-sm text-[#B9BBC1]">{label}</p>
    </div>
  </Card>
)

export default function StatsSection() {
  const stats = [
    {
      icon: <FaUser />,
      value: '2.5M',
      label: 'Monthly Active Users',
    },
    {
      icon: <FaGlobe />,
      value: '190',
      label: 'Countries Available',
    },
    {
      icon: <FaSmile />,
      value: '98%',
      label: 'Customer Satisfaction Rate',
    },
    {
      icon: <FaArrowTrendUp />,
      value: '150%',
      label: 'YOY Growth',
    },
  ]

  return (
    <section className="relative max-w-[1200px] mx-auto py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-3 text-5xl font-semibold tracking-tight leading-[57.6px] text-[#fff]">
            How Business Succeed
            <br />
            Using Our Product
          </p>
          <p className="mx-auto opacity-80 max-w-2xl text-lg leading-[27px] text-[#EBECED]">
            The path to success starts here. See how business are winning with {ClientConfig.appName}
          </p>
        </div>
        <div className="grid grid-cols-4 justify-between px-5">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
