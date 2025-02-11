import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';
//receive array of track objects, a boolean and function object
function TrackList({tracks=[], onAdd, isRemoval}) {
   
  return (
      <div className="TrackList">
          {tracks.map(track => ( //map track where id as key 
              <Track 
                    key={track.id} 
                    track={track}
                    onAdd={onAdd}
                    isRemoval={isRemoval} />
          ))}
      </div>
  );
}

export default TrackList;