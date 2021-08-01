import React from "react";

const ContentCard = ({ make, model }) => {
  return (
    <div>
      {make}
      {model.value}
    </div>
  );
};

export default ContentCard;

ContentCard.defaultProps = {
  make: "Honda",
  model: "Civic",
};
