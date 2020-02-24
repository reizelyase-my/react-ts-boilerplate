import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@actions/global'
import * as styles from './home.scss'

const Home = () => {
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        dispatch(setPageTitle("Home"))
    })

    return <div className={styles.homeTexts}>Lorem ipsum dolor sit amet</div>
}

export default Home