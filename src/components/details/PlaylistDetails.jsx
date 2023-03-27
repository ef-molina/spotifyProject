import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../../utils/APIController';
import { LibRow } from '../../styles/LibraryStyles';
import { TitleText, MutedText } from '../../styles/CardStyles';
import { Flex } from '../../styles/MainStyles';
import { controlDuration } from '../../utils/constants';

const LibraryRow = ({ track, index }) => {
  const handleClick = (e) => {
    // document.querySelector('.currentTrackImage').src =
    //   track?.album?.images[2]?.url;
    // document.querySelector('.currentTrackTitle').innerText = track?.name;
    // document.querySelector('.currentTrackArtist').innerText =
    //   track?.artists[0]?.name;
  };

  return (
    <LibRow
      onClick={handleClick}
      padding='1rem'
      gap='1rem'
      height='fit-content'
    >
      <Flex
        width='fit-contnet'
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
        width='fit-contnent'
        justifyContent='center'
        alignItems='center'
        // border='1px solid red'
      >
        {controlDuration(track.duration_ms)}
      </Flex>
    </LibRow>
  );
};

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

  const selectedPlaylistTracksArray = selectedPlaylist?.tracks?.items?.map(
    ({ track }, index) => (
      <LibraryRow key={track?.id} track={track} index={index} />
    )
  );

  while (!selectedPlaylistTracksArray) return <h2>loading...</h2>;

  return (
    <Flex direction='column' overflowY='scroll'>
      <Flex overflow='initial' height='40%'>
        <Flex justifyContent='center' alignItems='center' padding='2rem'>
          <img src={selectedPlaylist?.images[0]?.url} />
        </Flex>
        <Flex direction='column' justifyContent='space-around' height='100%'>
          <h4>Playlist</h4>
          <h1>{selectedPlaylist?.name}</h1>
          <p>{selectedPlaylist?.tracks?.total} tracks</p>
          <p>{selectedPlaylist?.description}</p>
        </Flex>
      </Flex>
      <Flex direction='column' height='fit-content'>
        {selectedPlaylistTracksArray}
      </Flex>
    </Flex>
  );
};

export default PlaylistDetails;

{
  /* <Flex direction='column' overflowY='auto'>
  <Flex height='fit-content'>
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
</Flex>; */
}
