import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import { connect } from "react-redux";
import {actionCreate } from "./store";

class Home extends Component {
    render() {
        return (

            <HomeWrapper>
                <HomeLeft>
                    <img
                        alt=""
                        className='banner-img'
                        src="https://upload-images.jianshu.io/upload_images/1417131-52d1bdc6e19156e5.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispathToProps = (dispatch) => ({
    changeHomeData() {
        const action=actionCreate.getHomeInfo();
        dispatch(action);

    }
})
export default connect(null, mapDispathToProps)(Home);