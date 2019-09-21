import { connect } from "react-redux";
const mapStateToProps = (stateProps, ownProps) => {
    return {
        theme: stateProps.theme,
        ...ownProps
    }
}
export default (Component) => {
    return connect(mapStateToProps)(Component);
}