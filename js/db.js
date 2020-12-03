// const db = firebase.firestore();

db.collection("recipes").onSnapshot(function (snapshot) {
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(function (change) {
    console.log(change, change.doc.data());
    switch (change.type) {
      case "added":
        // add doc data to UI
        // renderRecipe(change.doc.data(), change.doc.id);
        addCard(change.doc.data(), change.doc.id);
        break;
      case "removed":
        // remove doc data from UI
        // removeRecipe(change.doc.id);
        // removeCard();
        break;
      case "modified":
        // modifyCard();
        // updateRecipe(change.doc.id, change.doc.data());
        break;
      default:
        break;
    }
  });
});

db.collection("reactions")
  .add({
    //add creates a unique id for you
    like: document.getElementById("love-it").innerHTML,
    dislike: document.getElementById("disLike").innerHTML,
    backToUs: document.getElementById("back-to-us").innerHTML,
    ourClients: document.getElementById("clients").innerHTML,
  })
  .then(function (docRef) {
    /* log data */
    console.log(docRef);
  })
  .catch(function (error) {
    /* error */
    console.error(error);
  });

// const reactBtns = document.querySelector(".cline").nodeValue;
// console.log(reactBtns);

// const increment = firebase.firestore.FieldValue.increment(1);

// // Document reference
// const storyRef = db.collection("reactions").doc("react");

// // Update read count
// storyRef.update({ reads: increment });

// const decrement = firebase.firestore.FieldValue.increment(-1);

// // Update read count

// var a = true;

// if (a) {
//   for (let index = 0; index < 2; index++) {
//     addCard();
//     console.log("hello");
//   }
// }
