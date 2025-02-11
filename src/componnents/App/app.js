import React, {useState }  from 'react';
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
  const [playlistTracks, setPlaylistTracks] = useState([{ id: 4, name: "Imagine", artist: "John Lennon", album: "Imagine" },
    { id: 5, name: "The Chain", artist: "Fleetwood Mac", album: "Rumours" }
  ]);
  const addTrack= (track)=>{ //add track into playlistTracks if isn't there already
    const trackAlreadyExist = playlistTracks.find(pTrack => pTrack.id === track.id);
    if(!trackAlreadyExist){
      setPlaylistTracks([...playlistTracks,track]);
    }
  };
  const removeTrack = (track)=>{
    const newPlaylist=playlistTracks.filter(ptrack=>ptrack.id!==track.id);
    setPlaylistTracks(newPlaylist);
  };
  const updatePlaylistName= (name)=>{
    setPlaylistName(name);
  };

//heading 
//searchBar
//app-playlist
//  search results
//  playlist 
  return (
    <div className="App">
    <h1>Ja<span className="highlight">mmm</span>ing</h1> 
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onNameChange={updatePlaylistName} 
          onRemove={removeTrack}
          
      />
    </div>
  </div>
  );
}


export default App;