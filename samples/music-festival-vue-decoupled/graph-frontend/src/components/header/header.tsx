import SearchButton from '../SearchButton/SearchButton';

import styles from './Header.module.scss';

export interface HeaderProps {
    enableWideButtons?: boolean
}

const Header = ({ enableWideButtons }: HeaderProps) => {
    return (
        <header className={enableWideButtons ? styles.header__wideButtons : undefined}>
            <nav className={styles.navigation}>
                <ul className={styles.navigation__list}>
                    <li className={styles.navigation__listItem}>
                        <a className={styles.navigation__link} href='/en'>Home</a>
                    </li>
                    <li>
                        <a className={styles.navigation__link} href='/en/artists'>Artists</a>
                    </li>
                </ul>
            </nav>
            <div className="nav-table-cell search-button-block">
                <SearchButton />
            </div>
        </header>
    )
}

export default Header;
