import React, { useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { Text } from "react-native";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Header = styled.Text`
  color: #000;
  font-size: 30px;
  margin-bottom: 30px;
`;

const CardContainer = styled.View`
  width: 90%;
  max-width: 260px;
  height: 300px;
`;

const Card = styled.View`
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 260px;
  height: 300px;
  shadow-color: black;
  shadow-opacity: 0.02;
  shadow-radius: 20px;
  border-radius: 20px;
  resize-mode: cover;
`;

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const CardTitle = styled.Text`
  text-align: center;
  bottom: 0;
  margin: 10px;
  color: black;
`;

const InfoText = styled.Text`
  height: 28px;
  justify-content: center;
  display: flex;
  z-index: -100;
`;

const db = [
  {
    name: "Kink 1",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 2",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 3",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 4",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 5",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 7",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 8",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 9",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Kink 10",
    img: "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
];

function Simple() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <Container>
      <Header>Shy or Try</Header>
      <CardContainer>
        {characters.map((character) => (
          <TinderCard
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <Card>
              <CardImage
                source={{
                  uri: "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg",
                }}
              >
                <CardTitle>{character.name}</CardTitle>
              </CardImage>
            </Card>
          </TinderCard>
        ))}
      </CardContainer>
      {lastDirection ? (
        <InfoText>You swiped {lastDirection}</InfoText>
      ) : (
        <InfoText />
      )}
    </Container>
  );
}

export default Simple;
