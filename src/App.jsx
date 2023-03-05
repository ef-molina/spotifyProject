import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dash, Navbar, PlaybackBar, Sidebar } from './components/primary';
import {
  Library,
  Albums,
  Artists,
  Playlists,
  SearchFeed,
} from './components/secondary';
import { AppContainer, Flex } from './styles/MainStyles'; // these are custom styled components

// when app loads, checks local storage for access token, if so then display dash, if not show login page
const accessToken = localStorage.getItem('access_token') || null;

function App() {
  // checks if the user has an access token to determine login status
  const [loggedIn, setLoggedIn] = useState(accessToken ? true : false);
  console.log(loggedIn);

  // browser router that will nest all of our routes
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Flex gap='0.5rem'>
          <Sidebar />
          <Flex overflowY='scroll' border='1px solid white'>
            <Routes>
              <Route path='/' element={<Dash />} />
              <Route path='/library' element={<Library />} />
              <Route path='/albums'>
                <Route index element={<Albums />} />
                {/* <Route path=':id' element={<AlbumDetails />} /> */}
              </Route>
              <Route path='/artists'>
                <Route index element={<Artists />} />
                {/* <Route path=':id' element={<ArtistDetails />} /> */}
              </Route>
              <Route path='/playlists'>
                <Route index element={<Playlists />} />
                {/* <Route path=':id' element={<PlaylistDetails />} /> */}
              </Route>
              <Route path='/search/:query' element={<SearchFeed />} />
            </Routes>
          </Flex>
        </Flex>
        <PlaybackBar />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
