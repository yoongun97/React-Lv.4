import React, { useState } from "react";
// import Comment from "../Components/UI/Comment";
import { styled } from "styled-components";
import { PowerButton } from "../Components/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useFetchMistakes from "../hooks/useFetchMistakes";

const DetailLayout = styled.div`
  padding: 20px;
`;

const DetailHeader = styled.header`
  height: 100px;
  /* background-color: red; */

  border-bottom: 1px solid #e9e9e9;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const DetailId = styled.span`
  font-size: 15px;
  color: gray;

  margin-bottom: -10px;
`;

const DetailTitle = styled.h1`
  margin-bottom: 7px;
`;

const DetailName = styled.span`
  font-size: 12px;
  color: gray;

  margin-bottom: 10px;
`;

const DetailBody = styled.div``;

const DetailSubTitle = styled.h4`
  margin-bottom: -5px;
  margin-left: 5px;
  font-size: 20px;
  color: ${(props) => props.color};
`;

const DetailContent = styled.p`
  font-size: 15px;
  height: 100px;
  border: 1px solid #e9e9e9;
`;

const EditContent = styled.textarea`
  font-size: 15px;
  height: 100px;
  width: 100%;
  border: 1px solid #e9e9e9;
  margin-top: 10px;
`;

const StPrevButton = styled(PowerButton)`
  background-image: url("https://cdn-icons-png.flaticon.com/128/3415/3415823.png");
  background-size: cover;
  height: 40px;
  width: 40px;
  margin: auto 0 auto 0;
  &: hover {
    opacity: 0.6;
  }
`;

const StEditButton = styled(PowerButton)`
  height: 50px;
  width: 100%;
  margin-top: 50px;
  font-size: 15px;
  &: hover {
    opacity: 0.6;
  }
`;

const StSaveButton = styled(PowerButton)`
  height: 50px;
  width: 100%;
  margin-top: 50px;
  font-size: 15px;
  &: hover {
    opacity: 0.6;
  }
`;

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [editedMistake, setEditedMistake] = useState({
    error: "",
    solution: "",
  });

  const [mistakes, setMistakes] = useFetchMistakes();

  const filteredMistake = mistakes.filter((mistake) => mistake.id === id);

  const editBtnClickHandler = () => {
    setEditing(true);
    setEditedMistake({
      error: filteredMistake[0].error,
      solution: filteredMistake[0].solution,
    });
  };

  const saveBtnClickHandler = async (mistakeId, edit) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/errors/${mistakeId}`,
        edit
      );
      setEditing(false);

      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/errors`
      );
      setMistakes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      {filteredMistake.map((mistake) => {
        return (
          <DetailLayout key={mistake.id}>
            <DetailHeader>
              <HeaderContent>
                <DetailId>id: {mistake.id}</DetailId>
                <DetailTitle>{mistake.title}</DetailTitle>
                <DetailName>{mistake.name}</DetailName>
              </HeaderContent>
              <StPrevButton
                onClick={() => {
                  navigate("/errors");
                }}
              />
            </DetailHeader>
            <DetailBody>
              <DetailSubTitle color="red">오류</DetailSubTitle>
              {editing ? (
                <EditContent
                  value={editedMistake.error}
                  onChange={(e) =>
                    setEditedMistake({
                      ...editedMistake,
                      error: e.target.value,
                    })
                  }
                />
              ) : (
                <DetailContent>{mistake.error}</DetailContent>
              )}
              <DetailSubTitle>해결방법</DetailSubTitle>
              {editing ? (
                <EditContent
                  value={editedMistake.solution}
                  onChange={(e) =>
                    setEditedMistake({
                      ...editedMistake,
                      solution: e.target.value,
                    })
                  }
                />
              ) : (
                <DetailContent>{mistake.solution}</DetailContent>
              )}
            </DetailBody>
            {editing ? (
              <StSaveButton
                type="button"
                onClick={() => saveBtnClickHandler(mistake.id, editedMistake)}
              >
                저장하기
              </StSaveButton>
            ) : (
              <StEditButton onClick={editBtnClickHandler}>
                수정하기
              </StEditButton>
            )}
          </DetailLayout>
        );
      })}
      {/* <Comment /> */}
    </div>
  );
}

export default Detail;
