export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    </div>
  )
}
