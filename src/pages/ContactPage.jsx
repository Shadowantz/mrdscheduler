// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Icon } from 'semantic-ui-react';
import * as S from './ContactPage.style';
import * as AbStyle from './AboutMePage.style';

const ContactPage: React.FC = () => {
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.ContactPageWrapper isMobile={isMobile}>
      <Grid style={{ margin: 0, padding: 0 }}>
        <Grid.Row style={{ height: '100vh' }}>
          {!isMobile && (
            <Grid.Column verticalAlign="middle" textAlign="center" computer={10} mobile={0} />
          )}

          <Grid.Column
            verticalAlign={isMobile ? 'top' : 'middle'}
            textAlign="center"
            computer={6}
            mobile={16}
          >
            <S.ContractPageRowWrapp isMobile={isMobile}>
              <AbStyle.ContactPageRow isMobile={isMobile}>
                <Icon name="at" />
                <span>radu.miruta@cdep.ro</span>
              </AbStyle.ContactPageRow>
              <AbStyle.ContactPageRow isMobile={isMobile}>
                <Icon name="phone" />
                <span>0723999755</span>
              </AbStyle.ContactPageRow>
              <AbStyle.ContactPageRow isMobile={isMobile}>
                <Icon name="facebook f" />
                <a href="http://www.facebook.com/miruta.ro" rel="noreferrer" target="_blank">
                  www.facebook.com/miruta.ro
                </a>
              </AbStyle.ContactPageRow>
              <AbStyle.ContactPageRow isMobile={isMobile}>
                <Icon name="youtube" />
                <a
                  href="https://www.youtube.com/channel/UCOLyGSvak0PWC3YwdcRFFjQ"
                  rel="noreferrer"
                  target="_blank"
                >
                  YouTube
                </a>
              </AbStyle.ContactPageRow>
            </S.ContractPageRowWrapp>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </S.ContactPageWrapper>
  );
};

export default ContactPage;
