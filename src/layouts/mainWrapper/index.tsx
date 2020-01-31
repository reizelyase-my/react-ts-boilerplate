import * as React from 'react'

// import Header from '../header'
import Sidebar from '../sidebar'
import * as styles from './mainWrapper.scss'

const Wrapper = (props: any) => {
    return <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.mainWrapper}>
            {/* <Header /> */}
            <div className={styles.contentWrapper}>{props.children}</div>
        </div>
    </div>
}

export default Wrapper