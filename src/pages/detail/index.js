import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { actionCreate } from "./store";

class Detail extends PureComponent {
	render() {
		console.log(this.props)
		return (
			
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.id);
	}
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content']),
	id:0
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {

		dispatch(actionCreate.getDetailContent(id));
	}
});

export default connect(mapState, mapDispatch)(withRouter(Detail));