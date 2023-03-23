import React, { useEffect, useState } from 'react';
import { ScrollRow, TopAlbumsContainer } from '../../styles/DashStyles';
import { Flex } from '../../styles/MainStyles';
import { fetchFromApi } from '../../utils/APIController';
import { Link } from 'react-router-dom';
import { ThinCard, AlbumCard, TrackCard } from '../secondary/Cards';

const Dash = () => {
  const [topAlbums, setTopAlbums] = useState();
  const [recentlyPlayed, setRecentlyPlayed] = useState();
  const [newReleases, setNewReleases] = useState();
  const [recomendations, setRecommendations] = useState();

  console.log(recentlyPlayed);

  useEffect(() => {
    console.log('dash page load');
    let { albums, recents, releases, recommends } = {};

    const fetchData = async () => {
      albums = await fetchFromApi(`me/albums?limit=6`);
      recents = await fetchFromApi(`me/player/recently-played`);
      releases = await fetchFromApi(`browse/new-releases?country=us`).then(
        (res) => res.albums
      );
      recommends = await fetchFromApi(
        `recommendations?seed_genres=hip-hop`
      ).then((res) => res.tracks);
    };
    fetchData()
      .then(() => {
        setTopAlbums(albums);
        setRecentlyPlayed(recents);
        setNewReleases(releases);
        setRecommendations(recommends);
      })
      .catch((error) => {
        console.log(error);
        handleReject();
      });
  }, []);

  const topSixAlbums = topAlbums?.items.map(({ album }) => (
    <Link to={`/${album?.type}s/${album?.id}`} key={album.id}>
      <ThinCard album={album} />
    </Link>
  ));

  const recentlyPlayedAlbums = recentlyPlayed?.items.map(({ track }) => (
    <TrackCard key={track.id} track={track} />
  ));

  const newReleasedAlbums = newReleases?.items.map((album) => (
    <AlbumCard key={album.id} album={album} />
  ));

  const newRecommendations = recomendations?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ));
  console.log(newRecommendations);

  while (!recomendations) return <h2> loading...</h2>;

  return (
    <Flex direction='column' overflowY='auto' gap='.5rem'>
      <TopAlbumsContainer>{topSixAlbums}</TopAlbumsContainer>
      <h2 style={{ paddingLeft: '1rem' }}>Recently Played</h2>
      <ScrollRow>{recentlyPlayedAlbums}</ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>New Releases</h2>
      <ScrollRow>{newReleasedAlbums}</ScrollRow>
      <h2 style={{ paddingLeft: '1rem' }}>Recommended</h2>
      <ScrollRow>{newRecommendations}</ScrollRow>
    </Flex>
  );
};

export default Dash;
