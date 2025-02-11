import React, { Component,useState }  from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';
import './App.css'; // Assuming you have some CSS for basic styling


function App() {
    //searchResults state decluration
  const [searchResults, setSearchResults] = useState([ 
      {id: 1, name: "Tiny Dancer", artist: "Elton John", album: "Madman Across The Water"},
      {id: 2, name: "Sultans of Swing", artist: "Dire Straits", album: "Dire Straits"},
      {id: 3, name: "Fear of the Dark", artist: "Iron Maiden", album: "Fear of the Dark"}
  ]);
  //playlistName state decluration
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 4, name: "Imagine", artist: "John Lennon", album: "Imagine" },
    { id: 5, name: "The Chain", artist: "Fleetwood Mac", album: "Rumours" }
  ]);

//heading 
//searchBar
//app-playlist
//  search results
//  playlist name
  return (
    <div className="App">
    <h1>Ja<span className="highlight">mmm</span>ing</h1> 
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={searchResults} />
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} setPlaylistName={setPlaylistName} setPlaylistTracks={setPlaylistTracks} />
    </div>
  </div>
  );
}


export default App;