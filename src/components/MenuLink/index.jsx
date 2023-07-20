import styles from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'

export default function MenuLink({ to, children }) {

    return (
        <NavLink
            className={styles.link}
            style={({isActive}) => {
                return {
                    textDecoration: isActive ? "underline" : ""
                }}}
            to={to}
        >
            {children}
        </NavLink>
    )
}