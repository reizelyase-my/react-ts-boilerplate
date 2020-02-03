import * as React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// import Header from '../header'
import Sidebar from '../sidebar'
import Content from '../content'
import * as styles from './mainWrapper.scss'

const Wrapper = (props: any) => {
    return <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.mainWrapper}>
            {/* <Header /> */}
            <Content {...props} />
        </div>
        <ToastContainer autoClose={5000} />
    </div>
}

export default Wrapper