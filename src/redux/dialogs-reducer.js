const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
      {id: 1, name: 'Michael'},
      {id: 2, name: 'Helen'},
      {id: 3, name: 'Henry'},
      {id: 4, name: 'Terry'},
      {id: 5, name: 'Angela'},
      {id: 6, name: 'Tom'},
    ],
    messages: [
      {id: 1, message: 'Hey'},
      {id: 2, message: 'Hey hey!'},
      {id: 3, message: 'How are you?'},
      {id: 4, message: 'Excellent!'},
      {id: 5, message: 'Wonderful!'},
      {id: 6, message: 'Have a nice day!'},
      {id: 7, message: 'See you )))'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return  {
        ...state,
        newMessageBody: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return  {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 8, message: body}]  // здесь добавление (способ вместо push)
      }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;