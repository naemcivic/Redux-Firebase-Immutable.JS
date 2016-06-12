import { ref } from 'config/constants'

export default function auth () {
  return ref.authWithOAuthPopup('facebook')
}


export function checkIfAuthed (store) {
  // ignore Firebase
  return store.getState().isAuthed
}

export function logout () {
  ref.unauth()
}

export function saveUser (user) {
  return ref.child(`users/${user.id}`)
  .set(user)
  .then(() => user)
}
