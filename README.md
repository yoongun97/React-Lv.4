# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 프로젝트 소개

배운 내용을 활용하여 나만의 React App 을 만들었습니다.
json-server를 활용하여 오류 내용을 정리하고 조회할 수 있는 페이지입니다.

## Stacks

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Development

<img  src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img  src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img  src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

---

## 화면 구성

|                                                      메인 페이지                                                       |                                                      추가 페이지                                                       |
| :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![image](https://github.com/yoongun97/React-Lv.4/assets/108172921/8ddd2c03-adb4-4c6a-aeca-be7f0beb5325) | ![image](https://github.com/yoongun97/React-Lv.4/assets/108172921/67548d93-fe21-4a88-a9e6-17ca6269f5ec) |
|                                                       에러리스트                                                       |                                                          상세페이지                                                          |
|![image](https://github.com/yoongun97/React-Lv.4/assets/108172921/36c94e9c-4ba7-4a67-b80b-78a4ed142f41) | ![image](https://github.com/yoongun97/React-Lv.4/assets/108172921/58355d6b-7691-48df-a171-c5a579d31988) |

---

## 주요 기능

### 리스트 페이지

#### 에러 리스트 불러오기

- 에러 리스트를 보여줍니다.
- 에러이름, 작성자를 볼 수 있습니다.

#### 에러 리스트 삭제하기

- 버튼이 있는 에러리스트를 삭제할 수 있습니다.


### 상세 페이지

#### 에러 상세정보 불러오기

- 에러에 대한 상세설명을 볼 수 있습니다.
- 에러명, 에러에 대한 설명, 해결 방법을 볼 수 있습니다.

#### 에러 상세정보 수정하기

- 에러에 대한 설명, 해결방법을 수정할 수 있습니다.


### 추가 페이지

#### 에러 추가하기

- 새로운 에러에 대한 글을 추가할 수 있습니다.
- 작성자, 에러명, 에러에 대한 설명, 해결방법을 작성할 수 있습니다.

---

## API 명세서

기능 | URL | Method | request | response
-----|------|------|-------|------
글 전체 조회 | /errors | GET | - | {"errors": [{"id": "1","title": "react","name": "yoon","error": "type error","solution": "reload"},{"id": "5b84141e-ec3-e16d-f2fc-5b95b9b4b9c3","title": "spring","name": "yoon","error": "type error","solution": "reload"},]}
글 단일 조회 | /error/detail/:id | GET | - | {"errors": [{"id": "1","title": "react","name": "yoon","error": "type error","solution": "reload"},]}
글 추가하기 | /error/add | POST | mistake.name, mistake.title, mistake.error, mistake.solution | -
글 삭제하기 | /errors | DELETE | mistake.id | -
글 수정하기 | /error/detail/:id | PATCH | mistake.id, mistake.error, mistake.solution | {"errors": [{"id": "1","title": "react","name": "yoon","error": type error1","solution": "reload1"},]}
