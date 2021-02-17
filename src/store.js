import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import scheduleReducer from './reducers/scheduleReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  user: userReducer,
  schedules: scheduleReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store