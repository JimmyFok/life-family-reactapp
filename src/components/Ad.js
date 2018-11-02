/**
 * 专区组件
 */

import React, { Component } from 'react';

class Ad extends Component{    
    render(){
        const src = require("../assets/img/home-banner.png");
        return(
            <div className="Home-ad">
                <img src={src} alt="banner"/>
                <h3>【10月抢购预告】 荣耀乐檬大神爆款 惊爆价【10月抢购预告】 荣耀乐檬大神爆款 惊爆价【10月抢购预告】 荣耀乐檬大神爆款 惊爆价【10月抢购预告】 荣耀乐檬大神爆款 惊爆价【10月抢购预告】 荣耀乐檬大神爆款 惊爆价</h3>
            </div>
        )
    }
}

export default Ad;