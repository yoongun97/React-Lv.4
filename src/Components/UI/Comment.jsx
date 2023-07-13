import React from "react";
import Button from "./Button";
import { styled } from "styled-components";

const CommentLayout = styled.div`
  padding: 20px;
  border-top: 1px solid #e9e9e9;
`;

const CoInputContainer = styled.div``;

const CommentInput = styled.input`
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  height: 25px;
  margin: 10px 0 10px 0;
`;

const CommentBody = styled.div`
  border-bottom: 1px solid #e9e9e9;
  height: 50px;

  display: flex;
  justify-content: space-between;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentName = styled.span`
  font-size: 10px;
`;

const CommentContent = styled.span``;

const BtnContainer = styled.div``;

export default function Comment() {
  return (
    <CommentLayout>
      <Button />
      <CoInputContainer>
        <CommentInput />
        <CommentInput />
        <Button />
      </CoInputContainer>
      <CommentBody>
        <CommentBox>
          <CommentName>이름</CommentName>
          <CommentContent>내용</CommentContent>
        </CommentBox>
        <BtnContainer>
          <Button />
          <Button />
        </BtnContainer>
      </CommentBody>
    </CommentLayout>
  );
}
