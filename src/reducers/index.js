export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'GET_POST_BY_ID':
      return {
        ...state,
        post: action.payload
      }
    case 'UPDATE_POST':
      return {
        ...state,
        success: action.payload
      }
    case 'CREATE_POST':
      return {
        ...state,
        success: action.payload
      }
    case 'DELETE_POST':
      return {
        ...state,
        success: action.payload
      }
    case 'CLEAR_POST':
      return {
        ...state,
        post: ''
      }
    case 'CREATE_COMMENT':
      return {
        ...state,
        comment: action.payload
      }
  }
}
