import React, { useEffect, useState } from 'react';
import { Grid } from '../../styles/MainStyles';
import { fetchFromApi } from '../../utils/APIController';
import { PlaylistCard } from './Cards';

const Playlists = () => {
  const [playlists, setPlaylists] = useState();

  if (playlists) console.log(playlists);

  useEffect(() => {
    console.log('Playlists Page Loaded.');
    fetchFromApi('me/playlists?limit=30')
      .then((res) => setPlaylists(res.items))
      .catch((err) => console.log(err));
  }, []);

  while (!playlists) return <h1>loading...</h1>;

  return (
    <Grid>
      {playlists?.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </Grid>
  );
};

export default Playlists;
