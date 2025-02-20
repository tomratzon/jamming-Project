import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist({playlistName,playlistTracks,onNameChange,onRemove,onSave}) {
  const handleNameChange=(e)=>{
    onNameChange(e.target.value);
  }
  return (
    <div className="Playlist">
      <div className="playlistName">
        <input value={playlistName} onChange={handleNameChange}  placeholder="Enter a playlist name" />
      </div>
      <h2>Tracks</h2>
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;