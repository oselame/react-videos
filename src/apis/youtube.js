import axios from 'axios';

const KEY = 'AIzaSyC3H4rHEiBPgKsmY4MR5bDQIuwSnWCh7vU';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
