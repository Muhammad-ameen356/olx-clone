import firebase from '../../config/firebase'

const facebook_login = (history) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;

                let create_user = {
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    profile: user.photoURL,
                    phone_number: user.phoneNumber,

                }
                firebase.database().ref('/').child(`users${user.uid}`).set(create_user)
                    .then(() => {
                        dispatch({ type: "SETUSER", payload: create_user })
                        alert("user login successfully")
                        history.push('/chat')
                    })

            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)

            });

    }
}


const get_users = () => {
    return (dispatch) => {
        firebase.database().ref('/').child('users').on('child_added', (data) => {
            console.log("firebase data", data.val())
            dispatch({ type: "SETFIREBASEUSERS", payload: data.val() })

        })
    }
}



// const google_login = () => {
//     return (dispatch) => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider)
//             .then(function(result) {
//                 var token = result.credential.accessToken;
//                 var user = result.user;

//             }).catch(function(error) {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorMessage)
//             });

//     }
// }


export {
    facebook_login,
    get_users,
}