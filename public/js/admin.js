// // API
// const API_URL = "https://600bd9e138fd25001702cc08.mockapi.io/api/v1";
// const API_URLs = "http://localhost:3000";

// function callAPI(endpoint, method = "GET", body) {
//     return axios({
//         method: method,
//         url: `${API_URL}/${endpoint}`,
//         data: body,
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// function callAPIs(endpoint, method = "GET", body) {
//     return axios({
//         method: method,
//         url: `${API_URLs}/${endpoint}`,
//         data: body,
//     }).catch((err) => {
//         console.log(err);
//     });
// }
// var id;
//================================================Hot================================================//

// function showOffer() {
//     document.getElementById("hot").style.display = "none";
//     document.getElementById("offer").style.display = "";
//     document.getElementById("cruise").style.display = "none";
//     document.getElementById("sports").style.display = "none";
//     document.getElementById("capital").style.display = "none";
//     document.getElementById("blogs").style.display = "none";
// }
// function editHot(id) {
//     callAPI(`tour_hot/${id}`, "GET", null).then((res) => {
//         let tour;
//         tour = res.data;
//         console.log(tour);
//         document.getElementById("named_hot").value = tour.name;
//         document.getElementById("priced_hot").value = tour.price;
//         document.getElementById("fromd_hot").value = tour.from;
//         document.getElementById("detaild_hot").value = tour.detail;
//         document.getElementById("imgd_hot").value = tour.img;
//     });
//     document.getElementById("submitHot").innerHTML = `<button type="button" onclick="editokHot(${id})" class="btn btn-success">Save</button>`;
// }

// function editokHot(id) {
//     var name = document.getElementById("named_hot").value;
//     var price = document.getElementById("priced_hot").value;
//     var from = document.getElementById("fromd_hot").value;
//     var detail = document.getElementById("detaild_hot").value;
//     let img = document.getElementById("imgd_hot").value;
//     var image = img.split("\\")[2];
//     var Tour = {
//         id: id,
//         name: name,
//         price: price,
//         from: from,
//         detail: detail,
//         img: image
//     }
//     callAPI(`tour_hot/${id}`, "PUT", Tour).then((response) => {
//         alert("Updated successful!");
//         showHot();
//     });
//     resetTop();
// }

// function deleteHot(id) {
//     var r = confirm("Are you sure you want to delete?");
//     if (r === true) {
//         callAPI(`tour_hot/${id}`, "DELETE", null).then((response) => {
//             showHot();
//             alert("Deleted successful!");
//         });
//     } else {
//         window.location.href = "admin.html";
//     }
// }

// function resetHot() {
//     document.getElementById("name_hot").value = "";
//     document.getElementById("price_hot").value = "";
//     document.getElementById("from_hot").value = "";
//     document.getElementById("detail_hot").value = "";
//     document.getElementById("img_hot").value = "";
// }
// //=========================================Offer==========================================//
// function saveOffer() {
//     var tour_offer = [];
//     for (i = 0; i <= tour_offer.length; i++) {
//         id = i;
//     }
//     var name = document.getElementById("name_offer").value;
//     var price = document.getElementById("price_offer").value | 0;
//     var from = document.getElementById("from_offer").value;
//     var detail = document.getElementById("detail_offer").value;
//     let img = document.getElementById("img_offer").value;
//     let image = img.split("\\")[2];
//     if (name | detail | from | (price != "")) {
//         var Tour = {
//             id: id,
//             name: name,
//             price: price,
//             from: from,
//             detail: detail,
//             img: image,
//         };
//         callAPI("tour_offer", "POST", Tour).then((response) => {
//             showHot();
//             alert("Added data successful!");
//         });
//     } else {
//         resetHot();
//     }
// }

function showOffer() {
    document.getElementById("offer").style.display = "block";
    document.getElementById("hot").style.display = "none";
    document.getElementById("cruise2").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("capital").style.display = "none";
    document.getElementById("blogs").style.display = "none";}
