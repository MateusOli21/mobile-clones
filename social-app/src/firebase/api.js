import { firebase, firestore, firebaseAuth } from "./config";

const FirebaseApi = {
  getCurrentUser: () => {
    return firebaseAuth.currentUser;
  },

  createUser: async (user) => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      const uid = FirebaseApi.getCurrentUser().uid;
      let profilePhotoUrl = "default";

      await firestore.collection("users").doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
      });

      if (user.profilePhoto) {
        profilePhotoUrl = await FirebaseApi.uploadProfilePhoto(
          user.profilePhoto
        );
      }

      delete user.password;

      return { ...user, profilePhotoUrl, uid };
    } catch (err) {
      console.log(`Error in create user: ${err}`);
    }
  },

  uploadProfilePhoto: async (uri) => {
    const uid = FirebaseApi.getCurrentUser().uid;

    try {
      const photo = await FirebaseApi.getBlob(uri);

      const imageRef = firebase.storage().ref("profilePhotos").child(uid);
      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await firestore.collection("users").doc(uid).update({
        profilePhotoUrl: url,
      });

      return url;
    } catch (err) {
      console.log(`Error on upload photo: ${err}`);
    }
  },

  getBlob: async (uri) => {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onerror = () => {
        reject(new TypeError("Erro ao fazer requisição."));
      };

      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  },
};

export default FirebaseApi;
