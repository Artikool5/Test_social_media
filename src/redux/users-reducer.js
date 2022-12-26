const TOGGLE_FOLLOWED_STATUS = "TOGGLE-FOLLOWED-STATUS";
const SET_USERS = "SET-USERS";

let initState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   fullName: "Andrew",
    //   status: "Looking for a job right now",
    //   location: { country: "Russia", city: "Moscow" },
    //   avatarURL:
    //     "https://sualoo.com/uploads/testimonial_images/1533277299_main-user.png",
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   fullName: "Danil",
    //   status: "Love my wife",
    //   location: { country: "Ukraine", city: "Kiev" },
    //   avatarURL:
    //     "https://sualoo.com/uploads/testimonial_images/1533277299_main-user.png",
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   fullName: "Alex",
    //   status: "Searching for love",
    //   location: { country: "Russia", city: "Moscow" },
    //   avatarURL:
    //     "https://sualoo.com/uploads/testimonial_images/1533277299_main-user.png",
    // },
    // {
    //   id: 4,
    //   followed: true,
    //   fullName: "Anton",
    //   status: "Looking for a job right now",
    //   location: { country: "Russia", city: "Rostov" },
    //   avatarURL:
    //     "https://sualoo.com/uploads/testimonial_images/1533277299_main-user.png",
    // },
  ],
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

export default usersReducer;