//     callAPI("tour_offer", "GET", null).then((res) => {
//         tour_offer = res.data;
//         let row = "";
//         for (var i in tour_offer) {
//             row += "<tr >";
//             row += "<td>" + tour_offer[i].id + "</td>";
//             row += "<td>" + tour_offer[i].name + "</td>";
//             row += "<td>" + `<img src = 'images/${tour_offer[i].img}' style = "width: 100px; height: 100px;">` + "</td>";
//             row += "<td>" + tour_offer[i].price + "</td>";
//             row += "<td>" + tour_offer[i].detail + "</td>";
//             row += "<td>" + tour_offer[i].from + "</td>";
//             row += "<td>" + `<button type="button" onclick="editOffer(${tour_offer[i].id})" data-toggle="modal" data-target="#update_offer" class="btn btn-success">Edit</button>` + "</td>";
//             row += "<td>" + `<button type="button" onclick="deleteOffer(${tour_offer[i].id})" class="btn btn-danger">Delete</button>` + "</td>";
//             row += "</tr>";
//         }
//         document.getElementById("tab3").innerHTML = row;
//     });
// }

// function editOffer(id) {
//     callAPI(`tour_offer/${id}`, "GET", null).then((res) => {
//         let tour;
//         tour = res.data;
//         console.log(tour);
//         document.getElementById("named_offer").value = tour.name;
//         document.getElementById("priced_offer").value = tour.price;
//         document.getElementById("fromd_offer").value = tour.from;
//         document.getElementById("detaild_offer").value = tour.detail;
//         document.getElementById("imgd_offer").value = tour.img;
//     });
//     document.getElementById("submitOffer").innerHTML = `<button type="button" onclick="editokOffer(${id})" class="btn btn-success">Save</button>`;
// }

// function editokOffer(id) {
//     var name = document.getElementById("named_offer").value;
//     var price = document.getElementById("priced_offer").value;
//     var from = document.getElementById("fromd_offer").value;
//     var detail = document.getElementById("detaild_offer").value;
//     let img = document.getElementById("imgd_offer").value;
//     var image = img.split("\\")[2];
//     var Tour = {
//         id: id,
//         name: name,
//         price: price,
//         from: from,
//         detail: detail,
//         img: image
//     }
//     callAPI(`tour_offer/${id}`, "PUT", Tour).then((response) => {
//         alert("Updated successful!");
//         showOffer();
//     });
//     resetTop();
// }

// function deleteOffer(id) {
//     var r = confirm("Are you sure you want to delete?");
//     if (r === true) {
//         callAPI(`tour_offer/${id}`, "DELETE", null).then((response) => {
//             showOffer();
//             alert("Delete successful!");
//         });
//     } else {
//         window.location.href = "admin.html";
//     }
// }

// function resetOffer() {
//     document.getElementById("name_offer").value = "";
//     document.getElementById("price_offer").value = "";
//     document.getElementById("from_offer").value = "";
//     document.getElementById("detail_offer").value = "";
//     document.getElementById("img_offer").value = "";
// }
// //==========================================Cruise================================================//
// function savecruise() {
//     var tour_cruise = [];
//     for (i = 0; i <= tour_cruise.length; i++) {
//         id = i;
//     }
//     var name = document.getElementById("name_cruise").value;
//     var price = document.getElementById("price_cruise").value | 0;
//     var from = document.getElementById("from_cruise").value;
//     var detail = document.getElementById("detail_cruise").value;
//     let img = document.getElementById("img_cruise").value;
//     let image = img.split("\\")[2];
//     if (name | detail | from | (price != "")) {
//         var Tour = {
//             id: id,
//             name: name,
//             price: price,
//             from: from,
//             detail: detail,
//             img: image,
//         };
//         callAPIs("tour_cruise", "POST", Tour).then((response) => {
//             showCruise();
//             alert("Added data successful!");
//         });
//     } else {
//         resetcruise();
//     }
// }

