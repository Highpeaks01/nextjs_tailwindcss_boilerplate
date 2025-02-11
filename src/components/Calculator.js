'use client'

import { Slider } from '@heroui/react'
import { useEffect, useState } from 'react'

export default function Calculator({ }) {
  const [dailyCalls, setDailyCalls] = useState(60)
  const [numEmployees, setNumEmployees] = useState(2)
  const [avgCallDuration, setAvgCallDuration] = useState(5) // in minutes
  const humanCostPerHour = 20 // Average human assistant cost per hour in USD

  const [message, setMessage] = useState({})

  useEffect(() => {
    const workingDaysPerMonth = 22 // Average working days in a month
    const totalCallMinutesPerMonth = dailyCalls * avgCallDuration * workingDaysPerMonth 

    if(totalCallMinutesPerMonth > (8 * 60 * 22 * numEmployees )){
        setMessage({type: "errorCalc", msg: "You employees can't handle these calls \n (Assuming 8 hours per day, 22 days/month, no breaks)"})
    } else {
        setMessage({})
    }
  }, [avgCallDuration, numEmployees, dailyCalls])

  const calculateMonthlyCost = () => {
    const workingDaysPerMonth = 22 // Average working days in a month
    const totalCallMinutesPerMonth = dailyCalls * avgCallDuration * workingDaysPerMonth 

    const aiMonthlyCost = totalCallMinutesPerMonth * 0.2

    const humanHoursPerMonth = (dailyCalls * avgCallDuration * workingDaysPerMonth) / 60
    const humanMonthlyCost = humanHoursPerMonth * humanCostPerHour * numEmployees

    return { aiMonthlyCost, humanMonthlyCost }

  }

  const { aiMonthlyCost, humanMonthlyCost } = calculateMonthlyCost()

  return (
    <section className="w-full bg-theme text-theme py-10 mt-16">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-center text-2xl mb-5">
          Cost Comparison: Human vs. AI
        </h2>

        <div className="mb-6">
          <label className="block mb-2">
            Number of Daily Phone Calls: {dailyCalls}
          </label>
          <Slider
            value={dailyCalls}
            color={"secondary"}
            min={0}
            max={200}
            step={1}
            onChange={(value) => setDailyCalls(value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Number of Current Employees: {numEmployees}
          </label>
          <Slider
            value={numEmployees}
            color={"secondary"}
            min={1}
            max={50}
            step={1}
            onChange={(value) => setNumEmployees(value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Average Duration of a Call (minutes): {avgCallDuration}
          </label>
          <Slider
            value={avgCallDuration}
            color={"secondary"}
            min={1}
            max={60}
            step={1}
            onChange={(value) => setAvgCallDuration(value)}
          />
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            Monthly Cost Analysis
          </h3>
          <p className="">
            AI Assistant Monthly Cost: ${aiMonthlyCost.toFixed(2)}
          </p>
          <p className="">
            Human Assistant Monthly Cost: ${humanMonthlyCost.toFixed(2)}
          </p>
          <p className="font-bold mt-4">
            Savings: ${(humanMonthlyCost - aiMonthlyCost).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center text-sm font-light italic text-fuchsia-500">
            {message.type == "errorCalc" ? (
                <p>{message.msg}</p>
            ) : (
                <div className="h-5"></div>
            )}
        </div>
      </div>
    </section>
  )
}
