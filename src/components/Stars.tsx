import { useEffect, useRef } from "react"

// Stable positions keep the decoration unchanged across renders and theme switches.
const stars = Array.from({ length: 16 }, (_, id) => ({
  id,
  size: 1 + (id % 3) * 0.35,
  top: ((id * 0.61803398875 + 0.17) % 1) * 100,
  left: ((id * 0.41421356237 + 0.09) % 1) * 100,
  opacity: 0.16 + (id % 4) * 0.045,
}))

export function Stars() {
  const motionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncVisibility = () => {
      if (motionRef.current) {
        motionRef.current.style.animationPlayState = document.hidden ? "paused" : "running"
      }
    }

    syncVisibility()
    document.addEventListener("visibilitychange", syncVisibility)
    return () => document.removeEventListener("visibilitychange", syncVisibility)
  }, [])

  return (
    <div className="stars-background pointer-events-none fixed inset-x-0 top-0 z-0 overflow-hidden bg-[image:var(--background-gradient)]" aria-hidden="true">
      <div ref={motionRef} className="stars-motion">
        {stars.map((star) => (
          <span
            key={star.id}
            className="stars-particle absolute rounded-full bg-[var(--star)]"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
    </div>
  )
}

