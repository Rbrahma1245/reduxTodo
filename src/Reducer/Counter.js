const initialState = {
    count: 0,
    payloadVal: 0,
  };
  
  const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "ADD":
        return { ...state, payloadVal: state.payloadVal + action.payload };
      default:
        return { ...state, count: 0 };
    }
  };
  
  export default CounterReducer;
  