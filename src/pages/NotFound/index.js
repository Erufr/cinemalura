import styles from "./NotFound.module.css"

function NotFound () {
    return (
        <section className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p>Page not found className={styles.text_error}</p>
        </section>
    )
}

export default NotFound