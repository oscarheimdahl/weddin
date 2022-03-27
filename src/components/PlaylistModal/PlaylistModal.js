import { waitForElm } from 'Resources/utils';
import { playlistHtml } from 'Resources/playlistHtml';
import './playlist-modal.scss';

function openPlaylist(e) {
  PlaylistModal.classList.toggle('show');
  document.body.style.overflow = 'hidden';
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hidePlaylistModal();
});

waitForElm('#open-playlist').then((playlist) => {
  playlist.addEventListener('click', openPlaylist);
});

const PlaylistModal = document.createElement('div');

PlaylistModal.id = 'playlist-modal';
PlaylistModal.innerHTML = playlistHtml;
PlaylistModal.addEventListener('click', (e) => {
  if (e.target.id === 'playlist-modal') hidePlaylistModal();
});

function hidePlaylistModal() {
  PlaylistModal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

export default PlaylistModal;
