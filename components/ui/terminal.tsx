import type React from 'react'

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Terminal({ className, children, ...props }: TerminalProps) {
  return (
    <div
      className={`relative w-full max-w-[480px] overflow-hidden rounded-lg border px-4 py-3 font-mono text-sm shadow-sm ${className}`}
      {...props}
    >
      <div className="absolute left-4 top-3 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <div className="h-2 w-2 rounded-full bg-yellow-500" />
        <div className="h-2 w-2 rounded-full bg-green-500" />
      </div>
      <div className="pl-14">{children}</div>
    </div>
  )
}
