import clsx from 'clsx'
import { Loader } from 'lucide-react'

interface LoadingSpinnerProps {
    text?: string
    invert?: boolean
}

export function LoadingSpinner({ text = "Loading...", invert = false }: LoadingSpinnerProps) {
    return (
        <div className="flex items-center justify-center p-4">
            <Loader className="h-6 w-6 animate-spin text-yellow-300" />
            <span className={clsx("ml-2 text-sm", {
                "text-muted-foreground": invert,
                "text-muted-background": !invert
            })}>{text}</span>
        </div >
    )
}


