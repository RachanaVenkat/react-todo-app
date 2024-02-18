import styles from './footer.module.css'
import { IoMdDoneAll } from "react-icons/io";

export default function Footer(){
    return(
        <div className={styles.footer}>
            <p>Get things <IoMdDoneAll size={20}/></p>
        </div>
    )
}