function show() {
    document.getElementById("cruise2").style.display = "block";
    document.getElementById("offer").style.display = "none";
    document.getElementById("hot").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("capital").style.display = "none";
    document.getElementById("blogs").style.display = "none";}
//     callAPIs("tour_cruise", "GET", null).then((res) => {
//         tour_cruise = res.data;
//         let row = "";
//         for (var i in tour_cruise) {
//             row += "<tr >";
//             row += "<td>" + tour_cruise[i].id + "</td>";
//             row += "<td>" + tour_cruise[i].name + "</td>";
//             row += "<td>" + `<img src = 'images/${tour_cruise[i].img}' style = "width: 100px; height: 100px;">` + "</td>";
//             row += "<td>" + tour_cruise[i].price + "</td>";
//             row += "<td>" + tour_cruise[i].detail + "</td>";
//             row += "<td>" + tour_cruise[i].from + "</td>";
//             row += "<td>" + `<button type="button" onclick="editcruise(${tour_cruise[i].id})" data-toggle="modal" data-target="#update_cruise" class="btn btn-success">Edit</button>` + "</td>";
//             row += "<td>" + `<button type="button" onclick="deletecruise(${tour_cruise[i].id})" class="btn btn-danger">Delete</button>` + "</td>";
//             row += "</tr>";
//         }
//         document.getElementById("tab4").innerHTML = row;
//     });
// }

// function editcruise(id) {
//     callAPIs(`tour_cruise/${id}`, "GET", null).then((res) => {
//         let tour;
//         tour = res.data;
//         console.log(id);
//         document.getElementById("named_cruise").value = tour.name;
//         document.getElementById("priced_cruise").value = tour.price;
//         document.getElementById("fromd_cruise").value = tour.from;
//         document.getElementById("detaild_cruise").value = tour.detail;
//         document.getElementById("imgd_cruise").value = tour.img;
//     });
//     console.log(id);
//     document.getElementById("submitcruise").innerHTML = `<button type="button" onclick="editokcruise(${id})" class="btn btn-success">Save</button>`;
// }

// function editokcruise(id) {
//     var name = document.getElementById("named_cruise").value;
//     var price = document.getElementById("priced_cruise").value;
//     var from = document.getElementById("fromd_cruise").value;
//     var detail = document.getElementById("detaild_cruise").value;
//     let img = document.getElementById("imgd_cruise").value;
//     var image = img.split("\\")[2];
//     var Tour = {
//         id: id,
//         name: name,
//         price: price,
//         from: from,
//         detail: detail,
//         img: image
//     }
//     callAPIs(`tour_cruise/${id}`, "PUT", Tour).then((response) => {
//         alert("Updated successful!");
//         showCruise();
//     });
//     resetcruise();
// }

// function deletecruise(id) {
//     var r = confirm("Are you sure you want to delete?");
//     if (r === true) {
//         callAPIs(`tour_cruise/${id}`, "DELETE", null).then((res) => {
//             console.log(res);
//             console.log(id);
//             showCruise();
//             alert("Delete successful!");
//         });
//     } else {
//         window.location.href = "admin.html";
//     }
// }

// function resetcruise() {
//     document.getElementById("name_cruise").value = "";
//     document.getElementById("price_cruise").value = "";
//     document.getElementById("from_cruise").value = "";
//     document.getElementById("detail_cruise").value = "";
//     document.getElementById("img_cruise").value = "";
// }
// //==========================================Harzadous Sports Tour================================================//
// function saveSports() {
//     var tour_Sports = [];
//     for (i = 0; i <= tour_Sports.length; i++) {
//         id = i;
//     }
//     var name = document.getElementById("name_Sports").value;
//     var price = document.getElementById("price_Sports").value | 0;
//     var from = document.getElementById("from_Sports").value;
//     var detail = document.getElementById("detail_Sports").value;
//     let img = document.getElementById("img_Sports").value;
//     let image = img.split("\\")[2];
//     if (name | detail | from | (price != "")) {
//         var Tour = {
//             id: id,
//             name: name,
//             price: price,
//             from: from,
//             detail: detail,
//             img: image,
//         };
//         callAPIs("tour_Sports", "POST", Tour).then((response) => {
//             showSports();
//             alert("Added data successful!");
//         });
//     } else {
//         resetSports();
//     }
// }

