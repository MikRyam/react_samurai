const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      }
    case SET_USERS: {
      // return {...state, users: [...state.users, ...action.users]}  // добавляем в конец новых юзеров
      return {...state, users: action.users}  // перезатераем список добавляя новых юзеров
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default usersReducer;

// {
//   id: 1,
//   photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1aD5HYqoKYyvq-J-8-iC6BI8xKGFWHRRwQ&usqp=CAU',
//   followed: false,
//   fullName: 'Mikhail',
//   status: 'I am a boss',
//   location: {city: 'Moscow', country: 'Russia'}
// },
// {
//   id: 2,
//   photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGBIWxehq1Xu0FoBe0zMdnBuK8_3NV7KdUQ&usqp=CAU',
//   followed: true,
//   fullName: 'Sasha',
//   status: 'I am a boss too',
//   location: {city: 'Minsk', country: 'Belarus'}
// },
// {
//   id: 3,
//   photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVYEr4pqq4atJmOruuuwbhc4iMUNQixzqXA&usqp=CAU',
//   followed: false,
//   fullName: 'Olena',
//   status: 'I am a boss too',
//   location: {city: 'Kiev', country: 'Ukrain'}
// },
// {
//   id: 4,
//   photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgxEn2Sipbbv2TpXOlPt4roPTIqEcAJYdQQ&usqp=CAU',
//   followed: true,
//   fullName: 'Mad Mikkelsen',
//   status: 'I am a boss too',
//   location: {city: 'Stockholm', country: 'Sweden'}
// },