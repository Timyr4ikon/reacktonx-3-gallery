import axios from 'axios';

export default (searchQuery,page) => {
   return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=15599000-288ca625732bcf6a027b1d7ae&image_type=photo&orientation=horizontal&per_page=12`)
}