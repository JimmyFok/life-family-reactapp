import React, { Component } from 'react';
import '../assets/css/Home.css';
import { Header } from '../components' 
import { Area } from '../containers' 

const lifefunitems = [
    { title: '精彩生活', subtitle: '会员专享' , img: require('../assets/img/home-fun-1.png'), color: ['#f29604','#e1a84a','#faeec4'] },
    { title: '生活食品', subtitle: '为生活 添实惠' , img: require('../assets/img/home-fun-2.png'), color: ['#2aad49','#79bb88','#d9f6e5'] },
    { title: '生活用品', subtitle: '为生活 更舒适' , img: require('../assets/img/home-fun-3.png'), color: ['#2ba6de','#82c6e5','#def2fb'] },
    { title: '生活家居', subtitle: '为生活 享生活' , img: require('../assets/img/home-fun-4.png'), color: ['#f65b86','#ed91ab','#f9e0e7'] },
    { title: '一键客服', subtitle: '为生活 更贴心' , img: require('../assets/img/home-fun-5.png'), color: ['#ff7531','#fba575','#fbecdd'] },
]

const headStyle= {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
}

const contentStyle= {
    marginTop: 44
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div style={headStyle}>
            <Header />
        </div> 
        <div className="Content" style={contentStyle}>
            <div className="Home-banner"></div>
            <div className="Home-lifefun">
                {lifefunitems.map((item,index)=><Fun item = {item} key={index} />)}
            </div>
            <Area/>
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

export default Home;
