// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Grid, Icon } from 'semantic-ui-react';
import { addContactEmails } from '../components/EventsList.api';
import * as S from './ContactPage.style';
import { MESS_SUBJECTS } from '../constants/mainPageConstants';

const defaultFormState = { name: '', email: '', message: '' };

const ContactPage: React.FC = () => {
  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.mainPage.isMobile);
  const [formItems, setFormItems] = useState(defaultFormState);

  const handleSubmit = () => {
    addContactEmails({
      item: formItems,
      callback: () => {
        console.log(defaultFormState);
        setFormItems(defaultFormState);

        dispatch({
          type: 'setNotificationsModal',
          payload: MESS_SUBJECTS.emailSentSuccessfully,
        });
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (event, { name, value }) =>
    setFormItems((oldState) => ({ ...oldState, [name]: value }));

  return (
    <S.ContactPageWrapper isMobile={isMobile}>
      <Grid style={{ margin: 0, padding: 0 }}>
        <Grid.Row style={{ height: '100vh' }}>
          <Grid.Column width={16} verticalAlign="middle" textAlign="center">
            <S.ContentWrapper>
              <S.BlueZone>
                <S.TextSection>
                  <S.TextAndImage>
                    <Icon name="mail" centered />
                    <S.TextSectionText>radu.miduta@cdep.ro</S.TextSectionText>
                  </S.TextAndImage>

                  <S.TextAndImage>
                    <Icon name="mobile alternate" centered />
                    <S.TextSectionText>0723.999.755</S.TextSectionText>
                  </S.TextAndImage>
                </S.TextSection>
                <S.FormSection>
                  <S.TextSectionText>Trimite-mi un mesaj:</S.TextSectionText>
                  <Form onSubmit={handleSubmit}>
                    <Form.Input
                      fluid
                      value={formItems.name}
                      placeholder="Nume"
                      name="name"
                      onChange={handleChange}
                    />
                    <Form.Input
                      fluid
                      value={formItems.email}
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                    <Form.TextArea
                      value={formItems.message}
                      name="message"
                      fluid
                      placeholder="Mesaj"
                      onChange={handleChange}
                    />
                    <Form.Button fluid>Trimite</Form.Button>
                  </Form>
                </S.FormSection>
              </S.BlueZone>
            </S.ContentWrapper>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </S.ContactPageWrapper>
  );
};

export default ContactPage;
