import axios from 'axios';

const KEY  = 'AIzaSyA0_A-YfyiHQe1FIdC2b_GQh6t-SZ30gzk';

export const baseParams = {
    part: "snippet",
    maxResults: 7,
    key: KEY
  };

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });



