export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {favorite} = action.payload
      const newList = [...state.favoriteList, favorite];
      return {...state, favoriteList: newList};

    default:
      return state;
  }
}
