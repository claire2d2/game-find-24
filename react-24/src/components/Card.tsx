import React from "react";

interface Props {
  imageUrl: string;
}
const Card: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="card" />
    </div>
  );
};

export default Card;
