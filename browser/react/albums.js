import React from 'react';
import Album from "./Album";


export default class Albums extends React.Component {

	render(){
		const albums = this.props.albums;
		console.log('albums',albums);

		const result = albums.map((album)=>{
			return (<Album key={album.id} album={album} />)     				
		})

		return result;
	}
}
