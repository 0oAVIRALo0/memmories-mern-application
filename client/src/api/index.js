import axios from 'axios';

const url = 'http://localhost:5005/posts';

export const fetchPosts = () => axios.get(url);