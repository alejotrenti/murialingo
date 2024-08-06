import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked:"bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default: "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 dark:bg-[#020817] dark:text-white dark:border-[#1E293B] dark:hover:bg-[#334155]",
        primary:"bg-sky-400 text-white border-sky-500 border-b-4 active:border-b-0 hover:bg-sky-300 dark:bg-sky-600 dark:text-white dark:border-sky-700 dark:hover:bg-sky-500",
        primaryOutline:"bg-white text-sky-500 border-sky-300 border-2 hover:bg-sky-50 dark:bg-neutral-800 dark:text-sky-500 dark:border-sky-500 dark:hover:bg-sky-600",
        secundary:"bg-green-500 text-white border-green-600 border-b-4 active:border-b-0 hover:bg-green-400 dark:bg-green-600 dark:text-white dark:border-green-700 dark:hover:bg-green-500",
        secundaryOutline:"bg-white text-green-500 border-green-300 border-2 hover:bg-slate-50 dark:bg-neutral-800 dark:text-green-500 dark:border-green-500 dark:hover:bg-green-600",
        danger:"bg-rose-500 text-white border-rose-600 border-b-4 active:border-b-0 hover:bg-rose-400 dark:bg-rose-600 dark:text-white dark:border-rose-700 dark:hover:bg-rose-500",
        dangerOutline:"bg-white text-rose-500 border-rose-300 border-2 hover:bg-slate-50 dark:bg-neutral-800 dark:text-rose-500 dark:border-rose-500 dark:hover:bg-rose-600",
        super:"bg-indigo-500 text-white border-indigo-600 border-b-4 active:border-b-0 hover:bg-indigo-400 dark:bg-indigo-600 dark:text-white dark:border-indigo-700 dark:hover:bg-indigo-500",
        superOutline:"bg-white text-indigo-500 border-indigo-300 border-2 hover:bg-slate-50 dark:bg-neutral-800 dark:text-indigo-500 dark:border-indigo-500 dark:hover:bg-indigo-600",
        ghost:"bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100 dark:bg-transparent dark:text-slate-400 dark:border-transparent dark:hover:bg-slate-700",
        sidebar:"bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 dark:bg-transparent dark:text-slate-400 dark:border-transparent dark:hover:bg-slate-700",
        sidebarOutline:"bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 dark:bg-sky-500/15 dark:text-sky-500 dark:border-sky-500 dark:hover:bg-sky-600",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  open?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, open = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
