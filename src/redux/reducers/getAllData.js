let initialState = {
  data: [],
  fetching: true,
}

const gettingAllDataR = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_DATA_FETCHING":
      return { ...state, data: [], fetching: true }
      break;

    case "ALL_DATA_FETCHED":
      return { ...state, data: [...payload[0].men, ...payload[1].women, ...payload[2].kids, ...payload[3].pets], fetching: false }
      break;
    case "ALL_DATA_FAILED":
      return { ...state, data: 'Failed to fetch!', fetching: true }
    default:
      return state;
      break;
  }
}

export default gettingAllDataR;