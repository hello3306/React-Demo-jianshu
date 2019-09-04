import React, { Component } from 'react';
import { WriterWrapper, WriterItem } from '../style';
import { connect } from "react-redux";
class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterItem>

                </WriterItem>
            </WriterWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList'])
    }
}
const mapDispathToProps = () => {
    return null;
}
export default connect(mapStateToProps, mapDispathToProps)(Writer);