import React from "react";
import { styled } from "styled-components";
import axios from "axios";
import { PowerButton } from "../UI/Button";

const StDeleteButton = styled(PowerButton)`
  background-image: url("https://img.icons8.com/?size=1x&id=102315&format=png");
  background-size: cover;
  height: 30px;
  width: 30px;
  margin: auto 0 auto 0;
  &: hover {
    opacity: 0.6;
  }
`;

function DeleteBtn({ id, fetchData }) {
  const deleteBtnClickHandler = async (mistakeId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/errors/${mistakeId}`
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StDeleteButton type="button" onClick={() => deleteBtnClickHandler(id)} />
  );
}

export default DeleteBtn;
