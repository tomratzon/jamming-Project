import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

//receive searchResult object
function SearchResults({ searchResults, onAdd }) {
  return (
      <div className="SearchResults">
          <div className="ResultsHead"><h2>Results</h2></div>
          <TrackList 
              tracks={searchResults} 
              onAdd={onAdd} 
              isRemoval={false} />
      </div>
  );
}

export default SearchResults;