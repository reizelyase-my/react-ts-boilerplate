import * as React from 'react'
import { NavLink } from 'react-router-dom'
import * as styles from './sidebar.scss'

interface Menu {
    url: string
    text: string
}

const menu: Menu[] = [
{
    url: "/",
    text: "Home"
},
{
    url: "/todos",
    text: "Todos"
}
]

const getMenuList = () => menu.map((m: Menu, key: number) => <li key={key}>
    <NavLink exact to={m.url} activeClassName={styles.active}>{m.text}</NavLink>
</li>)

const Sidebar = () => <div className={styles.sidebar}>
    <div className={styles.logo} />
    <div className={styles.sideNav}>
        <ul>{getMenuList()}</ul>
    </div>
</div>

export default Sidebar