import React, {Component} from 'react';
import '../assets/css/Share.css'



class Share extends Component{
    constructor(){
        super()
        this.state = {
            weichat: require('../assets/img/search-wechat.png'),
            weibo: require('../assets/img/search-weibo.png'),
            friends: require('../assets/img/search-friends.png')
        }
    }

    
    cancel(){
        this.props.cancel()
    }

    shareTo(channel){
        alert(`${channel}分享功能`)
    }
    
    render(){
        return(
            <div className="Share-container">
                {/* 遮罩 */}
                <div className="Share-shadow"></div>
                {/* 弹窗内容 */}
                <div className='Share-content'>
                    <h4>分享到</h4>
                    <div className="Share-buttons">
                        <div className="Share-button" onClick={this.shareTo.bind(this, "微信好友")}>
                            <img src={this.state.weichat} alt="微信好友" className="weichat"/>
                            <span>微信好友</span>
                        </div>
                        <div className="Share-button" onClick={this.shareTo.bind(this, "朋友圈")}>
                            <img src={this.state.friends} alt="朋友圈" className="weichat"/>
                            <span>微信朋友圈</span>
                        </div>
                        <div className="Share-button" onClick={this.shareTo.bind(this, "新浪微博")}>
                            <img src={this.state.weibo} alt="新浪微博" className="weichat"/>
                            <span>新浪微博</span>
                        </div>
                    </div>
                    <div className="Share-cancel" onClick={this.cancel.bind(this)}>
                        <span>取消</span>
                    </div>
                </div>            
            </div>
            
        )
    }
}

export default Share