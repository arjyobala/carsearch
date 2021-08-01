import React from "react";
import { Card, Avatar } from "antd";
import styled from "styled-components";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
`;

const Content = ({ data, make }) => {
  return (
    <div>
      <CardContainer>
        {data
          ? data.map((item, index) => (
              <Card
                key={item.id}
                title={make}
                headStyle={{ background: "#6addc7" }}
              >
                {item.value}
              </Card>
            ))
          : null}
      </CardContainer>
    </div>
  );
};

export default Content;

Content.defaultProps = {
  // data: "Hello World",
  // imageUrl: "https://picsum.photos/id/237/200/300",
};
