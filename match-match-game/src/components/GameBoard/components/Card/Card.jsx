import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Shirt1 from '../../../../assets/Shirt1.jpg';
import Shirt2 from '../../../../assets/Shirt2.jpg';
import Shirt3 from '../../../../assets/Shirt3.jpg';

export function Card({
  handleClick, id, flipped, solved, type, disabled,
}) {
  const shirts = [Shirt1, Shirt2, Shirt3];
  const currentShirt = useSelector((state) => state.game.cardType);

  return (
    <Container
      className={`${flipped ? 'flipped' : ''}`}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <CardContainer className="back ">
        <Image
          alt=""
          src={shirts.filter((image, index) => (index === currentShirt ? image : null))}
        />
      </CardContainer>
      <CardContainer className="front">
        <Image
          className="front"
          alt=""
          src={flipped || solved ? type : null}
        />
      </CardContainer>

    </Container>
  );
}

const Container = styled.div`
    height: 140px;
    width: 110px;
    margin: 5px;
    position: relative;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    perspective: 1000px;
    .flipped {
        transform: rotateY(180deg);
    };
    
`;

const CardContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    .back {
        transform: rotateY(180deg);
    };
    .front {
        transform: rotateY(0deg);
    };
   
`;

const Image = styled.img`
    left: 0px;
    right: 0px;
    height: 100%;
    width: 100%;
    margin: 0;
    position: absolute;
    backface-visibility: hidden;

    // .back {
    //     transform: rotateY(180deg);
       
    // };
    // .front {
    //     z-index: 2;
    //     transform: rotateY(0deg);
    // };
`;
