'use client'

import { motion } from 'framer-motion'
import { Facebook, HelpCircle, Instagram, Send } from 'lucide-react'

const iconMap = {
  Send,
  Facebook,
  Instagram,
}

interface ContactCardProps {
  iconName: keyof typeof iconMap
  title: string
  content: string
  link: string
  className?: string
}

export function ContactCard({
  iconName,
  title,
  content,
  link,
  className = '',
}: ContactCardProps) {
  const Icon = iconMap[iconName] || HelpCircle
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center gap-4 rounded-xl bg-background p-6 border border-muted shadow-sm ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="text-primary shrink-0" size={24} />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-muted-foreground text-sm">{content}</p>
      </div>
    </motion.a>
  )
}
