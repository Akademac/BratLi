// Thunk, getting data

export const getData = (params) => {
  return (dispatch) => {
    dispatch({
      type: "ALL_DATA_FETCHING"
    });
    setTimeout(() => {
      fetch('https://akademac.github.io/bratLiJson/bratLi.json')
      .then((response) => {
        return response.json();
      })
      .then(data => {
        dispatch({
          type: "ALL_DATA_FETCHED",
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: "ALL_DATA_FAILED",
          payload: err
        })
      })
    }, 2000)
  }
}

// Add to cart

export const addToCart = (payload) => {
  return {
    type: 'ADD_TO_CART', 
    payload: payload
  }
}

export const removeFromCart = (payload) => {
  return {
    type: 'REMOVE_FROM_CART', 
    payload: payload
  }
}

// Mini Nav visibility


export const showMiniNav = (payload) => {
  return {
    type: "SHOW_MINI_NAV", 
    payload
  }
}

export const hideMiniNav = (payload) => {
  return {
    type: "HIDE_MINI_NAV", 
    payload
  }
}