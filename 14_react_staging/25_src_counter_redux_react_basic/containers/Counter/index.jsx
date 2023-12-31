// import UI component
import Counter from "../../components/Counter";
// import connect to connect UI and redux
import { connect } from 'react-redux'
import { createAddAction, createSubAction, createAddAsyncAction } from "../../redux/count_action";

// state -> props
function mapStateToProps(state) {
    return {count: state};
}

// dispatch -> props
function mapDispatchToProps(dispatch) {
    return {
        addFunc: (data) => {dispatch(createAddAction(data))},
        subFunc: (data) => {dispatch(createSubAction(data))},
        asyncAddFunc: (data, delay) => {dispatch(createAddAsyncAction(data, delay))}
    }
}

// export a container component for Counter
export default  connect(mapStateToProps, mapDispatchToProps)(Counter);
