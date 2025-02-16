import React, {useState,useEffect }  from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';
import Spotify from '../util/spotify';
import './App.css'; // Assuming you have some CSS for basic styling


function App() {
    //searchResults state decluration
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  //playlistName state decluration
  const [playlistName, setPlaylistName] = useState(localStorage.getItem('playlistName') || "My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState(JSON.parse(localStorage.getItem('playlistTracks')) || []);

  const [isLoading, setIsLoading] = useState(false); //used for implemanting loading

  useEffect(() => { //allow to save playlist state while refreshing the page
    localStorage.setItem('playlistName', playlistName);
    localStorage.setItem('playlistTracks', JSON.stringify(playlistTracks));
  }, [playlistName, playlistTracks]); 

  useEffect(() => {
  filterSearchResults();
  } , [playlistTracks, searchResults]);

  const filterSearchResults = () => {
    const filtered = searchResults.filter(searchTrack =>
        !playlistTracks.find(playlistTrack => playlistTrack.id === searchTrack.id));
    setFilteredResults(filtered);
  };

  


  const search = (track) => {
    Spotify.search(track).then(results => {
        setSearchResults(results);
    });
  };

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
    if(playlistTracks.length===0){return;}//if playlist empty wont save it 
    setIsLoading(true);//start loading feature
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
        setIsLoading(false);//end loading features
      })
      .catch(error => {
        console.error('Error saving the playlist:', error);
      });
  };
  
  return (
    <div className="App">
      <div className="Search-container">
        <h1>Ja<span className="highlight">mmm</span>ing</h1> 
        <SearchBar onSearch={search}/>
        
      </div>
      <div className="App-playlist">
        <SearchResults searchResults={filteredResults} onAdd={addTrack} />
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onNameChange={updatePlaylistName} 
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
         {isLoading && <div className="LoadingOverlay">Saving {playlistName}...</div>}
    </div>
  </div>
  );
}


export default App;
