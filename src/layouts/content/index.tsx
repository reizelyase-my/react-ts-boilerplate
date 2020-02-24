import * as React from 'react'
import { useSelector } from 'react-redux'
import { State } from '@reducers/index'
import * as styles from './content.scss'

const Content = (props: any) => {
  const title = useSelector((state: State) => state.global.title)

  return <div className={styles.contentWrapper}>
    <div className={styles.pageTitle}>
      <h1>{title}</h1>
    </div>
    <div className={styles.content}>{props.children}</div>
  </div>
}

export default Content