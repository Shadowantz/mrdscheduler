// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Icon } from 'semantic-ui-react';

import * as S from './AboutMePage.style';
import mrImage from '../images/mr.jpg';

const AboutMePage: React.FC = () => (
  <S.AboutBeContainer>
    <S.PlayerCover>
      <Icon name="play" />
      <img src={mrImage} alt="an illustration with Radu Miruta" />
    </S.PlayerCover>
    <S.IframeWrap>
      <iframe
        title="about me youtube video"
        width="inherit"
        height="inherit"
        src="https://www.youtube.com/embed/G6y4BH4HOxg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </S.IframeWrap>
  </S.AboutBeContainer>
);

export default AboutMePage;
