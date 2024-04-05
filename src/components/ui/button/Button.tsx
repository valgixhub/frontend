import { ButtonI } from "@/vendor/Interfaces";
import styles from './button.module.css'

export default function Button(props : ButtonI) {

    return (
        <>
            <button style={props.style} className={styles[props.styleType]}>
                {props.children}
            </button>
        </>
    )

}