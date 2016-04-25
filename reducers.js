// Users
const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  }
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authId: ''
}

function users (state = initialState, action) {
  switch(action.type) {

      // an old school way of creating a new Object
      // and not change state
      // case AUTH_USER:
      // return Object.assign({}, state, {
      //   isAuthed: true,
      //   authedId: action.uid,
      // })

      // ES2015 stage 2 feature, mix in state and return
      // return new object. This feature is called "Object spread"
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_FAILURE :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS :
      return action.user === null
        ? {
          ...state,
          error: '',
          isFetching: false,
        }
        : {
          ...state,
          error: '',
          isFetching: false,
          [action.uid]: user(state[action.uid], action)
        }
    default :
      return state
  }
}
