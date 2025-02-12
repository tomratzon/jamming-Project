import React, {useState }  from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';
import Spotify from '../util/spotify';
import './App.css'; // Assuming you have some CSS for basic styling


function App() {
    //searchResults state decluration
  const [searchResults, setSearchResults] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    });
  };
  //playlistName state decluration
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
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
  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
      })
      .catch(error => {
        console.error('Error saving the playlist:', error);
      });
  };
  

//heading 
//searchBar
//app-playlist
//  search results
//  playlist 
  return (
    <div className="App">
      <div className="Search-container">
        <h1>Ja<span className="highlight">mmm</span>ing</h1> 
        <SearchBar onSearch={search}/>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      </div>
      <div className="App-playlist">
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onNameChange={updatePlaylistName} 
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
    </div>
  </div>
  );
}


export default App;