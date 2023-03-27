import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../../utils/APIController';

const PlaylistDetails = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState();

  if (selectedPlaylist) console.log(selectedPlaylist);

  const { id } = useParams();

  useEffect(() => {
    console.log('Playlist Details page loaded');

    fetchFromApi(`playlists/${id}?limit=100`)
      .then((res) => {
        if (res.error) throw res.error;

        if (!res.error) setSelectedPlaylist(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>PlaylistDetails</div>;
};

export default PlaylistDetails;
