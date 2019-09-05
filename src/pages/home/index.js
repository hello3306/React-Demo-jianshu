import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import { connect } from "react-redux";
import { actionCreate } from "./store";

class Home extends PureComponent {
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
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}

      </HomeWrapper>
    )
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }

}
const mapDispathToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreate.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 400) {
      dispatch(actionCreate.toggleTopShow(true));
    } else {
      dispatch(actionCreate.toggleTopShow(false));
    }
  }
})
export default connect(mapStateToProps, mapDispathToProps)(Home);