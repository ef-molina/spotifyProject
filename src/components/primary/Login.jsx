import { useState, useEffect } from 'react';
import { Button, Flex } from '../../styles/MainStyles';
import { AUTH_URL, fetchToken } from '../../utils/APIController';
// import { AUTH_URL } from '../../utils/APIController';

const urlCode = new URLSearchParams(window.location.search).get('code');

const Login = () => {
  const [code, setCode] = useState(urlCode ? urlCode : null);
  console.log(code);

  useEffect(() => {
    if (code)
      fetchToken(code).then(() => {
        window.history.pushState(null, null, '/');
        window.location.reload();
      });
  }, [code]);

  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
    >
      <h1>Spotify Dash</h1>
      <Button href={AUTH_URL}>Login to Spotify</Button>
    </Flex>
  );
};

export default Login;
