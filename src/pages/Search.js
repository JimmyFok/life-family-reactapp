import React,{Component} from 'react';
import {Header, Distpicker} from '../components'
import '../assets/css/Search.css'

// const headStyle= {
//     position: "fixed",
//     left: 0,
//     right: 0,
//     top: 0,
// }
class Search extends Component{  

    constructor(props){       
        super(props)
        this.state = {
            point: ''
        }
    }

    render(){   
        return(
            <div className="Search-container">
                <div className="Search-header">
                    <Header sta={'1'}/>
                </div> 
                <div className="Search-at">                    
                    <Distpicker point={this.state.point} />
                    <div id="allmap"></div>
                </div>                
            </div>
        )
    }
}



export default Search