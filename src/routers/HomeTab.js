/**
 * 路由
 */

 import React from "react";
 import { BrowserRouter , 
    Switch, 
    Route, 
    NavLink, 
} from "react-router-dom";
import '../assets/css/routers.css'
import '../assets/css/css-reset.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGift, faListUl, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons'

// import { Ad } from '../components';
import { Area } from '../containers';
import { Home, Search} from '../pages'

const icon = {
    fontSize: 22
}

// const back = true

// react-router v4 版本
const HomeRouter = ()=> (
    <div>
                    {/* 底部切换栏 */}
                    <ul className="Home-bottom-tab">
                        <li>
                            <NavLink exact activeClassName="selected" to="/">
                                <FontAwesomeIcon icon={faHome} style={icon}/>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="selected" to="/vip">
                                <FontAwesomeIcon icon={faGift} style={icon}/>
                                <span>会员杂锦</span>
                            </NavLink>
                        </li>
                        <li>                           
                            <NavLink exact activeClassName="selected" to="/search" >
                                <FontAwesomeIcon icon={faListUl} style={icon}/>
                                <span>分类</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="selected" to="/cart">
                                <FontAwesomeIcon icon={faShoppingCart} style={icon}/>
                                <span>购物车</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="selected" to="/user">
                                <FontAwesomeIcon icon={faUserAlt} style={icon}/>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>     
                    {/* 路由设置 */}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/vip" component={Area}/>  
                        <Route path="/search" component={Search}/>    
                        {/* <Redirect to="/" />                                                               */}
                    </Switch>    
                    
                           
                </div>   
)

 // 最后套到最上层
 const appRouter =()=>{
    return(
        <BrowserRouter>
            <HomeRouter/>
        </BrowserRouter>
    )  
 }

 export default appRouter

 // 路由中不像vue-router那样，它不需要有route-view，而是任何都在Router里面。


