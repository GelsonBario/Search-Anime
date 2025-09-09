import React from "react";
import { AnimeModel } from "./Props";
import { fetchGetAnimeData } from "../../api/getAnime";

export const loadAnimeData = async(
  id: number,
  setAnimeData: React.Dispatch<React.SetStateAction<AnimeModel | null >>
) => {
  const response = await fetchGetAnimeData(id);
  try{ 
    if(response){
      setAnimeData(response);
    }
  }catch(error){
    console.log("Erro ao buscar da api", error);
    setAnimeData(null);
  }
};

export const handlePreviuosItem = async(
  animeData: AnimeModel | null, 
  setAnimeData: React.Dispatch<React.SetStateAction<AnimeModel | null >>
) => {
  let response = null
  try{
    if(animeData && animeData?.id > 1) {
      response = await fetchGetAnimeData(animeData.id - 1)
    }
    if(response){
      setAnimeData(response)
    }
  }catch(error){
    console.log("Erro ao chamar a api", error)
    setAnimeData(null)
  }
};

export const handleNextItem = async(
  animeData: AnimeModel | null, 
  setAnimeData: React.Dispatch<React.SetStateAction<AnimeModel | null >>
) => {
  let response = null
  try{
    if(animeData && animeData?.id < 15) {
      response = await fetchGetAnimeData(animeData.id + 1)
    }
    if(response){
      setAnimeData(response)
    }
  }catch(error){
    console.log("Erro ao chamar a api", error)
    setAnimeData(null)
  }
};