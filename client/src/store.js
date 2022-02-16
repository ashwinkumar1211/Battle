import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  addFightReducer,
  listPlayerReducer,
  updatePlayerfightReducer,
} from './reducers/playerReducer';
import { fightResultCreateReducer } from './reducers/fightReducer';
import { addTeamReducer, listTopTeamReducer } from './reducers/teamReducer';
const reducer = combineReducers({
  addFight: addFightReducer,
  listPlayers: listPlayerReducer,
  updatePlayer: updatePlayerfightReducer,
  fightResult: fightResultCreateReducer,
  addTeam: addTeamReducer,
  topTeams: listTopTeamReducer,
});

const initialState = { addFight: {}, listPlayers: {} };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
