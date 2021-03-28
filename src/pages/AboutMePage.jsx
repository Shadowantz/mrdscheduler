// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Icon } from 'semantic-ui-react';

import * as S from './AboutMePage.style';
import mrImage from '../images/mr.jpg';

const AboutMePage: React.FC = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.AboutMeContainer>
      <Grid>
        <Grid.Row style={{ height: '100vh' }}>
          <Grid.Column verticalAlign="middle" textAlign="center" computer={8} mobile={16}>
            <S.ContactPageRow isMobile={isMobile}>
              <Icon name="at" />
              <span>radu.miruta@cdep.ro</span>
            </S.ContactPageRow>
            <S.ContactPageRow isMobile={isMobile}>
              <Icon name="phone" />
              <span>0723999755</span>
            </S.ContactPageRow>
            <S.ContactPageRow isMobile={isMobile}>
              <Icon name="facebook f" />
              <a href="http://www.facebook.com/miruta.ro" rel="noreferrer" target="_blank">
                www.facebook.com/miruta.ro
              </a>
            </S.ContactPageRow>
            <S.ContactPageRow isMobile={isMobile}>
              <Icon name="youtube" />
              <a
                href="https://www.youtube.com/channel/UCOLyGSvak0PWC3YwdcRFFjQ"
                rel="noreferrer"
                target="_blank"
              >
                YouTube
              </a>
            </S.ContactPageRow>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" textAlign="center" computer={8} mobile={16}>
            {videoVisible ? (
              <S.IframeWrap>
                <iframe
                  title="about me youtube video"
                  width={isMobile ? '400px' : 'auto'}
                  height={isMobile ? '300px' : 'auto'}
                  src="https://www.youtube.com/embed/G6y4BH4HOxg?rel=0&autoplay=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </S.IframeWrap>
            ) : (
              <S.PlayerCover isMobile={isMobile} onClick={() => setVideoVisible(true)}>
                <img src={mrImage} alt="an illustration with Radu Miruta" />
                <Icon name="play" size={isMobile ? 'big' : 'massive'} />
              </S.PlayerCover>
            )}{' '}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </S.AboutMeContainer>
  );
};

export default AboutMePage;
