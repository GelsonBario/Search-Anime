import { useEffect, useState } from "react";
import { AnimeModel } from "./Props";
import { handleNextItem, handlePreviuosItem, loadAnimeData } from "./actions";
import { View, Text, Button, Image } from "react-native";
import ByButton from "../BuyButton/BuyButton";
import { styles } from './CardViewStyle'
import Divider from "../Divider/Divider";
import Logo from '../../../assets/logo.png'


export default function AnimeView() {
  const [animeData, setAnimeData] = useState<AnimeModel | null>(null);

  useEffect(() => {
    (async() => {
      await loadAnimeData(1, setAnimeData);
    }) ();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderAnimeDetails = () => (
    <View style={{alignItems: "center"}}>
      <Text style={styles.animeBrand}>Animes</Text>
      <Text style={styles.animeName}>{animeData?.title}</Text>
    </View>
  );

  const renderAnimeImage = () => (
    <Image style={styles.image} source={{uri: animeData?.imageUrl}} />
  );

  const renderAnimeSinopse = () => (
    <Text style={styles.animeSinopse}>{animeData?.sinopse}</Text>
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabelConatiner}>
      <Button title="<" color={"#01a6b3"} onPress={()=> handlePreviuosItem(animeData, setAnimeData)} />
        <Text style={styles.priceLabel}>{animeData?.episodes}</Text>
      <Button title=">" color={"#01a6b3"} onPress={()=> handleNextItem(animeData, setAnimeData)} />  
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderAnimeDetails()}
      
      {renderAnimeImage()}

      <Divider />
      <ByButton />
      {renderPriceControls()}
      
      <Divider />
      {renderAnimeSinopse()}
    </View>
  );
}