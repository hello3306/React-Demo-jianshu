import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render() {
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                                className={this.state.focused ? 'focused' : ''}></NavSearch>
                        </CSSTransition>
                        <CSSTransition
                        in={this.state.focused}
                        timeout={200}
                        classNames="icon"
                        >
                        <i className={this.state.focused ? 'focused2 iconfont' : 'iconfont'}>&#xe62b;</i>
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

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;