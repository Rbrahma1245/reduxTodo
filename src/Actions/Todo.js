const mapStateToProps = (state) => {
  let { userList, editUser } = state.TodoReducer;
  // console.log(userList, "from action");
  return {
    userList: userList,
    editUser: editUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (userList) =>
      dispatch({ type: "ADD", payload: { ...userList, id: Date.now() } }),
    edit: (id) => dispatch({ type: "EDIT", payload: id }),
    update: (userData) => dispatch({ type: "UPDATE", payload: userData }),
    delete: (id) => dispatch({ type: "DELETE", payload: id }),
  };
};

export { mapStateToProps, mapDispatchToProps };
