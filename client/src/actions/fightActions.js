import {
  FIGHT_RESULT_CREATE_REQUEST,
  FIGHT_RESULT_CREATE_SUCCESS,
  FIGHT_RESULT_CREATE_FAIL,
  FIGHT_RESULT_LIST_REQUEST,
  FIGHT_RESULT_LIST_SUCCESS,
  FIGHT_RESULT_LIST_FAIL,
} from '../constants/fightConstants.js';
import axios from 'axios';

export const createFight = fight => async (dispatch, getState) => {
  try {
    dispatch({ type: FIGHT_RESULT_CREATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/fight/addfight`, fight, config);

    dispatch({
      type: FIGHT_RESULT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIGHT_RESULT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFights = () => async dispatch => {
  try {
    dispatch({ type: FIGHT_RESULT_LIST_REQUEST });
    const { data } = await axios.get(`/api/fights`);

    dispatch({
      type: FIGHT_RESULT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIGHT_RESULT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
