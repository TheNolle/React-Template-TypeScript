import React, { ReactNode } from 'react'

import './Popup.scss'

interface PopupProps {
    id: string
    title?: string
    children?: ReactNode
}

export default function Popup({ id, title, children }: PopupProps): JSX.Element {
    function openModal (event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation()
        const dialogElement = document.getElementById(id) as HTMLDialogElement | null
        dialogElement && dialogElement.showModal()
    }

    function closeModal() {
        const dialogElement = document.getElementById(id) as HTMLDialogElement | null
        dialogElement && dialogElement.close()
    }

    return (
        <>
            <button type="button" onClick={openModal}>{title || 'Popup'}</button>
            <dialog id={id}>
                <button type="button" onClick={closeModal}>❌</button>
                <h2>{title || 'Popup'}</h2>
                {children || 'Popup content'}
            </dialog>
        </>
    )
}
