import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import DeleteBtn from "../Components/Func/DeleteBtn";
import { PowerButton } from "../Components/UI/Button";
import useFetchMistakes from "../hooks/useFetchMistakes";
import axios from "axios";

const ListContainer = styled.div`
  border: 1px solid #e9e9e9;
  padding: 20px;
  padding-top: 5px;
`;

const ListHeader = styled.div`
  display: flex;
`;

const ListTitle = styled.h3`
  margin-left: 20px;
`;

const StInputButton = styled(PowerButton)`
  height: 30px;
  margin: 15px 10px 0 auto;
  font-size: 12px;

  &: hover {
    font-weight: bold;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const ErrorCard = styled.div`
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitle = styled.h4``;

const CardWriter = styled.p`
  font-size: 10px;
`;

function ErrorList() {
  const navigate = useNavigate();

  const [mistakes, setMistakes] = useFetchMistakes();

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/errors`
    );
    setMistakes(data);
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <ListHeader>
        <ListTitle>Category</ListTitle>
        <StInputButton
          onClick={() => {
            navigate("/error/add");
          }}
        >
          ERROR 기록하기
        </StInputButton>
      </ListHeader>
      <ListContainer>
        {mistakes.map((mistake) => {
          return (
            <ErrorCard key={mistake.id}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/error/detail/${mistake.id}`);
                }}
              >
                <CardTitle>{mistake.title}</CardTitle>
                <CardWriter>{mistake.name}</CardWriter>
              </div>
              <DeleteBtn id={mistake.id} fetchData={fetchData} />
            </ErrorCard>
          );
        })}
      </ListContainer>
    </div>
  );
}

export default ErrorList;
