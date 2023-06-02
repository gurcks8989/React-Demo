import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// signle reducer
// const store = configureStore({ reducer: counterSlice.reducer });
// multiple reducers
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const countActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// import { legacy_createStore } from "redux";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { ...state, counter: state.counter + 1 };
//   }

//   if (action.type === "increase") {
//     return { ...state, counter: state.counter + action.amount };
//   }

//   if (action.type === "decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }

//   if (action.type === "toggle") {
//     return { ...state, showCounter: !state.showCounter };
//   }

//   return state;
// };

// const store = legacy_createStore(counterReducer);

// export default store;
