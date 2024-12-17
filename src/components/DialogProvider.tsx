import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Dialog, DialogContent } from "./ui/dialog"

interface DialogContextType {
    openDialog: (content: ReactNode) => void
    closeDialog: () => void
}

const DialogContext = createContext<DialogContextType | undefined>(undefined)

export function useDialog() {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error('useDialog must be used within a DialogProvider')
    }
    return context
}

export function DialogProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [dialogContent, setDialogContent] = useState<ReactNode | null>(null)

    const openDialog = (content: ReactNode) => {
        setDialogContent(content)
        setIsOpen(true)
    }

    const closeDialog = () => {
        setIsOpen(false)
        setDialogContent(null)
    }

    return (
        <DialogContext.Provider value={{ openDialog, closeDialog }}>
            {children}
            <Dialog open={isOpen} onOpenChange={(open) => !open && closeDialog()}>
                <DialogContent>
                    {dialogContent}
                </DialogContent>
            </Dialog>
        </DialogContext.Provider>
    )
}


