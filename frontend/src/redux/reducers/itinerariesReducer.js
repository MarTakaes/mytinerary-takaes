const initialState = {
    state:[],
    itineraries: [],
    comments: [],
}

const itinerariesReducer = (state = initialState, action) => {

    function getUniqueValues(array) {
        let result = [];
        const map = new Map();
        for (const item of array) {
          if (!map.has(item._id)) {
            map.set(item._id, true);
            result.push(item);
          }
        }
        return result;
      }
    switch (action.type) {  
        case 'GET_ITINERARY':
            return{
                ...state,
                itineraries: action.payload
            }
        case 'GET_LIKES':
            return{
                ...state,
                itineraries: action.payload
            } 
        case 'GET_COMMENTS':
            return{
                ...state,
                comments: action.payload
            } 
        case 'GET_ALL_COMMENTS':
            return{
                ...state,
                comments: action.payload
            } 
        case 'POST_COMMENTS':
            let list = state.comments.concat(action.payload);

            return {
              ...state,
              comments: getUniqueValues(list),
            }
        case 'EDIT_COMMENTS':
            return{
                ...state,
                comments: action.payload
            } 
        case 'DELETE_COMMENTS':
            return{
                ...state,
                comments: action.payload
            } 
            default: return state
        
    }
}

export default itinerariesReducer