// This is where to find all icons and documentation...
// https://mui.com/material-ui/material-icons/?query=album

import PersonIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import GroupsIcon from '@mui/icons-material/Groups';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LyricsIcon from '@mui/icons-material/Lyrics';

export const sidebarCategories = [
  { name: 'Dash', id: '/', icon: <HomeIcon fontSize='inherit' /> },
  {
    name: 'Library',
    id: 'library',
    icon: <LibraryMusicIcon fontSize='inherit' />,
  },
  { name: 'Albums', id: 'albums', icon: <AlbumIcon fontSize='inherit' /> },
  { name: 'Artists', id: 'artists', icon: <GroupsIcon fontSize='inherit' /> },
  {
    name: 'Playlists',
    id: 'playlists',
    icon: <QueueMusicIcon fontSize='inherit' />,
  },
  { name: 'User', id: 'user', icon: <PersonIcon fontSize='inherit' /> },
  { name: 'Logout', id: 'logout', icon: <LogoutIcon fontSize='inherit' /> },
];

export const searchIcon = <SearchIcon />;
export const personIcon = <PersonIcon />;

export const playbackIcons = {
  play: <PlayCircleIcon fontSize='inherit' />,
  pause: <PauseCircleIcon fontSize='inherit' />,
  skip: <SkipNextIcon fontSize='inherit' />,
  previous: <SkipPreviousIcon fontSize='inherit' />,
  shuffleOff: <ShuffleIcon fontSize='inherit' />,
  shuffleOn: <ShuffleOnIcon fontSize='inherit' />,
  repeat: <RepeatIcon fontSize='inherit' />,
  repeatOneOn: <RepeatOneOnIcon fontSize='inherit' />,
  repeatOn: <RepeatOnIcon fontSize='inherit' />,
  volumeMute: <VolumeMuteIcon fontSize='inherit' />,
  volumeUp: <VolumeUpIcon fontSize='inherit' />,
  lyrics: <LyricsIcon fontSize='inherit' />,
};

export const favoriteIcon = {
  off: <FavoriteBorderIcon fontSize='inherit' />,
  on: <FavoriteIcon fontSize='inherit' />,
};

export function controlDuration(miliseconds) {
  const min = Math.floor(miliseconds / 1000 / 60);
  const sec = Math.floor((miliseconds / 1000) % 60);
  return min + ':' + (sec < 10 ? '0' + sec : sec);
}
