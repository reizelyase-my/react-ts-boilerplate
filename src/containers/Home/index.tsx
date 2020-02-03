import * as React from 'react'
import { connect } from 'react-redux'
import { setPageTitle } from '@actions/global'

const Home = ({ dispatch }: { dispatch: any }) => {
    React.useEffect(() => {
        dispatch(setPageTitle("Home"))
    })

    return <div>Lorem ipsum dolor sit amet</div>
}

export default connect()(Home)