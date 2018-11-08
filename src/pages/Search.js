import React,{Component} from 'react';
import { Header, Good } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/Search.css'

class Search extends Component{  

    constructor(props){       
        super(props)
        this.state = {
            goodsmsg: [
                {
                    goodimg: require('../assets/img/good-img-1.png'),
                    goodname: "坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根碧根坚果特产山核桃奶油味碧根",
                    goodprice: 29.5
                },
                {
                    goodimg: require('../assets/img/good-img-1.png'),
                    goodname: "坚果特sdf碧根坚果特产山核桃奶油味碧根",
                    goodprice: 29.5
                },
            ]  
        }
    }

    render(){   
        const search = {
            fontSize: 13,
            color: "#8e8e8e",
            paddingLeft: 8,
            paddingRight: 8
        }

        return(
            <div className="Search-container1">
                <div className="Search-header">
                    <Header sta={'1'} title="搜索"/>
                </div> 
                <div className="Search-goods">                    
                    <div className="Search-input">
                        <FontAwesomeIcon icon={faSearch} style={search}/>
                        <input type="text" placeholder="请输入关键词/商品名称"/>
                    </div>                              
                </div>    
                <div className="Search-result" >
                    {this.state.goodsmsg.map((item,index)=>(
                        <Good msg={item} key={index}/>
                    ))}                    
                </div>                      
            </div>
        )
    }
}



export default Search