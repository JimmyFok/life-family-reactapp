/**
 * 路由
 */

 import React from "react";
 import { BrowserRouter as Router, 
    // HashRouter, 
    Route, 
    // Link, 
    // IndexRoute 
} from "react-router-dom";
import {Ad} from '../components';

import { Home, } from '../pages'

 // 注意：路由的输出是函数才对。
 export default ()=>{
    return(
        <Router>
            <Route exact path="/" component={Home}>
                <Route exact path="/accounts/:id" component={<div>sdfdsf</div>}/>
                <Route path="/statements" component={Ad}/>
            </Route>
        </Router>            
    )
 }
         