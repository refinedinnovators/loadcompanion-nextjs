'use client'

import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'

interface EmailCardProps {
  email: string
  label: string
  description: string
  benefits: string[]
}

export function EmailCard({
  email,
  label,
  description,
  benefits,
}: EmailCardProps) {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-xl bg-background p-8 h-full border border-muted shadow-sm">
      <div className="absolute top-6 right-6">
        <span className="bg-primary text-xs font-medium px-4 py-1.5 rounded-full text-primary-foreground">
          {label}
        </span>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="text-primary shrink-0" size={32} />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
          <p className="text-muted-foreground mt-2 text-sm">{description}</p>
        </div>
      </div>

      <div className="mt-6 bg-muted rounded-lg p-4">
        <p className="font-mono text-gray-900 mb-3 text-sm">{email}</p>
        <button
          onClick={copyEmail}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-5 w-5" />
              <span>Copy Email Address</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="text-green-600 h-4 w-4" />
            <span className="text-muted-foreground text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
