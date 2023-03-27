import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Dash,
  Navbar,
  PlaybackBar,
  Sidebar,
  Login,
} from './components/primary';
import {
  Library,
  Albums,
  Artists,
  Playlists,
  UserProfile,
  SearchFeed,
} from './components/secondary';
import {
  AlbumDetails,
  ArtistDetails,
  PlaylistDetails,
} from './components/details';
import { AppContainer, Flex } from './styles/MainStyles'; // these are custom styled components

// when app loads, checks local storage for access token, if so then display dash, if not show login page
const accessToken = localStorage?.getItem('access_token');
// const accessToken = localStorage.getItem('access_token') || null;

function App() {
  // checks if the user has an access token to determine login status
  const [loggedIn, setLoggedIn] = useState(accessToken ? true : false);
  console.log(loggedIn);

  //if the first api call is rejected for a bad token, this will reset the app
  const handleReject = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  // browser router that will nest all of our routes
  return (
    <BrowserRouter>
      {loggedIn ? (
        <AppContainer>
          <Navbar handleReject={handleReject} />
          <Flex gap='0.5rem'>
            <Sidebar />
            <Flex overflowY='scroll' border='1px solid white'>
              <Routes>
                <Route path='/' element={<Dash />} />
                <Route path='/library' element={<Library />} />
                <Route path='/albums'>
                  <Route index element={<Albums />} />
                  <Route path=':id' element={<AlbumDetails />} />
                </Route>
                <Route path='/artists'>
                  <Route index element={<Artists />} />
                  <Route path=':id' element={<ArtistDetails />} />
                </Route>
                <Route path='/playlists'>
                  <Route index element={<Playlists />} />
                  <Route path=':id' element={<PlaylistDetails />} />
                </Route>
                <Route path='/user' element={<UserProfile />} />
                <Route path='/search/:query' element={<SearchFeed />} />
              </Routes>
            </Flex>
          </Flex>
          <PlaybackBar />
        </AppContainer>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;
