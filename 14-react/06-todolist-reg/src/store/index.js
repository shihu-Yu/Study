import { createStore ,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
const middlewares = [];

middlewares.push(thunk)

// 判断是否在开发环境之中，如果是就插入redux-logger中间件 来处理日志
if (process.env.NODE_ENV === `development`) {
  const logger = createLogger({
  })
  middlewares.push(logger);
}
let store = createStore(reducer,applyMiddleware(...middlewares))

export default store