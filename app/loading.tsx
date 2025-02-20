import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section Loading */}
      <div className="space-y-4 mb-12">
        <Skeleton className="h-12 w-3/4 max-w-2xl" />
        <Skeleton className="h-6 w-2/3 max-w-xl" />
        <Skeleton className="h-10 w-40" />
      </div>

      {/* Gallery Section Loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>

      {/* Features Section Loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>

      {/* Pricing Section Loading */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4 p-6 border rounded-lg">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-12 w-full" />
            <div className="space-y-2">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
