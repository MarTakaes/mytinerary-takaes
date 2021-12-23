import axios from 'axios';

const activitiesActions = {
    getActivities: () => {
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/activities")
            console.log(response)
            dispatch({type: "GET_ACTIVITIES", payload: response.data.response})
        }}
}



export default activitiesActions;