import axios from 'axios';
import md5 from 'md5';

const standardOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://gateway.marvel.com/v1/public',
};

const api = axios.create(standardOptions);

api.interceptors.request.use((config) => {
  const privateKey = '0429d9504bcaeca2d89cb63a6018a3d142dcf676';
  const publicKey = 'b6df8a15e3dff3efeedf2f8d3c01a9c4';
  const timeStamp = Number(new Date());
  const hash = md5(`${timeStamp}${privateKey}${publicKey}`);

  const configuration = {
    ...config,
    url: `${config.url}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`,
  };

  return configuration;
});

export default api;
