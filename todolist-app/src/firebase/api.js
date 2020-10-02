import { firebase, firestore, firebaseAuth } from "./config";

export default {
  signIn: async () => {
    let userId;

    await firebaseAuth
      .then((result) => {
        userId = result.user.uid;
      })
      .catch((error) => alert(error));

    return userId;
  },

  getLists: async (userId) => {
    let tempLists = [];

    await firestore
      .collection("users")
      .doc("Z6GFk93BxuZYiCa0Ez59DJ1U8TC2")
      .collection("lists")
      .onSnapshot((result) => {
        result.forEach((list) => {
          lists.push({ id: list.id, ...list.data() });
        });
      });

    // setLists(lists);

    return tempLists;
  },
};
