import Link from "next/link";
import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div >
            <header className={styles.header} >
                <div className={styles.left}>
                    <Link href='/'>NextFood</Link>
                </div>
                <div className={styles.right}>
                    <Link href='menu'>Menu</Link>
                    <Link href='categories'>Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{ children }</div>
        
            <footer className={styles.footer}>
                <a href="https://github.com/behrouz2115"  target="_blank" rel="noreferrer">GitHub: behrouz2115 &copy;</a>
            </footer>
        </div>

    );
};

export default Layout;