import { configureStore } from "@reduxjs/toolkit";
import { DataReducer, SelectDataReducer } from "./redux/reducers/DataReducer";

const store = configureStore({
  reducer: {
    DataReducer,
    SelectDataReducer,
  },
});

export default store;
