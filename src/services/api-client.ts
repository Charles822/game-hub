import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '335425f21e1c4fd1abf01a34845ac8d6'
	}
})