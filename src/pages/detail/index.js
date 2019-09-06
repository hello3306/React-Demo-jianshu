import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from "react-redux";
import { actionCreate } from "./store";

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>简书一年，我找到了一份好工作</Header>
                <Content>
                    {this.props.content}
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getContents()
      }
}
const mapStateToProps = (state) => {
    return {
      content: state.getIn(['detail', 'content'])
    }
  
  }
  const mapDispathToProps = (dispatch) => ({
    getContents(){
        const action = actionCreate.getDetailContent();
        dispatch(action);
    }

  })
  export default connect(mapStateToProps, mapDispathToProps)(Detail);