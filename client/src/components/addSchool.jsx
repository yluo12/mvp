import React from 'react';
import axios from 'axios';
import { Modal, Button, Text, Input, Textarea, Dropdown } from '@nextui-org/react';

function AddSchoolForm ({fetchSchools}) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    try {
      const res = await axios({
          url: 'http://nominatim.openstreetmap.org/search',
          method: 'GET',
          params: {'format': 'json', 'q': formJson.address}
      });
      const updatedData = {...formJson, coords: [Number(res.data[0].lat), Number(res.data[0].lon)]};
      try {
        const res = await axios({
          url: '/schools',
          method: 'POST',
          data: updatedData
        });
        console.log('school saved to db');
        fetchSchools();
      } catch (err) {
        console.log('Failed to save school information');
      }
    } catch (err) {
      console.log('Failed to get coordinate information');
    };
    setVisible(false);
  };

  return (
    <div>
      {/* <Button auto shadow onPress={handler}>Add School Here</Button> */}
      <button className="btn btn-add" onClick={handler}>Add School Here</button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="modal-container-add"
      >
        <Modal.Header>
          <Text className="modal-title" size={18}>
            Add school information here
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form className="form"
          onSubmit={submitHandler}>
            <label className="input-name">School Name:<input name="name" required/></label>
            <label>Opennings
              <select name="tags">
                <option value="opennings Now">Opennings Now</option>
                <option value="wait List">Wait List</option>
              </select>
            </label>
            <label>School Type
              <select name="type" >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </label>
            <label>Rating
              <select name="rating" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <label className="input-description">Description:<textarea name="description" rows="2" required/></label>
            <label className="input-address">Address:<input name="address" required/></label>
            <label className="input-city">City:<input name="city"  required/></label>
            <label className="input-state">State:<input name="state" required/></label>
            <label className="input-zip">Zip Code:<input name="zipCode" required/></label>
            <label className="input-review">Review:<textarea name="review" rows="2" required/></label>
            <button className="btn btn-addSchool" type="submit">Save</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddSchoolForm;