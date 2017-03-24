import React from 'react';
import Sidebar from './sidebar';
import Footer from './footer';
import Album from "./Album";
import axios from 'axios';






const fakeAlbums = [
  {
    name: 'Abbey Road',
    id: 1,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 1,
        name: 'Romeo & Juliette',
        artists: [ 
          { name: 'Bill' } 
        ],
        genre: 'Funk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }, 
      {
        id: 2,
        name: 'White Rabbit',
        artists: [
          { name: 'Bill' }, 
          { name: 'Alice' }
        ],
        genre: 'Fantasy',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }, 
      {
        id: 3,
        name: 'Lucy in the Sky with Diamonds',
        artists: [ 
          { name: 'Bob' } 
        ],
        genre: 'Space',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  },
  {
    name: 'Yellow Submarine',
    id: 2,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 4,
        name: 'London Calling',
        artists: [ 
          { name: 'Bill' } 
        ],
        genre: 'Punk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  }
];


axios.get('api/albums')
  .then(response => {
    return response.data;
  })
  .then(data => {
    console.log('success');
    console.log(data);
  })
  .catch(err => {
    console.error('error');
    console.error(err);
  });

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {albums: []}
		//this.state.albums = fakeAlbums
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
		return (
	<div id="main" className="container-fluid">
      <div className="col-xs-2">
        <Sidebar />
      </div>

      <div className="col-xs-10">
		<h3>Albums</h3>
		<div className="row">
      		{
      			this.state.albums.map((album)=>{
					return (<Album key={album.id} album={album} />)      				

      			})
      		}
      	</div>	
      </div>
      <Footer />
    </div>)
	}
}

export default Main;