import React from 'react';

export default class Album extends React.Component {
	
	render(){
		//console.log('album', this.props.album)
		const album = this.props.album;
		return (
			<div className="col-xs-4">
		      <a className="thumbnail" href="#">
		        <img src={album.imageUrl} />
		        <div className="caption">
		          <h5>
		            <span>{album.name}</span>
		          </h5>
		          <small>{album.songs.length}</small>
		        </div>
		      </a>
		    </div>
			)

	}
}

