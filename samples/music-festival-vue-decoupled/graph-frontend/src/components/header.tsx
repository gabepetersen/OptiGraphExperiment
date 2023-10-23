import styles from './header.module.scss';

const Header = () => {
    return (
        <header>
            <nav className={styles.navigation}>
                <ul className={styles.navigation__list}>
                    <li>
                        <a href='/en'>Home</a>
                    </li>
                    <li>
                        <a href='/en/artists'>Artists</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;