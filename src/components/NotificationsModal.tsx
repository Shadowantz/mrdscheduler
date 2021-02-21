import React from 'react';
import { Modal } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

function NotificationsModal() {
  const dispatch = useDispatch();
  const notificationsModal = useSelector((state) => state.mainPage.notificationsModal);
  const { open, header, content } = notificationsModal;

  return (
    <Modal
      onClose={() => dispatch({ type: 'resetNotificationsModal' })}
      open={open}
      header={header}
      content={content}
      actions={[{ key: 'done', content: 'Inchide', positive: true }]}
    />
  );
}

export default NotificationsModal;
