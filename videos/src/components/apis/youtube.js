import axios from 'axios';

const KEY = 'AIzaSyBOpYCMEM0ZnhQNy2060XFTyRYtxTB6MAI';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 5,
		key: KEY
	}
})