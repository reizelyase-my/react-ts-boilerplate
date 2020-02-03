import * as React from 'react'
import { connect } from 'react-redux'
import * as styles from './content.scss'

const Content = (props: any) => <div className={styles.contentWrapper}>
  <div className={styles.pageTitle}>
    <h1>{props.title}</h1>
  </div>
  <div className={styles.content}>{props.children}</div>
</div>

const mapStateToProps = (state: any) => ({
  title: state.global.title
})

export default connect(mapStateToProps)(Content)