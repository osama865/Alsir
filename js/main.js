$(document).ready(function () {
  new WOW().init();

  var king = 95,
    hello = 60,
    onabi = 95,
    normal = 85,
    piajo = 799,
    sooq = 140;
  $(".normalPrice").text(normal + " الف");
  $(".kingPrice").text(king + " الف");
  $(".helloPrice").text(hello + " الف");
  $(".onabiPrice").text(onabi + " الف");
  $(".sooqPrice").text(sooq + " الف");
  $(".piajoPrice").text(piajo + " الف");
  /* number of like and dislike...*/

  let data;
  let cline, disLike, love, backUs;
  db.collection("reactions")
    .doc("reacts")
    .onSnapshot(function (doc) {
      console.log("Current data: ", doc.data());
      data = doc.data();
      console.log(data.client);
      cline = data.client;
      disLike = data.client;
      love = data.client;
      backUs = data.client;
      console.log(love);
    });

  var counter;

  function counterUp() {
    $(".love").animateNumber({ number: love }, 500);
    $(".cline").animateNumber({ number: cline }, 500);
    $(".disLike").animateNumber({ number: disLike }, 500);
    $(".backUs").animateNumber({ number: backUs }, 500);
  }

  // Loading page
  var loaderPage = function () {
    $(".fh5co-loader").fadeOut("slow");
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  $(window).scroll(function () {
    var scroll = $(this).scrollTop(),
      ofsec = 6000;

    if (counter < 1 && scroll >= ofsec) {
      $(".love").animateNumber(
        {
          number: love,
        },
        500
      );

      $(".cline").animateNumber(
        {
          number: cline,
        },
        500
      );
      $(".disLike").animateNumber(
        {
          number: disLike,
        },
        500
      );
      $(".backUs").animateNumber(
        {
          number: backUs,
        },
        500
      );
      counter++;
      $(".whatsapp").fadeIn(4000);
    } else if (scroll < 4000) {
      counter = 0;
      $(".whatsapp").fadeOut(4000);
    }
  });
  /*check in form sell*/
  $("#phone").on("keyup", function () {
    var phoneNumber = $("#phone").val();
    if (phoneNumber.length < 10) {
      $(".checkPhone")
        .text("عزرا رقم هاتفك اقل من عشره ارقام")
        .css({ color: "red", "font-size": "130%", "text-align": "right" });
    } else if (phoneNumber.length == 10) {
      $(".checkPhone").text("جيد الرقم صحيح").css({ color: "green", "font-size": "130%", "text-align": "right" });
    } else
      $(".checkPhone")
        .text("عزرا رقم هاتفك اكثر من عشره ارقام")
        .css({ color: "red", "font-size": "130%", "text-align": "right" });
  });

  /*check in form sell*/
  $("#phonePiajo").on("keyup", function () {
    var phoneNumber = $("#phonePiajo").val();
    if (phoneNumber.length < 10) {
      $(".checkPhone")
        .text("عزرا رقم هاتفك اقل من عشره ارقام")
        .css({ color: "red", "font-size": "130%", "text-align": "right" });
    } else if (phoneNumber.length == 10) {
      $(".checkPhone").text("جيد الرقم صحيح").css({ color: "green", "font-size": "130%", "text-align": "right" });
    } else
      $(".checkPhone")
        .text("عزرا رقم هاتفك اكثر من عشره ارقام")
        .css({ color: "red", "font-size": "130%", "text-align": "right" });
  });

  $(".price").click(function () {
    var kingPrice = $("#kingPrice").val();
    alert(kingPrice);
    $(".helloPrice").text(kingPrice + " الف");
  });
  $("#sett").click(function () {
    $("i").slideToggle(1500);
  });
  $("button[href='showPay']").click(function () {
    $(".payPos").show(1000);
    $(".btnBack").click(function () {
      $(".payPos").fadeOut(1000);
    });
  });
  $(window).scroll(function () {
    var scroll = $(this).scrollTop(),
      ofsec = 2900;
    if (scroll >= ofsec && scroll < 4800.40625) {
      $(".inmatFade").slideDown(2000);
      setInterval(function () {
        $(".message").toggleClass("shake");
      }, 4000);
      $(".message").fadeIn(1000);
    } else $(".message").fadeOut(200);
  });
  $(".comunitItemKing").click(function () {
    $(".comunitKing").slideToggle(500, function () {
      $(".comunitNormal , .comunitHello").hide(500);
    });
  });
  $(".comunitItemNormal").click(function () {
    $(".comunitNormal").slideToggle(500, function () {
      $(".comunitKing , .comunitHello").hide(500);
    });
  });
  $(".comunitItemHello").click(function () {
    $(".comunitHello").slideToggle(500, function () {
      $(".comunitKing , .comunitNormal").hide(500);
    });
  });
  $(window).scroll(function () {
    var sc = $(this).scrollTop();
    if (sc > 100) {
      setInterval(function () {
        $(".perntTop").toggleClass("shake");
      }, 6000);
      $(".perntTop").fadeIn(2000);
    } else {
      $(".perntTop").fadeOut(1000);
    }
  });
  $(".acer").click(function () {
    $(window).scrollTop(0);
    counter = 0;
  });

  $("#keyAdmin").click(function () {
    $("#admin").show(400).css({ position: "absolute", right: "0" });
  });

  $(".custom").click(function () {
    r = 1;
    if (r > 0) {
      cline += 1;
      love += 1;
      let ref = db.collection("reactions").doc("reacts");
      let incrementField = ref.update({
        love: firebase.firestore.FieldValue.increment(1),
        client: firebase.firestore.FieldValue.increment(1),
      });

      let choice = "love";
      localStorage.setItem("choice", choice);

      $(this).addClass("buttonReactActive");
      $(".lover").addClass("buttonReactActive");

      if ($(".reacome").hasClass("buttonReactActive")) {
        $(".reacome").removeClass("buttonReactActive");
        backUs += 1;
        cline += 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          backUs: firebase.firestore.FieldValue.increment(1),
          client: firebase.firestore.FieldValue.increment(1),
        });

        let choice = "back";
        localStorage.setItem("choice", choice);
      }
      if ($(".hate").hasClass("buttonReactActive")) {
        disLike -= 1;
        cline -= 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          disLike: firebase.firestore.FieldValue.increment(-1),
          client: firebase.firestore.FieldValue.increment(-1),
        });
        let choice = "disLike";
        localStorage.setItem("choice", choice);
        $(".hate").removeClass("buttonReactActive");
      }
    }
    counterUp();
  });
  $(".lover").click(function () {
    let choice = "love";
    localStorage.setItem("choice", choice);
    r = 1;
    if ($(this).hasClass("buttonReactActive")) {
      braek;
    } else {
      cline += 1;
      love += 1;
      let ref = db.collection("reactions").doc("reacts");
      let incrementField = ref.update({
        love: firebase.firestore.FieldValue.increment(1),
        client: firebase.firestore.FieldValue.increment(1),
      });

      $(this).addClass("buttonReactActive");
      $(".custom").addClass("buttonReactActive");

      if ($(".reacome").hasClass("buttonReactActive")) {
        $(".reacome").removeClass("buttonReactActive");
        backUs += 1;
        cline += 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          backUs: firebase.firestore.FieldValue.increment(1),
          client: firebase.firestore.FieldValue.increment(1),
        });
        let choice = "back";
        localStorage.setItem("choice", choice);
      }
      if ($(".hate").hasClass("buttonReactActive")) {
        disLike -= 1;
        cline -= 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          disLike: firebase.firestore.FieldValue.increment(-1),
          client: firebase.firestore.FieldValue.increment(-1),
        });
        let choice = "disLike";
        localStorage.setItem("choice", choice);
        $(".hate").removeClass("buttonReactActive");
      }
    }
    counterUp();
  });

  $(".reacome").click(function () {
    r = 1;

    if ($(this).hasClass("buttonReactActive")) {
      braek;
    } else {
      backUs += 1;
      cline += 1;

      let ref = db.collection("reactions").doc("reacts");
      let incrementField = ref.update({
        backUs: firebase.firestore.FieldValue.increment(1),
        client: firebase.firestore.FieldValue.increment(1),
      });
      let choice = "back";
      localStorage.setItem("choice", choice);

      $(this).addClass("buttonReactActive");
      $(".custom").addClass("buttonReactActive");

      if ($(".lover").hasClass("buttonReactActive")) {
        $(".lover").removeClass("buttonReactActive");
        love -= 1;
        cline -= 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          love: firebase.firestore.FieldValue.increment(-1),
          client: firebase.firestore.FieldValue.increment(-1),
        });
      }
      if ($(".hate").hasClass("buttonReactActive")) {
        $(".hate").removeClass("buttonReactActive");
        disLike -= 1;
        cline -= 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          disLike: firebase.firestore.FieldValue.increment(-1),
          client: firebase.firestore.FieldValue.increment(-1),
        });
      }
    }
    counterUp();
  });

  $(".hate").click(function () {
    r = 1;
    if ($(this).hasClass("buttonReactActive")) {
      braek;
    } else {
      cline += 1;
      disLike += 1;
      let ref = db.collection("reactions").doc("reacts");
      let incrementField = ref.update({
        disLike: firebase.firestore.FieldValue.increment(1),
        client: firebase.firestore.FieldValue.increment(1),
      });
      let choice = "disLike";
      localStorage.setItem("choice", choice);
      $(this).addClass("buttonReactActive");
      $(".custom").addClass("buttonReactActive");

      if ($(".lover").hasClass("buttonReactActive")) {
        $(".lover").removeClass("buttonReactActive");
        love -= 1;
        cline -= 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          love: firebase.firestore.FieldValue.increment(-1),
          client: firebase.firestore.FieldValue.increment(-1),
        });
      }
      if ($(".reacome").hasClass("buttonReactActive")) {
        $(".reacome").removeClass("buttonReactActive");
        backUs -= 1;
        cline -= 1;
        let ref = db.collection("reactions").doc("reacts");
        let incrementField = ref.update({
          backUs: firebase.firestore.FieldValue.increment(-1),
          client: firebase.firestore.FieldValue.increment(-1),
        });
      }
    }
    counterUp();
  });
  console.log(localStorage.getItem("choice"));

  function setChoiceToHTML() {
    const clients = document.querySelector(".custom");
    const love = document.querySelector(".lover");
    const back = document.querySelector(".reacome");
    const disLike = document.querySelector(".hate");
    if (localStorage.getItem("choice") === "love") {
      // make love and clients clicked and dislike , back unclicked
      console.log("working", love);
      love.classList.add("buttonReactActive");
      clients.classList.add("buttonReactActive");
    } else if (localStorage.getItem("choice") === "disLike") {
      // make dislike and clients clicked and love , back unclicked
      disLike.classList.add("buttonReactActive");
      clients.classList.add("buttonReactActive");
    } else if (localStorage.getItem("choice") === "back") {
      // make back and clients clicked and love , dislike unclicked
      back.classList.add("buttonReactActive");
      clients.classList.add("buttonReactActive");
    }
  }

  $(function () {
    setChoiceToHTML();
    loaderPage();
  });
});
