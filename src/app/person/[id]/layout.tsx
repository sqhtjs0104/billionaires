import styles from './person.module.css';

export default function PersonLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}