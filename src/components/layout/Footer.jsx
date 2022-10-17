import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.social_list}>
            <ul>
                <li><FaFacebook /></li>
            </ul>
            <ul>
                <li><FaInstagram /></li>
            </ul>
            <ul>
                <li><FaLinkedin /></li>
            </ul>
        </footer>
    )
}