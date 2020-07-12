import React, { useState, useRef } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Carousel from "react-native-snap-carousel";
import { Image } from "react-native";
import {
  Container,
  AreaInput,
  Input,
  Text,
  AreaSlide,
  Slide,
  ImageCard,
  Card,
  Title,
  InfoArea,
  InfoDesc,
  InfoTitle
} from "./styles";

export default function App() {
  const [lista, setLista] = useState([
    {
      title: "O Justiceiro",
      text:
        "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg"
    },
    {
      title: "Bad Boys for life",
      text:
        "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg"
    },
    {
      title: "Viúva Negra",
      text:
        "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg"
    },
    {
      title: "Top Gun: MAVERICK",
      text:
        "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg"
    },
    {
      title: "BloodShot",
      text:
        "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img: "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg"
    },
    {
      title: "Free Guy",
      text:
        "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg"
    }
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [index, setIndex] = useState(0);
  const CarouselRef = useRef(null);
  const _renderItem = ({ item, index }) => {
    return (
      <Card>
        <ImageCard source={{ uri: item.img }} />
        <Title>{item.title}</Title>
      </Card>
    );
  };
  return (
    <Container source={{ uri: background }} blurRadius={8}>
      <AreaInput>
        <Input placeholder="Pesquisar Algo" />
        <Icon name="search" color="#000" size={25} />
      </AreaInput>
      <Text>Filmes</Text>

      <AreaSlide>
        <Carousel
          style={Slide}
          data={lista}
          ref={CarouselRef}
          renderItem={_renderItem}
          itemWidth={200}
          sliderWidth={300}
          inactiveSlideOpacity={0.5}
          onSnapToItem={index => {
            setBackground(lista[index].img);
            setIndex(index);
          }}
        />
      </AreaSlide>

      <InfoArea>
        <InfoTitle>{lista[index].title}</InfoTitle>
        <InfoDesc>{lista[index].text}</InfoDesc>
      </InfoArea>
    </Container>
  );
}
