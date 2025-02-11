import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';
//receive array of track objects
function TrackList({ tracks }) {
  return (
      <div className="TrackList">
          {tracks.map(track => ( //map track by id 
              <Track key={track.id} track={track} />
          ))}
      </div>
  );
}

export default TrackList;