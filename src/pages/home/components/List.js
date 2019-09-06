import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from "react-redux";
import { actionCreate } from "../store";
import { Link } from "react-router-dom";


class List extends PureComponent {
  render() {
    const { articleList, getMoreList, page } = this.props;

    return (
      <div>
        {
          articleList.map((item, index) => {
            return (
              <Link key={index} to="/detail">
                <ListItem >
                  <img
                    alt=''
                    className="itemImg"
                    src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>


    )
  }
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home'], 'articlePage')

  }

}
const mapDispathToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreate.getMorList(page))
  }
})
export default connect(mapStateToProps, mapDispathToProps)(List);