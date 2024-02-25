import { FC } from 'react'
import { headerLink } from './headerLink'
import Link from 'next/link'
import styles from './header.module.css'

const Header: FC = () => {
  return (
    <ul className={styles.header}>
      {headerLink.map(link => (
        <Link key={link.id} href={link.path}>
          <li>{link.title}</li>
        </Link>
      ))}
    </ul>
  )
}

export default Header
