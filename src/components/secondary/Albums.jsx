import React, { useEffect, useState } from 'react';
import { Flex, Grid } from '../../styles/MainStyles';
import { fetchFromApi } from '../../utils/APIController';
import { AlbumCard } from './Cards';

const Albums = () => {
  const [albums, setAlbums] = useState();

  if (albums) console.log(albums);

  useEffect(() => {
    console.log('albums page loaded');
    fetchFromApi('me/albums?limit=30')
      .then((res) => setAlbums(res.items))
      .catch((err) => console.log(err));
  }, []);

  while (!albums) return <h1>Loading...</h1>;

  return (
    <Grid>
      {albums?.map(({ album }) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </Grid>
  );
};

export default Albums;
