import React, { useRef } from "react";
import { styled } from "styled-components";
import { PowerButton } from "./Button";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HeadLayout = styled.header`
  background-color: beige;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeadTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;

const StHomeButton = styled(PowerButton)`
  background-image: url("https://cdn-icons-png.flaticon.com/128/2948/2948025.png");
  background-size: cover;
  border: none;
  height: 30px;
  width: 30px;
  margin-left: 20px;
  &: hover {
    opacity: 0.6;
  }
`;

const StShareButton = styled(PowerButton)`
  background-image: url("https://cdn-icons-png.flaticon.com/128/1358/1358023.png");
  background-size: cover;
  border: none;
  height: 30px;
  width: 30px;
  margin-right: 20px;
  &: hover {
    opacity: 0.6;
  }
`;

const TextArea = styled.textarea`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0;
  right: 0;
  opacity: 0;
`;

function Header() {
  const navigate = useNavigate();

  // url 복사
  const copyUrlRef = useRef(null);

  const copyUrl = (e) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사 기능이 지원되지 않는 브라우저입니다.");
    }

    copyUrlRef.current.select();
    document.execCommand("copy");

    alert("링크가 복사되었습니다.");
  };

  return (
    <>
      <HeadLayout>
        <StHomeButton
          onClick={() => {
            navigate("/");
          }}
        />
        <HeadTitle>Today Error Record</HeadTitle>
        <StShareButton onClick={copyUrl} />
        <TextArea
          readOnly
          ref={copyUrlRef}
          value={window.location.href}
        ></TextArea>
      </HeadLayout>
      <Outlet />
    </>
  );
}

export default Header;
