import { connect } from "react-redux";
const mapStateToProps = (stateProps) => {
    return {
        theme: stateProps.theme,
    }
}
export default (Component) => {
    return connect(mapStateToProps)(Component);
}