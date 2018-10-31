import React, { Component } from 'react';
import '../css/Home.css';
// import { url } from 'inspector';

const lifefunitems = [
    { title: '精彩生活', subtitle: '会员专享' , img: require('../assets/home-fun-1.png'), color: ['#f29604','#e1a84a','#faeec4'] },
    { title: '精彩生活', subtitle: '会员专享' , img: require('../assets/home-fun-2.png'), color: ['#2aad49','#79bb88','#d9f6e5'] },
    { title: '精彩生活', subtitle: '会员专享' , img: require('../assets/home-fun-3.png'), color: ['#2ba6de','#82c6e5','#def2fb'] },
    { title: '精彩生活', subtitle: '会员专享' , img: require('../assets/home-fun-4.png'), color: ['#f65b86','#ed91ab','#f9e0e7'] },
    { title: '精彩生活', subtitle: '会员专享' , img: require('../assets/home-fun-5.png'), color: ['#ff7531','#fba575','#fbecdd'] },
]

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
            <span className="Home-header-city">广州<i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <h3 className="Home-header-title">生活一家</h3>
            <div className="Home-header-search"><i className="fa fa-search" aria-hidden="true"></i></div>
        </header>
        <div className="Home-banner"></div>
        <div className="Home-lifefun">
            {lifefunitems.map((item,index)=><Fun item = {item} key={index}/>)}
        </div>
      </div>
    );
  }
}


class Fun extends Component{    
    render(){
        const { item } = this.props;
        // 需要通过变量来传值是需要先处理再倒入更好
        const divStyle = {
            backgroundImage: 'url('+item.img+')', 
            backgroundColor: item.color[2],           
        };
        const h3Style = {
            color: item.color[0],
            fontSize: "15px",
            fontWeight: "normal"
        };
        const subStyle = {
            color: item.color[1],
            fontSize: "12px"
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

export default Home;
