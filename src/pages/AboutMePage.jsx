// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Icon } from 'semantic-ui-react';

import * as S from './AboutMePage.style';
import mrImage2 from '../images/imgYellow.png';

const AboutMePage: React.FC = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.AboutMeContainer isMobile={isMobile}>
      <Grid style={{ margin: 0, padding: 0 }}>
        <Grid.Row stretched style={{ height: '100vh' }}>
          <Grid.Column
            stretched
            verticalAlign={isMobile ? 'bottom' : 'middle'}
            textAlign="center"
            computer={8}
            mobile={16}
          >
            <S.SpecialHeader isMobile={isMobile}>Cine este RADU MIRUȚĂ?</S.SpecialHeader>
            <S.ContainerWrapper isMobile={isMobile} fluid textAlign="left" text>
              <p>
                Inginer software rețele de telecomunicații, 36 de ani, căsătorit, tatăl a doi copii
                de 4 si 0.7 ani. Absolvent al Colegiului Naţional “Tudor Vladimirescu” din Târgu
                Jiu.
              </p>
              <p>
                Absolvent al Facultății de Electronică, Telecomunicaţii şi Tehnologia Informaţiei
                din cadrul Universităţii Politehnice Bucureşti.
              </p>
              <p>
                Doctorat in Telecomunicaţii obţinut în anul 2013 în cadrul aceleiaşi universităţi
                (în parteneriat internațional) rezultatele tezei fiind utilizate în medii de test
                ale industriei telecom din Franţa.
              </p>
              <p>
                Autor/co-autor a 12 articole ştiinţifice, publicate de către cele mai prestigioase
                reviste de specialitate din lume (inclusiv IEEE Communication Magazine),
                participarea la conferinţe internaţionale, la două dintre ele (CTRQ 2012-Chamonix,
                Franța și ICNS 2013-Lisabona, Portugalia) obţinând premiul pentru cea mai bună
                lucrare.
              </p>
              <p>
                A fost cercetător ştiinţific în cadrul proiectului internaţional de cercetare FP7
                Alicante, rezultatele tezei de doctorat fiind utilizate în medii de test din Franța
                și China.
              </p>
              <p>
                A facut parte din echipa de proiectare și dezvoltare a reţelei IP a Cosmote Romania,
                a proiectat şi administrat parte din reţeaua de telecomunicaţii a Orange Elveţia pe
                vremea când lucra la Ericsson Romania, a fost consultant în rețele IP pentru
                operatorii de telefonie mobilă din zona de Nord a Europei când a lucrat la Ericsson
                Belgia, ajungand deputat din pozitia de inginer consultant de servicii avansate în
                reţele IP pentru compania americana Cisco, prestând servicii de consultanță
                operatorilor de Internet și telefonie mobilă din zona Europa-Asia și predă
                studenților masteranzi de la Facultatea de Electronica si Telecomunicatii,
                Politehnica București.
              </p>
            </S.ContainerWrapper>
          </Grid.Column>
          <Grid.Column
            stretched
            verticalAlign={isMobile ? 'bottom' : 'middle'}
            textAlign="center"
            computer={8}
            mobile={16}
          >
            {videoVisible ? (
              <S.IframeWrap>
                <iframe
                  title="about me youtube video"
                  width={isMobile ? '340px' : '800'}
                  height={isMobile ? '200px' : '600'}
                  src="https://www.youtube.com/embed/G6y4BH4HOxg?rel=0&autoplay=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </S.IframeWrap>
            ) : (
              <S.PlayerCover isMobile={isMobile} onClick={() => setVideoVisible(true)}>
                {isMobile && <img src={mrImage2} alt="an illustration with Radu Miruta" />}
                <Icon name="play" size={isMobile ? 'big' : 'massive'} />
              </S.PlayerCover>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </S.AboutMeContainer>
  );
};

export default AboutMePage;
