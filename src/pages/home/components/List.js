import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from "react-redux";


class List extends Component {
    render() {
        const { articleList } = this.props;

        return (
            articleList.map((item) => {
                return(
                <ListItem key={item.get('id')}>
                    <img
                        alt='' 
                        className="itemImg"
                        src={item.get('imgUrl')} />
                    <ListInfo>
                        <h3 className="title">{item.get('title')}</h3>
                        <p className="desc">{item.get('desc')}</p>
                    </ListInfo>
                </ListItem>
                )
            }
      )

        )
}
}
const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList'])
    }
}
const mapDispathToProps = () => {
    return null;
}
export default connect(mapStateToProps, mapDispathToProps)(List);