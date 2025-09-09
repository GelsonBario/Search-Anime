import axios from 'axios';
import { AnimeModel } from '../components/CardView/Props';
import { API_URL } from '../constants/anime';

export const fetchGetAnimeData = async (id: number) => {
  try {
    const response = await axios.get<AnimeModel>(`${API_URL}/${id}`);
    const animeData = response.data;
    
    return animeData;
  } catch (error) {
    console.log("Erro ao buscar dados da API:", error);
    return null;
  }
};