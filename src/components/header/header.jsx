import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.siteHeader}>
            <img className={classes.logo}
                 src="https://logojinni.com/image/logos/redux.svg" alt="#"/>
        </header>)
}

export default Header;