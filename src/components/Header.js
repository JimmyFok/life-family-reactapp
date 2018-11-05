import React, { Component } from 'react'

class Header extends Component {
    render() {
      return (
        <header className="Home-header">
            {
              true ? 
              <span>返回</span>:
              <span className="Home-header-city">广州<i className="fa fa-angle-down" aria-hidden="true"></i></span>
            }            
            <h3 className="Home-header-title">生活一家</h3>
            <div className="Home-header-search"><i className="fa fa-search" aria-hidden="true"></i></div>
        </header>
      );
    }
  }

  export default Header