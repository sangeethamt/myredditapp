
import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../Features/PostList/PostSlice';
import searchReducer from '../Features/Search/SearchSlice';
import categoryReducer from '../Features/Category/CategorySlice';

export default configureStore({
  reducer: {
    searchParam: searchReducer,
    posts: postReducer,
    categories: categoryReducer
  }
})
