import React from 'react';
import Sidebar from './sidebar';
import Footer from './footer';
import Album from "./Album";
import axios from 'axios';
import SingleAlbum from './SingleAlbum';


class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			albums: [],
			selectedAlbum: {songs:[]},
			view: 'list'
		}

		this.handleClick = this.handleClick.bind(this);
		this.deselectAlbum = this.deselectAlbum.bind(this);

	};

	handleClick (albumId) {
  		axios.get(`/api/albums/${albumId}`)
    	  .then(res => res.data)
    	  .then(album => this.setState({ selectedAlbum: album , view:'detail'}))
    };


    deselectAlbum(){
    	console.log('deselect');
    	this.setState({
    		selectedAlbum: {songs:[]}, 
    		view: 'list'
    	});
    };


	componentDidMount(){
		axios.get('/api/albums')
		  .then(res => { 
		    return res.data; 
		  })
		  .then(albumsFromServer => {
		    albumsFromServer = albumsFromServer.map(album => {
		      album.imageUrl = `/api/albums/${album.id}/image`;
		      return album;
		    });
		    this.setState({ albums: albumsFromServer });
		  });
	};

	render(){
		let view;
    	
    	if(this.state.view === 'list'){
    		view = (
				<div id="main" className="container-fluid">
			      <div className="col-xs-2">
			        <Sidebar />
			      </div>

			      <div className="col-xs-10">
					<h3>Albums</h3>
					<div className="row">
			      		{
			      			this.state.albums.map((album)=>{
								return (<Album key={album.id} album={album} 
									onClick={()=>this.handleClick(album.id)} />)      				
			      			})
			      		}
			       	</div>
			       	<Footer />
    			  </div>
    			</div>
			       	)
    	}else{
    		view = (
    			<div id="main" className="container-fluid">
			      <div className="col-xs-2">
			        <Sidebar momo={()=>this.deselectAlbum()} />
			      </div>

			      <div className="col-xs-10">
    					<SingleAlbum selectedAlbum = {this.state.selectedAlbum} />
    			  </div>
				  <Footer />
    			</div>
    			)
    	}
       	
    	return view;
	}
}

export default Main;