import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import { actionCreate } from "./store";
import {
    HeaderWrapper
    , Logo
    , Nav
    , NavItem
    , NavSearch
    , Addition
    , Button
    , SearchWrapper
    , SearcInfo
    , SearcInfoTitle
    , SearcInfoSwitch
    , SearcInfoItem
    , SearcInfoList
} from './style';

const getListArea=(show)=>{
    if(show){
        return (
            <SearcInfo>
            <SearcInfoTitle>
                热门搜索
                <SearcInfoSwitch>换一批</SearcInfoSwitch>
            </SearcInfoTitle>
            <SearcInfoList>
            <SearcInfoItem>教育</SearcInfoItem>
            <SearcInfoItem>教育</SearcInfoItem>
            <SearcInfoItem>教育</SearcInfoItem>
            <SearcInfoItem>教育</SearcInfoItem>
            </SearcInfoList>
        </SearcInfo>
        )
    }else{
        return null;
    }

}

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className="left action" >首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                {/* 搜索框 start */}
                <SearchWrapper >
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                            className={props.focused ? 'focused' : ''}></NavSearch>
                    </CSSTransition>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="icon"
                    >
                        <i className={props.focused ? 'focused2 iconfont' : 'iconfont'}>&#xe62b;</i>
                    </CSSTransition>

                   {getListArea(props.focused)}

                </SearchWrapper>
                {/* 搜索框 end */}

                <Addition>
                    <Button className="writting">写文章<i className="iconfont">&#xe602;</i></Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        // state.get('header').get('focused')
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreate.searchFocus();
            dispatch(action)
        },
        handleInputBlur() {
            const action = actionCreate.searchBlur();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);