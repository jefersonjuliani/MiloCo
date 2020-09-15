const INITIAL_STATE = [];

const Data = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_DATA":
      return payload;

    default:
      return state;
  }
};

export default Data;
