const TOGGLE_FOLLOWED_STATUS = "TOGGLE-FOLLOWED-STATUS";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOWED_STATUS: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId)
            return { ...user, followed: !user.followed };
          else return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: !state.isFetching };
    }
    default:
      return state;
  }
};

export const toggleFollowedStatusAC = (userId) => ({
  type: TOGGLE_FOLLOWED_STATUS,
  userId,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCountAC = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const toggleIsFetchingAC = () => ({
  type: TOGGLE_IS_FETCHING,
});

export default usersReducer;
