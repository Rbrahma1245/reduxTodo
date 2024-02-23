const mapStateToProps = (state) => {
  let { count, payloadVal } = state.CounterReducer;
  return {
    count: count,
    payloadVal: payloadVal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    add: () => dispatch({ type: "ADD", payload: 50 }),
  };
};

export { mapStateToProps, mapDispatchToProps };
