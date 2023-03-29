import { Flex } from '../../styles/MainStyles';
import { favoriteIcon, controlDuration } from '../../utils/constants';
import { LibraryIcon, LibRow } from '../../styles/LibraryStyles';
import { useState, useEffect } from 'react';
import { TitleText, MutedText } from '../../styles/CardStyles';
import { fetchFromApi } from '../../utils/APIController';

const LibraryRow = ({ track, index }) => {
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
        width='fit-content'
        justifyContent='center'
        alignItems='center'
        padding='0rem .2rem'
      >
        {index + 1}.
      </Flex>
      <Flex direction='column' gap='.5rem'>
        <TitleText>{track?.name}</TitleText>
        <MutedText>{track?.artists[0]?.name}</MutedText>
      </Flex>
      <Flex
        width='fit-content'
        justifyContent='center'
        alignItems='center'
        padding='0rem .2rem'
      >
        {controlDuration(track.duration_ms)}
      </Flex>
    </LibRow>
  );
};

const Library = () => {
  const [libraryTracks, setLibraryTracks] = useState();

  if (libraryTracks) console.log(libraryTracks);

  useEffect(() => {
    console.log('Library page load.');
    fetchFromApi('me/tracks?limit=50')
      .then((res) => {
        if (res.error) throw res.error;

        if (!res.error) setLibraryTracks(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const libraryArray = libraryTracks?.items?.map(({ track }, index) => (
    <LibraryRow key={track.id} track={track} index={index} />
  ));

  while (!libraryArray) return <h2> loading...</h2>;

  return (
    <Flex direction='column' overflowY='auto'>
      <Flex height='100%'>
        <Flex
          justifyContent='center'
          alignItems='center'
          padding='2rem'
          minWidth='60%'
        >
          <LibraryIcon>{favoriteIcon.on}</LibraryIcon>
        </Flex>
        <Flex
          direction='column'
          justifyContent='space-between'
          padding='3rem 1rem'
          height='fit-content'
        >
          <h4>Playlist</h4>
          <h1 style={{ fontSize: '50px' }}>Liked Songs</h1>
          <p>{libraryTracks?.total} tracks</p>
        </Flex>
      </Flex>
      <Flex direction='column' padding='2rem'>
        {libraryArray}
      </Flex>
    </Flex>
  );
};

export default Library;
