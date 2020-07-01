const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
	users: [],
	usersOnPage: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
}

function usersReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed }
					}
					return user
				}),
			}
		case SET_USERS:
			return { ...state, users: [...action.users] }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		default:
			return state
	}
}

export const toggleFollow = (userId) => ({
	type: TOGGLE_FOLLOW,
	userId: userId,
})
export const setUsers = (users) => ({
	type: SET_USERS,
	users: users,
})
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage: currentPage,
})
export const setTotalUsersCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount: totalUsersCount,
})
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching: isFetching,
})

export default usersReducer
