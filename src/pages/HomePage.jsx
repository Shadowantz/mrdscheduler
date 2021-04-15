// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './HomePage.style';
import { Grid } from 'semantic-ui-react';

const HomePage: React.FC = () => {
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.HomePageWrapper isMobile={isMobile}>
      <Grid columns={2} style={{ height: '100vh', width: '100vw' }}>
        <Grid.Row>
          <div />
        </Grid.Row>
        <Grid.Row style={{ paddingTop: '37rem' }}>
          <Grid.Column width={6}>
            <div />
          </Grid.Column>
          <Grid.Column width={10}>
            <S.TextBlack>E timpul</S.TextBlack>
            <S.TextBold>pentru nivelul următor:</S.TextBold>
            <S.TextBlackBlue>Construcția Binelui</S.TextBlackBlue>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </S.HomePageWrapper>
  );
};

export default HomePage;
