// action value
const ADD = "errorList/ADD";

// action creator
export const addMistake = (payload) => {
  return {
    type: ADD,
    payload: payload,
  };
};

// 초기 상태값(state)
const initialState = [
  {
    id: 0,
    title: "",
    name: "",
    error: "",
    solution: "",
  },
];

// 리듀서 : state에 변화를 일으키는 함수
const errorList = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default errorList;
