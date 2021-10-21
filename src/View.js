import { connect } from 'react-redux'
import { fetchActivity } from './action'


const View = props => {
    return (
        <div className="foo">
            <h1>{props.data}</h1>
            <button onClick={()=>{props.dispatch(fetchActivity(1))}}>New Activity</button>
        </div>
    )
}

const mapState = state => ({
    data: state.data
})

export default connect(mapState)(View)
