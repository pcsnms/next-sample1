import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <div>
            <ul>
                <li>
                    <Link href='/'>home</Link>
                </li>
                <li>
                    <Link href='/photos'>photo</Link>
                </li>
            </ul>
      </div>
    </nav>
  )
}

export default Nav