import React, { useState } from "react";
import { styled } from "styled-components";
import { PowerButton } from "../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import uuid from "react-uuid";
import { addMistake } from "../redux/modules/ErrorsSlice";
import { useDispatch } from "react-redux";

const StInputForm = styled.form`
  padding: 20px;
`;

const StInputTitle = styled.h3``;

const StInput = styled.input`
  width: 100%;
  height: 30px;

  border: 1px solid #e9e9e9;
  border-radius: 5px;

  font-size: 10px;
`;

const StAddButton = styled(PowerButton)`
  height: 50px;
  width: 100%;
  margin-top: 100px;
  font-size: 15px;
  &: hover {
    opacity: 0.6;
  }
`;

function NewError() {
  const dispatch = useDispatch();
  const [mistake, setMistake] = useState({
    id: uuid(),
    title: "",
    name: "",
    error: "",
    solution: "",
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (mistake) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/errors`, mistake);
    dispatch(addMistake(mistake));
    navigate("/errors");
  };

  const MAX_LENGTH = {
    name: 10,
    title: 50,
    error: 200,
    solution: 200,
  };

  const isFormValid = () => {
    return (
      mistake.name.length > 0 &&
      mistake.title.length > 0 &&
      mistake.error.length > 0 &&
      mistake.solution.length > 0
    );
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <StInputForm
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid()) {
            onSubmitHandler(mistake);
          }
        }}
      >
        <StInputTitle>작성자</StInputTitle>
        <StInput
          placeholder="작성자의 이름을 입력해주세요.(10자 이내)"
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setMistake({
              ...mistake,
              name: value,
            });
          }}
          maxLength={MAX_LENGTH.name}
        />
        <StInputTitle>제목(오류명)</StInputTitle>
        <StInput
          placeholder="오류명을 입력해주세요.(50자 이내)"
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setMistake({
              ...mistake,
              title: value,
            });
          }}
          maxLength={MAX_LENGTH.title}
        />
        <StInputTitle>오류</StInputTitle>
        <StInput
          placeholder="오류가 생긴 배경과 오류의 원인, 내용을 입력해주세요.(200자 이내)"
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setMistake({
              ...mistake,
              error: value,
            });
          }}
          maxLength={MAX_LENGTH.error}
        />
        <StInputTitle>해결 방법</StInputTitle>
        <StInput
          placeholder="오류의 해결 방법을 입력해주세요.(200자 이내)"
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setMistake({
              ...mistake,
              solution: value,
            });
          }}
          maxLength={MAX_LENGTH.solution}
        />
        <StAddButton type="submit" disabled={!isFormValid()}>
          추가하기
        </StAddButton>
      </StInputForm>
    </div>
  );
}

export default NewError;
