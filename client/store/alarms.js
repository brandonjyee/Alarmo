import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_ALARMS = 'GOT_ALARMS'

/**
 * INITIAL STATE
 */
const defaultStuff = {}

/**
 * ACTION CREATORS
 */
const gotAlarms = payload => ({type: GET_ALARMS, payload})

/**
 * THUNK CREATORS
 */
export const fetchAlarms = () => async dispatch => {
  try {
    const res = await axios.get('/api/alarms')
    dispatch(gotAlarms(res.data || defaultStuff))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultStuff, action) {
  switch (action.type) {
    case GOT_ALARMS:
      return action.payload
    default:
      return state
  }
}
