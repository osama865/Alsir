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

document.addEventListener(onloadstart, () => {});
function getData() {
  db.collection("reactions")
    .doc("reacts")
    .onSnapshot(function (doc) {
      console.log("Current data: ", doc.data());
      localStorage.setItem("reactions", JSON.stringify(doc.data()));
      console.log(JSON.parse(localStorage.getItem("reactions")));
    });
}

// db.collection("reactions")
//   .doc("reacts")
//   .onSnapshot(function (doc) {
//     console.log("Current data: ", doc.data());
//     const clients = document.getElementById("clients");
//     const love = document.getElementById("love-it");
//     const back = document.getElementById("back-to-us");
//     const disLike = document.getElementById("disLike");
//     console.log(clients.innerHTML, love.innerHTML, back.innerHTML, disLike.innerHTML);
//     clients.innerHTML = doc.data().client;
//     love.innerHTML = doc.data().disLike;
//     disLike.innerHTML = doc.data().backUs;
//     back.innerHTML = doc.data().love;
//   });

// let Data;
// db.collection("reactions")
//   .doc("reacts")
//   .onSnapshot(function (doc) {
//     console.log("Current data: ", doc.data());
//     Data = doc.data();
//   });
// var cline = Data.client,
//   disLike = Data.disLike,
//   love = Data.love,
//   backUs = Data.backUs;
// var counter;

// db.collection("reactions")
//   .add({
//     //add creates a unique id for you
//     like: document.getElementById("love-it").innerHTML,
//     dislike: document.getElementById("disLike").innerHTML,
//     backToUs: document.getElementById("back-to-us").innerHTML,
//     ourClients: document.getElementById("clients").innerHTML,
//   })
//   .then(function (docRef) {
//     /* log data */
//     console.log(docRef);
//   })
//   .catch(function (error) {
//     /* error */
//     console.error(error);
//   });

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

// function setChoice() {
//   if (localStorage.getItem("choice")) {
//     // set style as it has been cliked
//   } else {
//     // let the user click
//     db.collection("reactions")
//       .add({
//         //add creates a unique id for you
//         like: document.getElementById("love-it").innerHTML,
//         dislike: document.getElementById("disLike").innerHTML,
//         backToUs: document.getElementById("back-to-us").innerHTML,
//         ourClients: document.getElementById("clients").innerHTML,
//       })
//       .then(function (docRef) {
//         /* log data */
//         console.log(docRef);
//       })
//       .catch(function (error) {
//         /* error */
//         console.error(error);
//       });
//     var docRef = db.collection("reactions").doc("reacts");

//     docRef
//       .get()
//       .then(function (doc) {
//         if (doc.exists) {
//           console.log("Document data:", doc.data());
//         } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//         }
//       })
//       .catch(function (error) {
//         console.log("Error getting document:", error);
//       });
//     console.log("nothing");
//   }
// }
