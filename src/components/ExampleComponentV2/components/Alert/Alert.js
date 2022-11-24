import React from "react";
import { RotAlert } from "rotterdam-v2";
import PropTypes from "prop-types";

const Alert = (props) =>{
    const {children, isVisible} = props;
    return (
        <RotAlert width={300} position="rightTop" isVisible={isVisible}>
            {children}
        </RotAlert>
        )
}
export default Alert

Alert.defaultProps = {
    children: null
}
Alert.propTypes = {
    children: PropTypes.node
}