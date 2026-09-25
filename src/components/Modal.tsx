import type { ReactNode } from "react"

interface ModalProps {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

export function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-100 flex animate-[fade-in_400ms_ease-out] items-center justify-center bg-[var(--overlay)] backdrop-blur-[5px]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="max-h-[80vh] w-[90%] max-w-[500px] overflow-auto rounded-lg border border-line bg-surface text-foreground shadow-[0_0_15px_1px_var(--shadow),0_4px_20px_rgb(0_0_0/30%)] transition-[background-color,border-color,box-shadow] duration-500 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center justify-between border-b border-line p-4 transition-colors duration-500">
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <button
            className="flex size-8 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-2xl text-muted transition-colors duration-200 hover:bg-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-foreground"
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            &times;
          </button>
        </div>
        <div className="overflow-auto p-6 text-subtle [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{children}</div>
      </div>
    </div>
  )
}

