import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
        Authorization: "Client-ID kb6FHJPXD-_HDck4OZH8BF2y3qA2RseUWumTDlcxF_E",
      }
})