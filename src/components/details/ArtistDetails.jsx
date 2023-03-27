import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../../utils/APIController';

const ArtistDetails = () => {
  const [selectedArtist, setSelectedArtist] = useState();

  if (selectedArtist) console.log(selectedArtist);

  const { id } = useParams(); // grabs the album id from the url

  useEffect(() => {
    console.log('Artist Details page loaded.');

    fetchFromApi(`artists/${id}/albums?limit=30`)
      .then((res) => {
        if (res.error) throw res.error;

        if (!res.error) setSelectedArtist(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>ArtistDetails</div>;
};

export default ArtistDetails;
