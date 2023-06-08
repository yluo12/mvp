import React from 'react';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { Modal, Text } from '@nextui-org/react';
import ReviewList from './ReviewList.jsx';

function ReviewModal({school, fetchSchools}) {
  const [visible, setVisible] = React.useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  return (
    <li>
      <ChatBubbleBottomCenterTextIcon className="icon icon-review" />
      <a className="btn" onClick={handler}>Reviews</a>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text className="modal-title" size={18}>{school.name} Reviews</Text>
        </Modal.Header>
        <ReviewList school={school} fetchSchools={fetchSchools} />
      </Modal>
    </li>
  );
}

export default ReviewModal;
