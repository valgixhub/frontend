import { ModalI } from "@/vendor/Interfaces";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import styled from "styled-components";
import { device } from "@/vendor/devices"

const ModalWindow = styled.dialog`
@media ${device.laptop} {
    min-width: 52%;
    max-width: 52%;
}

@media ${device.tablet} {
    min-width: 65%;
    max-width: 65%;
}

@media ${device.mobileL} {
    min-width: 90%;
    max-width: 90%;
}
`

export default function Modal({ children, open } : ModalI) {
    const dialog = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if(dialog.current) {
            if(open) { dialog.current.showModal() } else { dialog.current.close() }
        }
    }, [open])

    return createPortal(
        <ModalWindow className={styles.modal} ref={dialog}>{children}</ModalWindow>,
        document.getElementById("modal") as HTMLElement
    )

}