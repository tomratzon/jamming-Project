import React from 'react';
import Track from './trackrack';

function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <div className="TrackList">
      {tracks.map(track => {
        return <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />
      })}
    </div>
  );
}

export default TrackList;