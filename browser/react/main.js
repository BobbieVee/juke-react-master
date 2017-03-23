import React from 'react';
import Sidebar from './sidebar';
import Footer from './footer';

class Main extends React.Component{
	constructor({name}){
		super();
		this.state = {person: '',
					  age: 0,
					  tasks: [] }
	  	this.state.person = name;
	} 
	render(){
		return (
	<div id="main" className="container-fluid">
      <div className="col-xs-2">
        <Sidebar />
      </div>

      <div className="col-xs-10">Hey {this.state.person}!</div>

      <Footer />
    </div>)
	}
}

export default Main;