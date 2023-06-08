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
      <Button auto shadow onPress={handler}>Add School Here</Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text className="modal-title" size={18}>
            Add school information here
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form className="form"
          onSubmit={submitHandler}>
            <label>School Name<input name="name" placeholder="School Name" required/></label>
            <label>School Type
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
            <label>School Description<textarea name="description" rows="2" required/></label>
            <label>Address<input name="address" placeholder="Address" required/></label>
            <label>City<input name="city" placeholder="City" required/></label>
            <label>State<input name="state" placeholder="State" required/></label>
            <label>Zip Code<input name="zipCode" placeholder="Zip Code" required/></label>
            <label>Review<textarea name="review" rows="2" required/></label>
            <Button auto type="submit">
            Save
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddSchoolForm;

{/* <Dropdown name="type">
              <Dropdown.Button>
                School Type
              </Dropdown.Button>
              <Dropdown.Menu>
                <Dropdown.Item key="public">public</Dropdown.Item>
                <Dropdown.Item key="private">private</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            // <Input
            // clearable
            // underlined
            // required
            // name="name"
            // labelPlaceholder="School Name"
            // />
            // <Input
            // clearable
            // underlined
            // required
            // name="address"
            // labelPlaceholder="Address"
            // />
            // <Input
            // clearable
            // underlined
            // required
            // name="city"
            // labelPlaceholder="City"
            // />
            // <Input
            // clearable
            // underlined
            // required
            // name="state"
            // labelPlaceholder="State"
            // />
            // <Input
            // clearable
            // underlined
            // required
            // name="zipCode"
            // labelPlaceholder="Zip Code"
            // />
            // <Textarea
            // underlined
            // name="description"
            // labelPlaceholder="School Description"
            // />
            // <Input
            // clearable
            // underlined
            // name="review"
            // labelPlaceholder="Review"
            // />