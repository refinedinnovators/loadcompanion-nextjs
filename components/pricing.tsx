"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Minus, Plus } from "lucide-react"

interface PricingPlan {
  name: string
  description: string
  basePrice?: number
  interval?: string
  annualBasePrice?: number
  featured: boolean
  features: string[]
  buttonTitle: string
  buttonHref: string
  calculateDispatchers: boolean
}

const plans: PricingPlan[] = [
  {
    name: "Free Trial",
    description:
      "Experience the full potential of Load Companion with a risk-free, 2-week trial. Perfect for businesses eager to streamline load management and explore our powerful features without any commitment.",
    featured: false,
    buttonTitle: "Start Free Trial",
    buttonHref: "https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj",
    calculateDispatchers: false,
    features: [
      "Unlimited Email Sends",
      "Advanced RPM calculator",
      "Email Templates",
      "Google Maps links",
      "Pop-Up Email Editor",
      "Works on Power Dat, Dat One, Sylectus",
      "Send Emails Directly from Comments",
      "Multiple Email Addresses(Coming Soon)",
    ],
  },
  {
    name: "Yearly Plan",
    description:
      "Enjoy uninterrupted access to all premium features at an unbeatable value. With the Yearly Plan, you save more compared to monthly billing while ensuring you have the tools you need to streamline your operations year-round.",
    basePrice: 5.99,
    interval: "/mo",
    annualBasePrice: 71.88,
    featured: true,
    buttonTitle: "Get Started Now",
    buttonHref: "https://webapp.loadcompanion.com/#/billing",
    calculateDispatchers: true,
    features: [
      "Unlimited Email Sends",
      "Advanced RPM calculator",
      "Email Templates",
      "Google Maps links",
      "Pop-Up Email Editor",
      "Works on Power Dat, Dat One, Sylectus",
      "Send Emails Directly from Comments",
      "Multiple Email Addresses(Coming Soon)",
    ],
  },
  {
    name: "Monthly Plan",
    description:
      "Get full access to premium features with the flexibility of monthly billing. The Monthly Plan is perfect for those who prefer a no-commitment option while enjoying the same powerful tools to enhance your workflow.",
    basePrice: 9.99,
    interval: "/mo",
    featured: false,
    buttonTitle: "Get Started Now",
    buttonHref: "https://webapp.loadcompanion.com/#/billing",
    calculateDispatchers: true,
    features: [
      "Unlimited Email Sends",
      "Advanced RPM calculator",
      "Email Templates",
      "Google Maps links",
      "Pop-Up Email Editor",
      "Works on Power Dat, Dat One, Sylectus",
      "Send Emails Directly from Comments",
      "Multiple Email Addresses(Coming Soon)",
    ],
  },
]

function PricingCard({ plan }: { plan: PricingPlan }) {
  const [dispatcherCount, setDispatcherCount] = useState(1)

  const calculatePrice = (basePrice: number) => {
    return (basePrice * dispatcherCount).toFixed(2)
  }

  const incrementDispatcher = () => setDispatcherCount((prev) => prev + 1)
  const decrementDispatcher = () => setDispatcherCount((prev) => Math.max(1, prev - 1))

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 ${
        plan.featured ? "border-2 border-primary" : "border border-gray-200"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-medium text-white">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
      </div>
      {plan.basePrice ? (
        <div className="mb-6">
          <div className="flex items-end justify-center">
            <span className="text-5xl font-extrabold text-gray-900">
              ${plan.calculateDispatchers ? calculatePrice(plan.basePrice) : plan.basePrice}
            </span>
            <span className="text-xl font-medium text-gray-500">{plan.interval}</span>
          </div>
          {plan.annualBasePrice && (
            <p className="mt-1 text-center text-sm text-gray-500">
              ${plan.calculateDispatchers ? (plan.annualBasePrice * dispatcherCount).toFixed(2) : plan.annualBasePrice}
              /year
            </p>
          )}
          {plan.calculateDispatchers && (
            <div className="mt-4 flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Dispatchers:</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={decrementDispatcher}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{dispatcherCount}</span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={incrementDispatcher}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mb-6 text-center">
          <span className="text-4xl font-bold text-gray-900">Free</span>
          <span className="text-xl font-medium text-gray-500"> for 14 days</span>
        </div>
      )}
      <ul className="mb-6 space-y-4 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        className={`w-full ${
          plan.featured
            ? "bg-primary hover:bg-primary/90 text-white"
            : "bg-white text-primary border-2 border-primary hover:bg-primary/10"
        }`}
      >
        <a href={plan.buttonHref} target="_blank" rel="noopener noreferrer">
          {plan.buttonTitle}
        </a>
      </Button>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="container py-24 scroll-mt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">Choose Your Plan</h2>
        <p className="text-xl text-gray-600">
          Select the plan that best fits your needs and start optimizing your workflow today.
        </p>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}

