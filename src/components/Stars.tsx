import { useMemo } from "react"

export function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 160 }, (_, id) => ({
        id,
        size: Math.random() * 2.2 + 0.9,
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: 0.2 + Math.random() * 0.9,
        duration: Math.random() * 14 + 6,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[image:var(--background-gradient)] transition-colors duration-500" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-[var(--star)] shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite alternate, drift ${star.duration * 1.8}s ease-in-out infinite alternate`,
            animationDelay: `${(star.id % 13) * 0.35}s`,
            filter: "blur(0.15px)",
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  )
}

