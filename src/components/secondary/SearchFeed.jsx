import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScrollRow } from '../../styles/DashStyles';
import { Flex } from '../../styles/MainStyles';
import { fetchFromApi } from '../../utils/APIController';
import { ArtistCard, AlbumCard, TrackCard, PlaylistCard } from './Cards';

const SearchFeed = () => {
  const [searchResults, setSearchResults] = useState();

  if (searchResults) console.log(searchResults);

  const { query } = useParams();

  useEffect(() => {
    console.log('Search feed loaded.');

    fetchFromApi(
      `search?q=${query}&type=album,track,artist,playlist,show,episode,audiobook`
    )
      .then((res) => {
        if (res.error) throw res.error;

        if (!res.error) setSearchResults(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchedArtist = searchResults?.artists?.items?.map((artist) => (
    <ArtistCard key={artist.id} artist={artist} />
  ));

  const searchAlbums = searchResults?.albums?.items?.map((album) => (
    <AlbumCard key={album.id} album={album} />
  ));

  const searchTracks = searchResults?.tracks?.items?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ));

  const searchPlaylist = searchResults?.playlists?.items?.map((playlist) => (
    <PlaylistCard key={playlist.id} playlist={playlist} />
  ));

  while (!searchResults) return <h2>loading...</h2>;
  return (
    <Flex direction='column' overflowY='auto' gap='1rem'>
      <h2 style={{ paddingLeft: '1rem' }}>Top Tracks:</h2>
      <ScrollRow>{searchTracks}</ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>Artist:</h2>
      <ScrollRow>{searchedArtist}</ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>Albums:</h2>
      <ScrollRow>{searchAlbums}</ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>Playlist:</h2>
      <ScrollRow>{searchPlaylist}</ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>Shows:</h2>
      <ScrollRow></ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>Episodes:</h2>
      <ScrollRow></ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>Audiobooks:</h2>
      <ScrollRow></ScrollRow>
    </Flex>
  );
};

export default SearchFeed;
