import { combineReducers } from "redux";
import movieSeatReducer from "./movie-seat";

const rootReducer = combineReducers({
  // key: value
  movieSeatReducer,
});

export default rootReducer;
