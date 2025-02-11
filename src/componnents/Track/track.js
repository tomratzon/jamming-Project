import React from 'react';
import './Track.css';
//receive track object
function Track({ track,onAdd,isRemoval}) {
    const addTrack = () => {
        onAdd(track);
      };
    
  return (
      <div className="Track"> 
          <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
          </div>
          <button 
                className="Track-action"
                onClick={addTrack}>
            {isRemoval? '-':'+'}
            </button>
      </div>
  );
}

export default Track;