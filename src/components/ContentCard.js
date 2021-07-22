import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const ContentCard = ({ imageUrl, data }) => {
  return (
    <Card style={{ width: 300 }} cover={<img alt="example" src={imageUrl} />}>
      {data}
    </Card>
  );
};

export default ContentCard;

ContentCard.defaultProps = {
  data: "Hello World",
  imageUrl: "https://picsum.photos/id/237/200/300",
};
