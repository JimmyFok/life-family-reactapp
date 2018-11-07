import React, { Component } from 'react';

class Fun extends Component{    
    render(){
        const { item } = this.props;
        // 需要通过变量来传值是需要先处理再倒入更好
        const divStyle = {
            backgroundImage: 'url('+item.img+')', 
            backgroundColor: item.color[2],           
        };
        const h3Style = {
            color: item.color[0]         
        };
        const subStyle = {
            color: item.color[1]
        };
        return(
            <div className='Home-lifefun-itembox'>
                <div className='Home-lifefun-item' style={ divStyle }>
                    <h3 style={ h3Style }>{item.title}</h3>
                    <div style={ subStyle }>{item.subtitle}</div>
                </div>
            </div>            
        )
    }
} 

export default Fun