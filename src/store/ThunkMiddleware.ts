/**
 * @author Himanshu Yadav
 * @email himanshumki@outlook.com
 * @create date 2022-06-23 18:53:18
 * @modify date 2023-08-05 20:07:21
 * @desc thunk middleware function
 */

import { Action } from "../types/commonTypes";

type ThunkFunctionArg = {
  getState: Function;
  dispatch: Function
}


function thunkMiddleware({getState, dispatch}: ThunkFunctionArg) {
  return (next: Function) => (action: Action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else {
      return next(action);
    }
  };
}
export default thunkMiddleware;
