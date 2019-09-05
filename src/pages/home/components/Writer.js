import React, { PureComponent } from 'react';
import { WriterWrpper, WriterItem,WriterInfo } from '../style';
import { connect } from "react-redux";
class Writer extends PureComponent {
    render() {
        const { writerList } = this.props;
        return (
            <WriterWrpper>
                {writerList.map((item) => {
                    return (
                    <WriterItem key={item.get('id')}>
                        <img  className='writerImg' alt='' src={item.get('img')} />
                        <WriterInfo>
                        <h3 className="title">{item.get('name')}</h3>
                        <p className="desc">{item.get('info')}</p>
                        </WriterInfo>
                    </WriterItem>
                    )

                })}

            </WriterWrpper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList'])
    }
}
const mapDispathToProps = () => {
    return null;
}
export default connect(mapStateToProps, mapDispathToProps)(Writer);