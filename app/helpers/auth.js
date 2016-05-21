export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Philip Chan',
        avatar: 'http://res.cloudinary.com/naemcivic/image/upload/v1458676853/hsvwujidaif1yo0owuvb.jpg',
        uid: 'naemcivic',
      })
    }, 2000)
  })
}


export function checkIfAuthed (store) {
  // ignore Firebase
  return store.getState().isAuthed
}

export function logout () {
   console.log('Logged Out');
}
