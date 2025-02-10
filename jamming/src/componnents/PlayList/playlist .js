import React from 'react';
import TrackList from './trackList';

function Playlist({ playlistName, playlistTracks, onRemove, onSave }) {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;