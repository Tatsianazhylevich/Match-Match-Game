import React, { useState, useCallback} from 'react';
import styled from 'styled-components';


export function Card({ frontImg, backImg }) {
    const {rotateCard, setRotateCard} = useState(0);

    const onClickHandler = useCallback(() => {
        setRotateCard(180);
    }, [setRotateCard]);

    return (
        <CardContainer rotateCard={rotateCard}>
            <FrontCard background={frontImg} onClick={onClickHandler}></FrontCard>
            <BackCard background={backImg}></BackCard>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  height: 140px;
  width: 110px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: rotateY(${(props) => props.rotateCard}deg);

  &:not(:last-child){
    margin-right: 15px;
  }
`;

const FrontCard = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
//   background
`;

const BackCard = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
`;