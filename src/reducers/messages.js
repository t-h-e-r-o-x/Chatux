import { getMessages } from "../static-data";
import {SEND_MESSAGE} from "../constants/action-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
  switch(action.type){
    case SEND_MESSAGE :
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;  //will return an array of all the keys of the user’s messages->pops the last one -> adds one to get the new available key

      return{
        ...state, //using spread operator
        [userId] : {
          ...allUserMsgs,
          [number] : {
            number,
            text: message,
            is_user_msg: true,
          }
        }
      };

    default:
      return state;
  }
}
