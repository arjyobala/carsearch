import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Content from "../components/Content";
import Select from "../components/Select/Select";
import styled from "styled-components";
import {
  getCarList,
  getUsers,
  getCarModels,
  getDogPhoto,
} from "../state/actions";
import UserCard from "../components/UserCard";
import { Form, Modal } from "antd";
import Button from "../components/Button/Button";
import Navbar from "../components/NavBar/Navbar";

const Container = styled.div`
  width: 90vw;
  margin: auto;
  padding: 20px;
`;

const FormContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  align-items: end;
  width: 70%;
`;

const PhotoButton = styled.button`
  padding: 20px 40px;
  background: #9184d8;
  border: 2px solid black;
  margin-bottom: 2rem;
  position: absolute;
  border-radius: 15px;
  right: 100px;
  color: #fff;
  font-size: 16px;
`;

const Home = (props) => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.carList);
  const carModels = useSelector((state) => state.cars.carModels);
  const users = useSelector((state) => state.users.usersList);
  const dogPhoto = useSelector((state) => state.animals.dogPhoto);
  const [makeName, SetCarMakeName] = useState(null);
  const [modelName, setModelName] = useState(null);
  const [showPhoto, setShowPhoto] = useState(false);

  //Implement useCallback
  const getAllCars = useCallback(() => {
    dispatch(getCarList());
  });

  //Initial call to get and car list and user list
  useEffect(() => {
    dispatch(getUsers());
    getAllCars();
    // dispatch(getCarList());
  }, []);

  //Change handler for select dropdown options
  const handleChange = (value) => {
    SetCarMakeName(value);
    dispatch(getCarModels(value));
  };

  const handleModelChange = (value) => {
    setModelName(value);
  };

  //Dispatch photo getter and set modal visibility state param
  const getPhoto = () => {
    dispatch(getDogPhoto());
    setShowPhoto(true);
  };

  //Handler to open new photo display
  const handleOk = () => {
    setShowPhoto(false);
  };

  //Handler to cancel photo display modal
  const handleCancel = () => {
    setShowPhoto(false);
  };

  //Complete with action to dispatch selection
  const handleFinish = () => {};
  return (
    <Container>
      <PhotoButton data-testid="photo-button" onClick={getPhoto}>
        Click me
      </PhotoButton>
      <Form layout="vertical" data-testid="required-form">
        <FormContainer>
          <Form.Item label="Enter Car Make" name="make">
            <Select
              options={carList}
              onChange={handleChange}
              placeholder="Select a Car make"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
          </Form.Item>
          {/* <Form.Item label="Enter Car Model" name="make">
            <Select
              allowClear
              options={carModels}
              onChange={handleModelChange}
              placeholder="Select a Car model"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
          </Form.Item> */}
          {/* <Form.Item>
            <Button
              label="Submit"
              disabled={!modelName}
              onFinish={handleFinish}
            />
          </Form.Item> */}
        </FormContainer>
      </Form>

      <Modal
        title="Woof!"
        visible={showPhoto}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img style={{ maxWidth: "100%" }} src={dogPhoto} alt="" />
      </Modal>
      <Content data={carModels} make={makeName} data-testid="data-content" />
    </Container>
  );
};

export default Home;
