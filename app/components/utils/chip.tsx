
import styles from './chip.module.scss';

export default function Chip(props: {children: React.ReactNode}) {
    return (
        <div className={`mt-1 text-md outline outline-blue-500 ${styles.chip}`}>
            {props.children}
        </div>
    )
}