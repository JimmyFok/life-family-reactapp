import React, {Component} from 'react';
import {Share} from '../components'

class Def extends Component{    
    render(){
        return(
            <div>【我是默认的组件】
                {/* 具体组件中的按钮控制参考这个来绑定时间就好 */}
                <button onClick={this.props.show.bind(this)}>我来分享</button> 
            </div>
        )
    }
}

export default class SharePages extends Component{

    constructor(){
        super()
        this.state ={
            show : false
        }
    }

    static defaultProps = {
        comp: Def  
    }

    show(){
        this.setState({
            show: true
        })
    }

    cancel(){
        // console.log(this)
        this.setState({
            show: false
        })
    }

    // 将禁止滚动的控制都放在该组件中
    stopEvent(e){
        // console.log(this)
        // console.log(e.currentTarget)
        e.currentTarget.addEventListener('touchmove',function(e){
            e.preventDefault()
        }, {passive:false})
        
    }
    
    render(){
        return (
            <div>
                {/* 这里放被尽头 */}  
                {
                    this.state.show?(
                        <div onLoad={this.stopEvent.bind(this)}>
                            <Share cancel= {this.cancel.bind(this)}/>
                            <this.props.comp show ={this.show.bind(this)}/>
                        </div>)
                    :
                    <this.props.comp show ={this.show.bind(this)}/>
                    }
                    {/* <button onClick={this.show.bind(this)}>弹出分享</button> */}
            </div>
        )
    }
}