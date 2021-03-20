// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useSelector } from 'react-redux';

import { Icon } from 'semantic-ui-react';
import * as S from './ContactPage.style';

const ContactPage: React.FC = () => {
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  return (
    <S.ContactPageWrapper>
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
    </S.ContactPageWrapper>
  );
};

export default ContactPage;
