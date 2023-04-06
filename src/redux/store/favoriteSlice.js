import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = {
        name: action.payload.favorite.name,
        company: action.payload.favorite.company,
        location: action.payload.favorite.locations[0].name,
        level: action.payload.favorite.levels[0].name,
      };
      state.push(newFavorite);
    },
    deleteFavorite: (state, action) => {
      return state.filter(favorite => favorite.name !== action.payload.name);
    },
  },
});

export const {addFavorite, deleteFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
