import React, { useEffect, useState } from 'react';
import { Grid } from '../../styles/MainStyles';
import { fetchFromApi } from '../../utils/APIController';
import { ArtistCard } from './Cards';

const Artists = () => {
  const [artists, setArtists] = useState();

  if (artists) console.log(artists);

  useEffect(() => {
    console.log('Artists page loaded.');
    fetchFromApi('me/top/artists?limit=30')
      .then((res) => setArtists(res.items))
      .catch((err) => console.log(err));
  }, []);

  while (!artists) return <h1>loading...</h1>;
  return (
    <Grid>
      {artists?.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </Grid>
  );
};

export default Artists;
