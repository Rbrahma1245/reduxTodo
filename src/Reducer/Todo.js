const initialState = {
  userList: [],
  editUser: undefined,
};

const TodoReducer = (state = initialState, action) => {
  let newUserList, updateValue, newUpdatedList;
  switch (action.type) {
    case "ADD":
      console.log("click", state, action);

      return {
        ...state,
        userList: [
          ...state.userList,
          {
            id: action.payload.id,
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password,
          },
        ],
      };

    case "DELETE":
      newUserList = state.userList.filter((e) => e.id !== action.payload);
      return {
        ...state,
        userList: newUserList,
      };
    case "EDIT":
      updateValue = state.userList.find((e) => e.id == action.payload);
      console.log(updateValue);
      return {
        ...state,
        editUser: updateValue,
      };

    case "UPDATE":
      console.log(action.payload);
      console.log(state);
      newUpdatedList = state.userList.map((e) => {
        if (e.id == action.payload.id) {
          (e.name = action.payload.name),
            (e.email = action.payload.email),
            (e.password = action.payload.password);
        }
        return e;
      });

      return {
        ...state,
        userList: newUpdatedList,
        editUser: undefined,
      };
    default:
      return state;
  }
};

export default TodoReducer;
