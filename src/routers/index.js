/**
 * 路由
 */

 import React from "react";
 import { BrowserRouter , 
    Switch, 
    Route, 
} from "react-router-dom";
import '../assets/css/routers.css'
import '../assets/css/css-reset.css'

// import { Ad } from '../components';
import { Area } from '../containers';
import { Search} from '../pages'
import HomeTab from './HomeTab'


// react-router v4 版本
const HomeRouter = ()=> (
    <div>
        <Switch>
            <Route exact path="/" component={HomeTab}/>
            <Route path="/vip" component={Area}/>  
            <Route path="/search" component={Search}/>
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


