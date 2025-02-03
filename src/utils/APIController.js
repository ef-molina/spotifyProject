import React from 'react';

const SCOPES = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify',
];

const redirectURI = 'https://spotify-project-pied.vercel.app/';
// const redirectURI = 'http://localhost:5173/';

const token = localStorage.getItem('access_token');

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectURI}&scope=${SCOPES.join('%20')}`;

export const fetchToken = async (code) => {
  const body = `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(redirectURI)}&client_id=${import.meta.env.VITE_REACT_APP_CLIENT_ID}&client_secret=${
    import.meta.env.VITE_REACT_APP_CLIENT_SECRET
  }`;

  try {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(import.meta.env.VITE_REACT_APP_CLIENT_ID + ':' + import.meta.env.VITE_REACT_APP_CLIENT_SECRET),
      },
      body: body,
    });

    const data = await result.json();

    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('expires_in', data.expires_in);
    // window.history.pushState({}, null, '/');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFromApi = async (url) => {
  try {
    const result = await fetch(`https://api.spotify.com/v1/${url}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await result.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log('error ', error.message);
  }
};
