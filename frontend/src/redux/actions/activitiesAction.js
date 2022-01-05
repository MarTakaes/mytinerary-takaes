import axios from 'axios';

const activitiesActions = {
    getActivities: () => {
        return async (dispatch, getState) => {
            let response = await axios.get("https://my-tinerary-takaes.herokuapp.com/api/activities")
            dispatch({type: "GET_ACTIVITIES", payload: response.data.response})
        }}
}



export default activitiesActions;