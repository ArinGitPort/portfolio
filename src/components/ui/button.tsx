import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function Button({ className, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent px-4 py-2 text-sm text-muted transition-[color,transform,background-color] duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  )
}
