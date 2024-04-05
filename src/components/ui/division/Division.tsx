import { DivisionI } from '@/vendor/Interfaces'
import styles from './division.module.css'

export default function Division(props : DivisionI) {
    return <hr style={props.style} className={styles[props.variant as keyof typeof styles]} />
}