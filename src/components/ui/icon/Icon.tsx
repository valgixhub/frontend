import styles from "./styles.module.css";
import { IconI } from '@/vendor/Interfaces'

function classNames (...args: Array<string | undefined>): string {
    return args.filter(Boolean).join(" ");
}

export default function Icon(props: IconI) {
    return (
        <span
            className={classNames("icon", "material-icons-round", styles.icon, props.class)}
            onClick={props.onClick}
            style={{color: props.color, fontSize: props.size + "px", ...props.style}}
            title={props.title}>
            {props.name || "texture"} 
        </span>
    );
}