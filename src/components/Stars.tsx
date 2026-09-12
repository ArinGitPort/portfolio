import { useMemo } from "react"

export function Stars() {
  const stars = useMemo(
    () => Array.from({ length: 100 }, (_, id) => ({
      id,
      size: Math.random() + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.7,
      duration: Math.random() * 40 + 20,
    })),
    [],
  )

  return (
    <div className="fixed inset-0 z-0 bg-[image:var(--background-gradient)] transition-colors duration-500" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-[var(--star)]"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}

