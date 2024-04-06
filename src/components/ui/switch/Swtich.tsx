import styles from './switch.module.css'

export default function Switch() {

    return (
        <div>
            <label className={styles.switch}>
                <input className={styles.input} type="checkbox" />
                <span className={styles.slider}></span>
            </label>
        </div>
    )

}