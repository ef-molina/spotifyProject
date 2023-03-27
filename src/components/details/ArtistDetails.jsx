import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Grid } from '../../styles/MainStyles';
import { fetchFromApi } from '../../utils/APIController';
import { AlbumCard } from '../secondary/Cards';

const ArtistDetails = () => {
  const [selectedArtist, setSelectedArtist] = useState();

  if (selectedArtist) console.log(selectedArtist);

  const { id } = useParams(); // grabs the album id from the url

  useEffect(() => {
    console.log('Artist Details page loaded.');

    fetchFromApi(`artists/${id}/albums?limit=30`)
      .then((res) => {
        if (res.error) throw res.error;

        if (!res.error) setSelectedArtist(res.items);
      })
      .catch((error) => console.log(error));
  }, []);

  const artistDetailsArray = selectedArtist?.map((album) => (
    <AlbumCard key={album?.id} album={album} />
  ));

  if (!selectedArtist) return <h2>loading...</h2>;
  return (
    <Flex direction='column' overflowY='scroll'>
      <Grid>{artistDetailsArray}</Grid>
    </Flex>
  );
};

export default ArtistDetails;
