const cardContainer = document.querySelector("#rooms-c");

var client = contentful.createClient({
  space: "18yoosog20ju",
  accessToken: "0I3QCVzsfU2UZolz1Fp3xA8LG8w5oyiXkBGHapaR8JI",
});
client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  console.log(entries);
  entries.items.forEach(function (entry) {
    console.log(entry);
    if (entry) {
      let recipe = entry.fields;

      let id = "ridk";
      const newCard = `
  <!-- start king room -->
        <div class="col-md-4 col-sm-6 col-xs-12 ">

          <div class="card inmatFade">
            <div class="hover-store text-center">
              <div class="img-store">
                <img src=https:${recipe.fields.images[0]} class="card-img-top" alt="king room">
              </div>
              <div class="back-img-store ">
                <h3>السعر بالجنيه </h3>
                <span class=" kingPrice label label-success">${recipe.price} الف</span>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title"><a href="#" data-toggle="modal" data-target=${"#" + id}>${recipe.title}<span
                    class=" glyphicon glyphicon-tower"></a></h5>


              <!--end section pay room -->

              <p class="card-text">${recipe.description}</p>
              <button class="btn btn-primary btn-bg" href="showPay" data-toggle="modal" data-target='#myModal'>الشراء
                الان</button>
            </div>
          </div>

        </div>
        <!-- end king room -->

        <!-- Modal -->
        <div id=${id} class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title "> صور للغرفه</h4>
              </div>
              <div class="modal-body">
                <div id="hello1-1" class="carousel slide" data-ride="carousel" style="max-height: 480px;">
                  <!-- Wrapper for slides -->
                  <div class="carousel-inner">
                    <div class="item active">
                      <img src=https:${recipe.fields.images[1]} alt="Los Angeles" style="max-height: 480px;">
                    </div>
                    <div class="item">
                      <img src=https:${recipe.fields.images[2]} alt="Chicago" style="max-height: 480px;">
                    </div>
                    <div class="item">
                      <img src=https:${recipe.fields.images[3]} alt="New York" style="max-height: 480px;">
                    </div>
                  </div>
                  <!-- Left and right controls -->
                  <a class="left carousel-control" href="#hello1-1" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#hello1-1" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger btn-lg float-left btnFadeOut col-md-12" id="subForm"
                  data-dismiss="modal"> التراجع</button>
              </div>
            </div>
          </div>
        </div>

        <!-- end hello room -->


        
`;
      cardContainer.innerHTML += newCard;
      console.log(recipe);
    } else {
      console.log("nothing");
    }
  });
});
const removeCard = id => {
  const newCard = `
  <!-- start king room -->
        <div class="col-md-4 col-sm-6 col-xs-12 ">

          <div class="card inmatFade">
            <div class="hover-store text-center">
              <div class="img-store">
                <img src=${data.urls[0]} class="card-img-top" alt="king room">
              </div>
              <div class="back-img-store ">
                <h3>السعر بالجنيه </h3>
                <span class=" kingPrice label label-success">${data.price} الف</span>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title"><a href="#" data-toggle="modal" data-target=${"#" + id}>${data.title}<span
                    class=" glyphicon glyphicon-tower"></a></h5>


              <!--end section pay room -->

              <p class="card-text">${data.discreption}</p>
              <button class="btn btn-primary btn-bg" href="showPay" data-toggle="modal" data-target='#myModal'>الشراء
                الان</button>
            </div>
          </div>

        </div>
        <!-- end king room -->

        <!-- Modal -->
        <div id=${id} class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title "> صور للغرفه</h4>
              </div>
              <div class="modal-body">
                <div id="hello1-1" class="carousel slide" data-ride="carousel" style="max-height: 480px;">
                  <!-- Wrapper for slides -->
                  <div class="carousel-inner">
                    <div class="item active">
                      <img src=${data.urls[1]} alt="Los Angeles" style="max-height: 480px;">
                    </div>
                    <div class="item">
                      <img src=${data.urls[2]} alt="Chicago" style="max-height: 480px;">
                    </div>
                    <div class="item">
                      <img src=${data.urls[3]} alt="New York" style="max-height: 480px;">
                    </div>
                  </div>
                  <!-- Left and right controls -->
                  <a class="left carousel-control" href="#hello1-1" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#hello1-1" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger btn-lg float-left btnFadeOut col-md-12" id="subForm"
                  data-dismiss="modal"> التراجع</button>
              </div>
            </div>
          </div>
        </div>

        <!-- end hello room -->
`;
  cardContainer.innerHTML -= newCard;
};