function showSports() {
    document.getElementById("offer").style.display = "none";
    document.getElementById("hot").style.display = "none";
    document.getElementById("cruise").style.display = "none";
    document.getElementById("sports").style.display = "block";
    document.getElementById("capital").style.display = "none";
    document.getElementById("blogs").style.display = "none";}
//     callAPIs("tour_Sports", "GET", null).then((res) => {
//         tour_Sports = res.data;
//         let row = "";
//         for (var i in tour_Sports) {
//             row += "<tr >";
//             row += "<td>" + tour_Sports[i].id + "</td>";
//             row += "<td>" + tour_Sports[i].name + "</td>";
//             row += "<td>" + `<img src = 'images/${tour_Sports[i].img}' style = "width: 100px; height: 100px;">` + "</td>";
//             row += "<td>" + tour_Sports[i].price + "</td>";
//             row += "<td>" + tour_Sports[i].detail + "</td>";
//             row += "<td>" + tour_Sports[i].from + "</td>";
//             row += "<td>" + `<button type="button" onclick="editSports(${tour_Sports[i].id})" data-toggle="modal" data-target="#update_Sports" class="btn btn-success">Edit</button>` + "</td>";
//             row += "<td>" + `<button type="button" onclick="deleteSports(${tour_Sports[i].id})" class="btn btn-danger">Delete</button>` + "</td>";
//             row += "</tr>";
//         }
//         document.getElementById("tab5").innerHTML = row;
//     });
// }

// function editSports(id) {
//     callAPIs(`tour_Sports/${id}`, "GET", null).then((res) => {
//         let tour;
//         tour = res.data;
//         console.log(tour);
//         document.getElementById("named_Sports").value = tour.name;
//         document.getElementById("priced_Sports").value = tour.price;
//         document.getElementById("fromd_Sports").value = tour.from;
//         document.getElementById("detaild_Sports").value = tour.detail;
//         document.getElementById("imgd_Sports").value = tour.img;
//     });
//     document.getElementById("submitSports").innerHTML = `<button type="button" onclick="editokSports(${id})" class="btn btn-success">Save</button>`;
// }

// function editokSports(id) {
//     var name = document.getElementById("named_Sports").value;
//     var price = document.getElementById("priced_Sports").value;
//     var from = document.getElementById("fromd_Sports").value;
//     var detail = document.getElementById("detaild_Sports").value;
//     let img = document.getElementById("imgd_Sports").value;
//     var image = img.split("\\")[2];
//     var Tour = {
//         id: id,
//         name: name,
//         price: price,
//         from: from,
//         detail: detail,
//         img: image
//     }
//     callAPIs(`tour_Sports/${id}`, "PUT", Tour).then((response) => {
//         alert("Updated successful!");
//         showSports();
//     });
//     resetTop();
// }

// function deleteSports(id) {
//     var r = confirm("Are you sure you want to delete?");
//     if (r === true) {
//         callAPIs(`tour_Sports/${id}`, "DELETE", null).then((response) => {
//             showSports();
//             alert("Delete successful!");
//         });
//     } else {
//         window.location.href = "admin.html";
//     }
// }

