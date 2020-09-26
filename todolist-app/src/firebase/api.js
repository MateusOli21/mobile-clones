import { firebase, firestore, firebaseAuth } from "./config";

export default {
  signIn: async () => {
    let user;

    await firebaseAuth
      .then((result) => {
        user = result.user.uid;
      })
      .catch((error) => alert(error));

    return user;
  },

  getLists: async (userId) => {
    let lists = [];

    await firestore
      .collection("users")
      .doc(userId)
      .collection("lists")
      .onSnapshot((result) => {
        result.forEach((list) => {
          lists.push({ id: list.id, ...list.data() });
        });
      });

    return lists;
  },
};
