import type { ChangeEvent, FC } from "react"
import styles from "./Input.module.scss"
interface InputProps {
  value: string
  onChange: (e:ChangeEvent<HTMLInputElement>) => void
  type?: "text" | "search"
  placeholder?: string
  name: string
}
export const Input:FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  placeholder = "Search for a pokemon",
  name
})=>{

  return (
    <article className={styles.Input}>
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      />
    </article>
  )
}