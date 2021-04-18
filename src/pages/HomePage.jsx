// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import * as S from './HomePage.style';
import leftLogo from '../images/s1_left_logo.png';
import leftLogoMobile from '../images/s1_left_logo_mobile.png';
import rightLogo from '../images/s1_map.png';

const HomePage: React.FC = () => {
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.HomePageWrapper isMobile={isMobile}>
      <Grid stretched style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
        <Grid.Row style={{ margin: 0, padding: 0 }}>
          <Grid.Column
            style={{ margin: 0, padding: isMobile ? '5rem 0 0 0' : 0 }}
            width={isMobile ? 16 : 8}
          >
            <S.LeftPicture isMobile={isMobile}>
              <img src={isMobile ? leftLogoMobile : leftLogo} alt="party sign" />
            </S.LeftPicture>
            <S.LeftPictureText isMobile={isMobile}>
              <S.TextBlack isMobile={isMobile}>E timpul</S.TextBlack>
              <S.TextBold isMobile={isMobile}>pentru nivelul următor:</S.TextBold>
              <S.TextBlackBlue isMobile={isMobile}>Construcția Binelui</S.TextBlackBlue>
            </S.LeftPictureText>
          </Grid.Column>
          <Grid.Column style={{ margin: 0, padding: 0 }} width={isMobile ? 16 : 8}>
            <S.RightPicture isMobile={isMobile}>
              <img src={rightLogo} alt="party sign" />
            </S.RightPicture>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </S.HomePageWrapper>
  );
};

export default HomePage;
