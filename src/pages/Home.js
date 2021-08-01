import React, { useEffect, useState } from "react";
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

const Container = styled.div`
  width: 90vw;
  margin: auto;
  padding: 20px;
`;

const AppTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 45px;
  background: lightblue;
`;

const FormContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  align-items: end;
  width: 70%;
`;

const PhotoButton = styled.button`
  padding: 20px;
  background: #d5a8ff;
  margin-bottom: 2rem;
  position: absolute;
  right: 100px;
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

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCarList());
  }, []);

  const handleChange = (value) => {
    SetCarMakeName(value);
    dispatch(getCarModels(value));
  };

  const handleModelChange = (value) => {
    setModelName(value);
  };

  const getPhoto = () => {
    dispatch(getDogPhoto());
    setShowPhoto(true);
  };

  const handleOk = () => {
    setShowPhoto(false);
  };

  const handleCancel = () => {
    setShowPhoto(false);
  };

  const handleFinish = () => {};
  return (
    <Container>
      <AppTitle>Car Search</AppTitle>
      <PhotoButton onClick={getPhoto}>Bored?</PhotoButton>
      <Form layout="vertical">
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
          <Form.Item>
            <Button
              label="Submit"
              disabled={!modelName}
              onFinish={handleFinish}
            />
          </Form.Item>
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
      <Content data={carModels} make={makeName} />
    </Container>
  );
};

export default Home;
