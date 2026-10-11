import styles from './SkillsItem.module.scss'

type TProps = {
  props: {
    title: string
    items: string[]
  }
}

export const SkillsItem = ({ props }: TProps) => {
  return (
    <div className={`${styles.item} reveal`}>
      <p className={styles.title}>{props.title}</p>
      <ul className={styles.list}>
        {props.items.map((item) => (
          <li className={styles.chip} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
