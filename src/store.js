import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import scheduleReducer from './reducers/scheduleReducer'

const store = createStore(
  scheduleReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store