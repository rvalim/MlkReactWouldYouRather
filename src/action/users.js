export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'

export function getUsers() {
    return {
        type: GET_USERS
    }
}

export function setUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}
