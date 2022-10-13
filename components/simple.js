import React, { useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import butt from "./../assets/IMG_0538.png";
import oral from "./../assets/IMG_0541.png";
import vulva from "./../assets/IMG_0543.png";
import penis from "./../assets/IMG_0545.png";

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
  background-color: white;
  width: 100%;
  max-width: 260px;
  height: 300px;
  shadow-color: black;
  shadow-opacity: 0.02;
  shadow-radius: 20px;
  border-radius: 20px;
  resize-mode: cover;
`;

const CardImage = styled.Image`
  width: 60%;
  height: 60%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;

const CardTitle = styled.Text`
  text-align: center;
  bottom: 0;
  margin: 10px;
  color: black;
`;

const ExText = styled.Text`
  margin-top: 20px;
  padding: 5px;
`;

const InfoText = styled.Text`
  height: 28px;
  justify-content: center;
  display: flex;
  z-index: -100;
`;

const db = [
  {
    name: "Genderplay",
    img: butt,
  },
  {
    name: "Bathing together",
    img: vulva,
  },
  {
    name: "Slow sex",
    img: oral,
  },
  {
    name: "Massaging inner thighs ",
    img: penis,
  },
  {
    name: "Homemade porn",
    img: oral,
  },
  {
    name: "Kink 7",
    img: butt,
  },
  {
    name: "Kink 8",
    img: vulva,
  },
  {
    name: "Kink 9",
    img: oral,
  },
  {
    name: "Kink 10",
    img: butt,
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
            preventSwipe={["up", "down"]}
            swipeRequirementType={"position"}
            swipeThreshold={80}
          >
            <Card>
              <CardTitle>{character.name}</CardTitle>

              <CardImage source={character.img}></CardImage>
              <ExText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque...
              </ExText>
            </Card>
          </TinderCard>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Simple;
