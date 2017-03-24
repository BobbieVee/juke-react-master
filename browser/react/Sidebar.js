import React from 'react';


class Sidebar extends React.Component{
	render(){
		return (
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#" onClick={this.props.momo} >ALBUMS</a>
            </h4>
          </section>
        </sidebar>
		)
	}

}

export default Sidebar;