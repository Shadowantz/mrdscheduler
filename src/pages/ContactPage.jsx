// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Icon } from 'semantic-ui-react';

import * as S from './ContactPage.style';

const ContactPage: React.FC = () => (
  <S.ContactPageWrapper>
    <S.ContactPageRow>
      <Icon name="user" />
      <span>Radu Miruta</span>
    </S.ContactPageRow>
    <S.ContactPageRow>
      <Icon name="mail" />
      <span>radu.miruta@cdep.ro</span>
    </S.ContactPageRow>
    <S.ContactPageRow>
      <Icon name="phone" />
      <span>0723999755</span>
    </S.ContactPageRow>
    <S.ContactPageRow>
      <Icon name="facebook f" />
      <a href="http://www.facebook.com/miruta.ro" target="_blank">
        www.facebook.com/miruta.ro
      </a>
    </S.ContactPageRow>
    <S.ContactPageRow>
      <Icon name="youtube" />
      <a href="https://www.youtube.com/channel/UCOLyGSvak0PWC3YwdcRFFjQ" target="_blank">
        Youtube
      </a>
    </S.ContactPageRow>
  </S.ContactPageWrapper>
);

export default ContactPage;
