import React from "react";
import { styled } from "styled-components";
import { PowerButton } from "../Components/UI/Button";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const StMainButton = styled(PowerButton)`
  height: 120px;
  margin-bottom: 20px;
  font-size: 25px;

  &: hover {
    font-weight: bold;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <HomeContainer>
        <h2>무엇을 할까요?</h2>

        <StMainButton
          onClick={() => {
            navigate("/error/add");
          }}
        >
          ERROR 기록하기
        </StMainButton>
        <StMainButton
          onClick={() => {
            navigate("/errors");
          }}
        >
          ERROR LIST
        </StMainButton>
      </HomeContainer>
    </div>
  );
}

export default Home;
