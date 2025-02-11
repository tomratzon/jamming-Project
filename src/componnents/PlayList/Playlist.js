import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist({playlistName,playlistTracks,onNameChange,onRemove}) {
  const handleNameChange=(e)=>{
    onNameChange(e.target.value);
  }
  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;