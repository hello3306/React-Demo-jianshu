import React, { Component } from 'react';
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



class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}></NavSearch>
            </CSSTransition>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="icon"
            >
              <i className={focused ? 'focused2 iconfont' : 'iconfont'}>&#xe62b;</i>
            </CSSTransition>

            {this.getListArea()}

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

  getListArea() {
    const { focused, list, page, handleMouseEnter,
      handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList.length) {
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        pageList.push(
          <SearcInfoItem key={jsList[i]}>{jsList[i]}</SearcInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearcInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearcInfoTitle>
            热门搜索
             <SearcInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearcInfoSwitch>
          </SearcInfoTitle>
          <SearcInfoList>
            {pageList}
          </SearcInfoList>
        </SearcInfo>
      )
    } else {
      return null;
    }

  }

}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    // state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreate.searchFocus());
      dispatch(actionCreate.getList())
    },
    handleInputBlur() {
      const action = actionCreate.searchBlur();
      dispatch(action)
    },
    handleMouseEnter() {
      const action = actionCreate.mouseEnter();
      dispatch(action)
    },
    handleMouseLeave() {
      const action = actionCreate.mouseLeave();
      dispatch(action)
    },
    handleChangePage(page, totalPage) {

      if (page < totalPage) {
        dispatch(actionCreate.changePage(page + 1));
      } else {
        dispatch(actionCreate.changePage(1));
      }

    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);