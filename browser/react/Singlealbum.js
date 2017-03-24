import React from 'react';

export default class SingleAlbum extends React.Component{


	render(){
		const albumSongs = this.props.selectedAlbum;

		console.log('albumSongs',albumSongs)
		return(
			<div className="album col-xs-10">
			  <div>
			    <h3>{albumSongs.name}</h3>
			    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300" className="img-thumbnail" />
			  </div>
			  <table className='table'>
			    <thead>
			      <tr>
			        <th></th>
			        <th>Name</th>
			        <th>Artists</th>
			        <th>Genre</th>
			      </tr>
			    </thead>
			    <tbody>
				{
					albumSongs.songs.map((song)=>{
						return (
							<tr key={song.id}>
					          <td>
						          <button className="btn btn-default btn-xs">
						            <span className="glyphicon glyphicon-play"></span>
						          </button>
					          </td>
					          <td>{song.name}</td>
					          <td>{song.artists.map((artist)=>{return artist.name}).join(', ')}</td>
					          <td>{song.genre}</td>
					        </tr>
						);
					})
				}			      
			     
			    </tbody>
			  </table>
			</div>

		)

	}
}