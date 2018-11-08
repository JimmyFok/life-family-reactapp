import React, {Component}  from 'react';

class Good extends Component{
    render(){
        return(
            <div className="good">
                <img src={this.props.msg.goodimg} alt={this.props.msg.goodname}/>
                <div className="msg">
                    <h4 className='ellipse1'>{this.props.msg.goodname}</h4>
                    <span><i>￥</i><strong>{this.props.msg.goodprice}</strong></span>
                </div>                           
            </div>
        )
    }
}

export default Good