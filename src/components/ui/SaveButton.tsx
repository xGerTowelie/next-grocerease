"use client"

import clsx from "clsx"
import { Button } from "./button"
import { LoadingSpinner } from "./LoadingSpinner"

type SaveButtonProps = {
    text: string
    hasChanges: boolean
    isLoading: boolean
    update: () => void
}

export default function SaveButton({ text, hasChanges, isLoading, update }: SaveButtonProps) {
    return (
        <Button
            onClick={update}
            className={clsx({
                'hidden': !hasChanges
            })}
        >{isLoading
            ? <LoadingSpinner text="Saving..." />
            : text}
        </Button>
    )
}
