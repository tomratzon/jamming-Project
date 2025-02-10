import React, { Component,useState }  from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';
import './App.css'; // Assuming you have some CSS for basic styling


function App() {
  const [searchResults, setSearchResults] = useState([
      {id: 1, name: "Tiny Dancer", artist: "Elton John", album: "Madman Across The Water"},
      {id: 2, name: "Sultans of Swing", artist: "Dire Straits", album: "Dire Straits"},
      {id: 3, name: "Fear of the Dark", artist: "Iron Maiden", album: "Fear of the Dark"}
  ]);

  return (
      <div className="App">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <SearchBar />
          <div className="App-playlist">
              <SearchResults searchResults={searchResults} />
              <Playlist />
          </div>
      </div>
  );
}


export default App;