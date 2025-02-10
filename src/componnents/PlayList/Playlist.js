import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist() {
  const mockTracks = [
    {id: 3, name: "Song3", artist: "Artist3", album: "Album3"},
    {id: 4, name: "Song4", artist: "Artist4", album: "Album4"}
  ];

  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <TrackList tracks={mockTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;