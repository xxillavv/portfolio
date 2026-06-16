import styles from './SkillsItem.module.scss'

type TProps = {
  props: {
    text: string
    title: string
  }
}

export const SkillsItem = ({ props }: TProps) => {
  return (
    <div className={styles.item}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}
