import { generatePlaylist } from './components/generatePlaylist';
import { inputFields } from './components/inputFields';
import './scss/main.scss';

inputFields('.search-btn').addEventListener('click', () => {
    generatePlaylist();
})


