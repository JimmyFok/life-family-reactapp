// 容器包裹一组
import React,{Component} from 'react';
import { Ad } from '../components'

const baseUrl = "assets/img/"
const adState = [
    {
        imgsrc: require("../"+ baseUrl + "home-ad-1.png"),
        title: "【10月抢购预告】 荣耀乐檬大神爆款 惊爆价"
    },
    {
        imgsrc: require("../"+ baseUrl + "home-ad-2.png"),
        title: "【劲爆开抢】 宝洁大礼包优惠前所未有"
    },
    {
        imgsrc: require("../"+ baseUrl + "home-ad-3.png"),
        title: "【神价再现】 GOD PRICE 华丽上市"
    }
]

class Area extends Component{
    render(){        
        return(
            <div className = "Home-area">
                <div className="Home-area-title">
                    <i></i>
                    <span>特卖专区 Sales</span>
                    <i></i>
                </div>                
                <div className="Home-area-list">
                    {adState.map((item,index)=><Ad item={item} key={index} index={index}  />)}
                </div>
            </div> 
        )
    }
}

export default Area