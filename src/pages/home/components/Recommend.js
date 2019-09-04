import React, { Component } from 'react';
import { RecommendWrpper,RecommendItem } from '../style';
import { connect } from "react-redux";
class Recommend extends Component {
    render() {
        const { recommendList } = this.props;
            return (
                <RecommendWrpper>
                    {recommendList.map((item)=>{
                    
                    return(<RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} >
                    </RecommendItem>)
                    })}

                </RecommendWrpper>
            )
    }
}
const mapStateToProps = (state) => {
    return {
        recommendList: state.getIn(['home', 'recommendList'])
    }
}
const mapDispathToProps = () => {
    return null;
}
export default connect(mapStateToProps, mapDispathToProps)(Recommend);
