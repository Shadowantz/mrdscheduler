// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './HomePage.style';

const HomePage: React.FC = () => {
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.HomePageWrapper>
      <S.Title isMobile={isMobile}>E timpul pentru nivelul următor:</S.Title>
      <S.Title isMobile={isMobile}>Construcția Binelui</S.Title>
      <S.Separator />
      <S.Subtitle isMobile={isMobile}>
        Am construit rețele electronice prin care circulă informația în întreaga lume
      </S.Subtitle>
      <S.Subtitle isMobile={isMobile}>
        și acum construiesc o rețea de încredere între gorjeni.
      </S.Subtitle>
    </S.HomePageWrapper>
  );
};

export default HomePage;
