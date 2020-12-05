db.collection("recipes").onSnapshot(function (snapshot) {
  snapshot.docChanges().forEach(function (change) {
    switch (change.type) {
      case "added":
        addCard(change.doc.data(), change.doc.id);
        break;
      case "removed":
        removeCard(change.doc.id);
        break;
      case "modified":
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
      localStorage.setItem("reactions", JSON.stringify(doc.data()));
    });
}
