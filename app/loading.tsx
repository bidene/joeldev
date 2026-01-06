export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="font-mono text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {"<JoëlDev />"}
          </span>
        </div>
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
