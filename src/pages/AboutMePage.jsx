// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';

import * as S from './AboutMePage.style';
import mrImage from '../images/mr.jpg';

const AboutMePage: React.FC = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.AboutMeContainer>
      {videoVisible ? (
        <S.IframeWrap>
          <iframe
            title="about me youtube video"
            width={isMobile ? '400px' : '1024px'}
            height={isMobile ? '300px' : '680px'}
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
      )}
    </S.AboutMeContainer>
  );
};

export default AboutMePage;