// function resetSports() {
//     document.getElementById("name_Sports").value = "";
//     document.getElementById("price_Sports").value = "";
//     document.getElementById("from_Sports").value = "";
//     document.getElementById("detail_Sports").value = "";
//     document.getElementById("img_Sports").value = "";
// }
// //==========================================Capital Tour===============================================//
// function saveCapital() {
//     var tour_Capital = [];
//     for (i = 0; i <= tour_Capital.length; i++) {
//         id = i;
//     }
//     var name = document.getElementById("name_Capital").value;
//     var price = document.getElementById("price_Capital").value | 0;
//     var from = document.getElementById("from_Capital").value;
//     var detail = document.getElementById("detail_Capital").value;
//     let img = document.getElementById("img_Capital").value;
//     let image = img.split("\\")[2];
//     if (name | detail | from | (price != "")) {
//         var Tour = {
//             id: id,
//             name: name,
//             price: price,
//             from: from,
//             detail: detail,
//             img: image,
//         };
//         callAPIs("tour_Capital", "POST", Tour).then((response) => {
//             showCapital();
//             alert("Added data successful!");
//         });
//     } else {
//         resetCapital();
//     }
// }

function showCapital() {
    document.getElementById("offer").style.display = "none";
    document.getElementById("hot").style.display = "none";
    document.getElementById("cruise").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("capital").style.display = "block";
    document.getElementById("blogs").style.display = "none";
}
//     callAPIs("tour_Capital", "GET", null).then((res) => {
//         tour_Capital = res.data;
//         let row = "";
//         for (var i in tour_Capital) {
//             row += "<tr >";
//             row += "<td>" + tour_Capital[i].id + "</td>";
//             row += "<td>" + tour_Capital[i].name + "</td>";
//             row += "<td>" + `<img src = 'images/${tour_Capital[i].img}' style = "width: 100px; height: 100px;">` + "</td>";
//             row += "<td>" + tour_Capital[i].price + "</td>";
//             row += "<td>" + tour_Capital[i].detail + "</td>";
//             row += "<td>" + tour_Capital[i].from + "</td>";
//             row += "<td>" + `<button type="button" onclick="editCapital(${tour_Capital[i].id})" data-toggle="modal" data-target="#update_Capital" class="btn btn-success">Edit</button>` + "</td>";
//             row += "<td>" + `<button type="button" onclick="deleteCapital(${tour_Capital[i].id})" class="btn btn-danger">Delete</button>` + "</td>";
//             row += "</tr>";
//         }
//         document.getElementById("tab6").innerHTML = row;
//     });
// }

// function editCapital(id) {
//     callAPIs(`tour_Capital/${id}`, "GET", null).then((res) => {
//         let tour;
//         tour = res.data;
//         console.log(tour);
//         document.getElementById("named_Capital").value = tour.name;
//         document.getElementById("priced_Capital").value = tour.price;
//         document.getElementById("fromd_Capital").value = tour.from;
//         document.getElementById("detaild_Capital").value = tour.detail;
//         document.getElementById("imgd_Capital").value = tour.img;
//     });
//     document.getElementById("submitCapital").innerHTML = `<button type="button" onclick="editokCapital(${id})" class="btn btn-success">Save</button>`;
// }

// function editokCapital(id) {
//     var name = document.getElementById("named_Capital").value;
//     var price = document.getElementById("priced_Capital").value;
//     var from = document.getElementById("fromd_Capital").value;
//     var detail = document.getElementById("detaild_Capital").value;
//     let img = document.getElementById("imgd_Capital").value;
//     var image = img.split("\\")[2];
//     var Tour = {
//         id: id,
//         name: name,
//         price: price,
//         from: from,
//         detail: detail,
//         img: image
//     }
//     callAPIs(`tour_Capital/${id}`, "PUT", Tour).then((response) => {
//         alert("Updated successful!");
//         showCapital();
//     });
//     resetTop();
// }

// function deleteCapital(id) {
//     var r = confirm("Are you sure you want to delete?");
//     if (r === true) {
//         callAPIs(`tour_Capital/${id}`, "DELETE", null).then((response) => {
//             showCapital();
//             alert("Delete successful!");
//         });
//     } else {
//         window.location.href = "admin.html";
//     }
// }

