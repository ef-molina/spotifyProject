import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../../utils/APIController';
import { Flex } from '../../styles/MainStyles';
import { LibRow } from '../../styles/LibraryStyles';
import { TitleText, MutedText } from '../../styles/CardStyles';
import { controlDuration } from '../../utils/constants';

const LibraryRow = ({ track, index, images }) => {
  const handleClick = (e) => {
    // document.querySelector('.currentTrackImage').src =
    //   track?.album?.images[2]?.url;
    // document.querySelector('.currentTrackTitle').innerText = track?.name;
    // document.querySelector('.currentTrackArtist').innerText =
    //   track?.artists[0]?.name;
  };

  return (
    <LibRow onClick={handleClick} padding='1rem' gap='1rem'>
      <Flex
        width='5%'
        justifyContent='center'
        alignItems='center'
        // border='1px solid red'
      >
        {index + 1}.
      </Flex>
      <Flex direction='column' gap='.5rem'>
        <TitleText>{track?.name}</TitleText>
        <MutedText>{track?.artists[0]?.name}</MutedText>
      </Flex>
      <Flex
        width='5%'
        justifyContent='center'
        alignItems='center'
        // border='1px solid red'
      >
        {controlDuration(track.duration_ms)}
      </Flex>
    </LibRow>
  );
};

const AlbumDetails = () => {
  const [selectedAlbum, setSelectedAlbum] = useState();

  if (selectedAlbum) console.log(selectedAlbum);

  const { id } = useParams(); // grabs the album id from the url

  useEffect(() => {
    console.log('Album Details page loaded.');

    fetchFromApi(`albums/${id}`)
      .then((res) => {
        if (res.error) throw res.error;

        if (!res.error) setSelectedAlbum(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const selectedAlbumTracksArray = selectedAlbum?.tracks?.items?.map(
    (track, index) => (
      <LibraryRow
        key={track?.id}
        track={track}
        index={index}
        images={selectedAlbum?.images}
      />
    )
  );

  while (!selectedAlbum) return <h2>loading...</h2>;

  return (
    <Flex direction='column' overflowY='auto'>
      <Flex>
        <Flex justifyContent='center' alightItems='center' padding='2rem'>
          <img src={selectedAlbum?.images[0]?.url} />
        </Flex>
        <Flex direction='column' justifyContent='space-around'>
          <h4>Album</h4>
          <h1>{selectedAlbum?.name}</h1>
          <h4>{selectedAlbum?.artists[0]?.name}</h4>
          <p>{selectedAlbum?.total_tracks} tracks</p>
          <p>{selectedAlbum?.label}</p>
          <p>Release Date: {selectedAlbum?.release_date}</p>
        </Flex>
      </Flex>
      <Flex direction='column' height='fit-content'>
        {selectedAlbumTracksArray}
      </Flex>
    </Flex>
  );
};

export default AlbumDetails;
