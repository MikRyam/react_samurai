import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 12}
      ],
      newPostText: 'Hello Everybody!'
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;
