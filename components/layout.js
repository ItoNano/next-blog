import styles from './layout.modules.css'
function Layout({ children }) {
    return <div className={styles.cotainer}>{children}</div>;
}

export default Layout;
