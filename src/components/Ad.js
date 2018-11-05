/**
 * 专区组件
 */

import React, { Component } from 'react';

class Ad extends Component{    
    render(){
        return(
            <div className="Home-ad">
                <img src={this.props.item.imgsrc} alt={"banner"+this.props.index} />
                <h3>{this.props.item.title}</h3>
            </div>
        )
    }
}

export default Ad;