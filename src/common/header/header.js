import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import {
    HeaderWrapper
    , Logo
    , Nav
    , NavItem
    , NavSearch
    , Addition
    , Button
    , SearchWrapper
} from './style';
import reducer from '../../store/reducer';


const Header = (props) => {
   return(
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
        focused: state.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: "search_focus"
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: "search_blur"
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);