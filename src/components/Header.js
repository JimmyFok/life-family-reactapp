import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {        
    render() {

      const back = {
        fontSize: 16,
        paddingRight: 8
      }

      const search = {
        fontSize: 16,
      }
      
      return (
        <header className="Home-header">
            {
              this.props.sta === "1"? 
              <span><FontAwesomeIcon icon={faChevronLeft} style={back}/>返回</span> :
              <span className="Home-header-city">广州<i className="fa fa-angle-down" aria-hidden="true"></i></span>
            }            
            <h3 className="Home-header-title">{this.props.title}</h3>
            <div className="Home-header-search">
              {this.props.sta === "1"?"":<FontAwesomeIcon icon={faSearch} style={search}/>}
            </div>
        </header>
      );
    }
  }

  export default Header