// function resetCapital() {
//     document.getElementById("name_Capital").value = "";
//     document.getElementById("price_Capital").value = "";
//     document.getElementById("from_Capital").value = "";
//     document.getElementById("detail_Capital").value = "";
//     document.getElementById("img_Capital").value = "";
// }
// //==========================================Our Latest Blogs===============================================//
// function saveBlogs() {
//     var Blogs = [];
//     for (i = 0; i <= Blogs.length; i++) {
//         id = i;
//     }
//     var name = document.getElementById("name_Blogs").value;
//     var from = document.getElementById("from_Blogs").value;
//     var detail = document.getElementById("detail_Blogs").value;
//     let img = document.getElementById("img_Blogs").value;
//     let image = img.split("\\")[2];
//     if (name | detail | from) {
//         var blogs = {
//             id: id,
//             name: name,
//             from: from,
//             detail: detail,
//             img: image,
//         };
//         callAPIs("Blogs", "POST", blogs).then((response) => {
//             showBlogs();
//             alert("Added data successful!");
//         });
//     } else {
//         resetBlogs();
//     }
// }

function showBlogs() {
    document.getElementById("offer").style.display = "none";
    document.getElementById("hot").style.display = "none";
    document.getElementById("cruise").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("capital").style.display = "none";
    document.getElementById("blogs").style.display = "block";}
//     callAPIs("Blogs", "GET", null).then((res) => {
//         Blogs = res.data;
//         let row = "";
//         for (var i in Blogs) {
//             row += "<tr >";
//             row += "<td>" + Blogs[i].id + "</td>";
//             row += "<td>" + Blogs[i].name + "</td>";
//             row += "<td>" + `<img src = 'images/${Blogs[i].img}' style = "width: 100px; height: 100px;">` + "</td>";
//             row += "<td>" + Blogs[i].detail + "</td>";
//             row += "<td>" + Blogs[i].from + "</td>";
//             row += "<td>" + `<button type="button" onclick="editBlogs(${Blogs[i].id})" data-toggle="modal" data-target="#update_Blogs" class="btn btn-success">Edit</button>` + "</td>";
//             row += "<td>" + `<button type="button" onclick="deleteBlogs(${Blogs[i].id})" class="btn btn-danger">Delete</button>` + "</td>";
//             row += "</tr>";
//         }
//         document.getElementById("tab7").innerHTML = row;
//     });
// }

// function editBlogs(id) {
//     callAPIs(`Blogs/${id}`, "GET", null).then((res) => {
//         let tour;
//         tour = res.data;
//         console.log(tour);
//         document.getElementById("named_Blogs").value = tour.name;
//         document.getElementById("fromd_Blogs").value = tour.from;
//         document.getElementById("detaild_Blogs").value = tour.detail;
//         document.getElementById("imgd_Blogs").value = tour.img;
//     });
//     document.getElementById("submitBlogs").innerHTML = `<button type="button" onclick="editokBlogs(${id})" class="btn btn-success">Save</button>`;
// }

// function editokBlogs(id) {
//     var name = document.getElementById("named_Blogs").value;
//     var from = document.getElementById("fromd_Blogs").value;
//     var detail = document.getElementById("detaild_Blogs").value;
//     let img = document.getElementById("imgd_Blogs").value;
//     var image = img.split("\\")[2];
//     var blogs = {
//         id: id,
//         name: name,
//         from: from,
//         detail: detail,
//         img: image
//     }
//     callAPIs(`Blogs/${id}`, "PUT", blogs).then((response) => {
//         alert("Updated successful!");
//         showBlogs();
//     });
//     resetTop();
// }

// function deleteBlogs(id) {
//     var r = confirm("Are you sure you want to delete?");
//     if (r === true) {
//         callAPIs(`Blogs/${id}`, "DELETE", null).then((response) => {
//             showBlogs();
//             alert("Delete successful!");
//         });
//     } else {
//         window.location.href = "admin.html";
//     }
// }

// function resetBlogs() {
//     document.getElementById("name_Blogs").value = "";
//     document.getElementById("from_Blogs").value = "";
//     document.getElementById("detail_Blogs").value = "";
//     document.getElementById("img_Blogs").value = "";
// }