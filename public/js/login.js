var newAccounts = [{
    "user": "hamongkhang",
    "email": "hamongkhang@gmail.com",
    "pass": "khangcute",
    "cart": []
}, {
    "user": "nguyenhoanghuan",
    "email": "nguyenhoanghuan@gmail.com",
    "pass": "huancute",
    "cart": []
}, {
    "user": "hothihang",
    "email": "hothihang@gmail.com",
    "pass": "hangcute",
    "cart": []
}];

function check() {
    if ("ListAccounts" in localStorage) { newAccounts = getListAccounts() } else {
        setListAccounts(newAccounts);

    }
}

function getListAccounts() {
    JSON.parse(window.localStorage.getItem('ListAccounts'));
}

function setListAccounts(newAccounts) {
    localStorage.setItem('ListAccounts', JSON.stringify(newAccounts));
}

function TaoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var a = TaoSoNgauNhien(1000, 100000);

function sendd() {
    var kt = true;
    document.getElementById('number').style.display = "block";
    document.getElementById('register').style.display = "none";
    document.getElementById('submit').style.display = "block";
    var title = "STARTTRAVELS'S CODES";
    var user = document.getElementById('user').value;
    var content = "PLEASE CHECK CODES: " + a;
    var email = document.getElementById('email').value;
    Email.send({
        SecureToken: "772f25a1-9609-42f8-abc1-3a05d2919e4a",
        To: email,
        From: "hangqt3621@gmail.com",
        Subject: title,
        Body: content

    }).then(
        message => alert("Mail successfully sent")
    );
}


function sosanh() {
    var b = document.getElementById('number').value;
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var email = document.getElementById('email').value;
    var newAccount = {
        "user": user,
        "email": email,
        "pass": pass,
        "cart": []
    };
    if ((a == b)) {
        newAccounts.push(newAccount);
        setListAccounts(newAccounts);
        location.assign("index.html");
        var title = "STARTTRAVELS WEBSITE";
        var content = "WELCOME " + user + " to STARTTRAVELS: username: " + user + " ; password: " + pass;
        var email = document.getElementById('email').value;
        Email.send({
            SecureToken: "772f25a1-9609-42f8-abc1-3a05d2919e4a",
            To: email,
            From: "hangqt3621@gmail.com",
            Subject: title,
            Body: content

        }).then(
            message => alert("Mail successfully sent")
        );
    } else {
        alert("You entered the wrong codes");
        windown.load();
    }
}

function kiemtra() {
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var repass = document.getElementById('repass').value;
    if (user.length < 3) {
        alert("Username must contain at least 3 characters!");
        document.SignIn.user.focus();
    } else if (pass.length == 0) {
        alert("Password cannot be empty!");
        document.SignIn.pass.focus();
    } else if (pass != repass) {
        alert(" Password must match!");
        document.SignIn.pass.focus();
    } else if (email.length == 0) {
        alert("Wrong mail format!");
        document.SignIn.email.focus();
    } else {
        var kt = true;
        check();
        var listUser = getListAccounts();
        console.log(listUser);
        // Kiểm tra xem dữ liệu form có khớp với người dùng nào trong danh sách ko
        for (var u of listUser) {
            if (u.user == user) kt = false;
        }
        if (kt == true) {
            sendd();
        } else {
            alert("The name you entered already exists !!!");
        }
    }
}

var adminInfo = [{
    "user": "admin",
    "pass": "khanghuanhang"
}];

function getListAdmin() {
    return JSON.parse(window.localStorage.getItem('ListAdmin'));
}
localStorage.setItem('ListAdmin', JSON.stringify(adminInfo));

function setListAdmin(adminInfo) {
    localStorage.setItem('ListAccounts', JSON.stringify(adminInfo));
}

function getListAccounts() {
    return JSON.parse(window.localStorage.getItem('ListAccounts'));
}



function setCurrentUser(u) {
    localStorage.setItem('CurrentUser', JSON.stringify(u));
}

function getCurrentUser() {
    return JSON.parse(window.localStorage.getItem('CurrentUser'));
}

function setCartUser(u) {
    localStorage.setItem('cartUser', JSON.stringify(u));
}

function getCartUser() {
    return JSON.parse(window.localStorage.getItem('cartUser'));
}

function equalUser(u1, u2) {
    return (u1.user == u2.user && u1.pass == u2.pass);
}

var CurrentUser = [];

function logIn() {
    // Lấy dữ liệu từ form
    var name = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var newUser = {};
    newUser.user = name;
    newUser.pass = pass;
    console.log(newUser);
    check();
    var listUser = getListAccounts();
    console.log(listUser);
    // Kiểm tra xem dữ liệu form có khớp với người dùng nào trong danh sách ko
    for (var u of listUser) {
        if (equalUser(newUser, u)) {
            checkCurrentUser();
            CurrentUser.push(u);
            setCurrentUser(CurrentUser);
            ham();
            alert('Welcome ' + newUser.user + ' to STARTTRAVELS');
            // Reload lại trang -> sau khi reload sẽ cập nhật luôn giỏ hàng khi hàm setupEventTaiKhoan chạy
            location.assign("index.html");
            return false;
        }
    }

    // Đăng nhập vào admin

    for (var ad of adminInfo) {
        console.log(ad);
        if (equalUser(newUser, ad)) {
            checkCurrentUser();
            CurrentUser.push(ad);
            setCurrentUser(CurrentUser);
            ham();
            alert('Welcome admin ...');
            window.localStorage.setItem('admin', true);
            window.location.assign('admin.php');
            return false;
        }
    }

    // Trả về thông báo nếu không khớp
    alert('You enter bad name or password. Please react !!!');
    form.username.focus();
    return false;
}


function checkCurrentUser() {
    if ("CurrentUser" in localStorage) {} else {
        setCurrentUser(CurrentUser);

    }
}
// Hàm khởi tạo, tất cả các t
function ham() {
        document.getElementById("ten").style.display = "block";
        document.getElementById("thanh3").style.display = "block";
        document.getElementById("thanh4").style.display = "block";
        document.getElementById("thanh1").style.display = "none";
        document.getElementById("thanh2").style.display = "none";
}
function logout() {
    var listUser = [];
    checkCurrentUser();
    listUser = getCurrentUser()
    if (listUser.length > 0) {
        var kt = confirm("Are you sure you want to log out ??");
        if (kt == true) {
            localStorage.removeItem('CurrentUser');
            window.location.assign('index.html');
        }
    } else { window.location.assign('login.html'); }
}

function so(u1, u2) {
    return (u1.user == u2.user && u1.email == u2.email);
}

function forgot() {
    var listUser = [];
    var content = 0;
    check();
    listUser = getListAccounts()
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var newUser = {};
    newUser.user = user;
    newUser.email = email;
    var title = "Your password is !!! ";
    for (var u of listUser) {
        if (so(newUser, u)) {
            content = u.pass;
        }
    }
    if (content != 0) {
        Email.send({
            SecureToken: "772f25a1-9609-42f8-abc1-3a05d2919e4a",
            To: email,
            From: "hangqt3621@gmail.com",
            Subject: title,
            Body: content

        }).then(
            message => alert("Mail successfully sent")

        );
    } else {
        alert(
            "Your mail was wrong !!!"
        );
    }

}


var listTours = [{
        "id": "1",
        "name": "hhhhhhhh",
        "price": -167772160,
        "from": "ai lớp du",
        "detail": "I love you",
        "img": "sapa.jpg"
    },
    {
        "id": "4",
        "name": "dfbdh",
        "price": 346346,
        "from": "Da Nang to Hoi An",
        "detail": "Hiiii",
        "img": "99-thuyen_hoa.jpg"
    },
    {
        "id": "5",
        "name": "dhdfh",
        "price": 436456,
        "from": "Da Nang to Hoi An",
        "detail": "Hiiii",
        "img": "anh-1-160161747022091907963.jpg"
    },
    {
        "id": "6",
        "name": "dfbdh",
        "price": "6436",
        "from": "Da Nang to Hoi An",
        "detail": "",
        "img": "gioi-thieu-sun-world-ba-na-hills-3-scaled.jpg"
    }
]

function checkTours() {
    if ("listTours" in localStorage) {} else {
        setListTours(listTours);
    }
}

function getListTours() {
    return JSON.parse(window.localStorage.getItem("listTours"));
}

function setListTours(listTours) {
    localStorage.setItem('listTours', JSON.stringify(listTours));
}
checkTours();
var listCart = [];

function checkCart() {
    if ("listCart" in localStorage) {} else {
        setListCart(listCart);
    }
}

function getListCart() {
    return JSON.parse(window.localStorage.getItem("listCart"));
}

function setListCart(listTours) {
    localStorage.setItem('listCart', JSON.stringify(listCart));
}
checkCart();

function showCart() {
    var tour_hot = [];
    var tong = 0;
    callAPI(`tour_hot`, "GET", null).then((res) => {
        tour_hot = res.data;
        console.log(tour_hot)
        var listUser = [];
        check();
        listUser = getListAccounts();
        var listUser2 = [];
        checkCurrentUser();
        listUser2 = getCurrentUser()
        for (var u of listUser) {
            if (u.user == listUser2[0].user) {
                for (var k in u.cart) {
                    var j = u.cart[k];
                    console.log(j)
                    for (var i in tour_hot) {
                        if (tour_hot[i].id == j) {
                            tong = tong + parseInt(tour_hot[i].price);
                            let row = "";
                            row += "<tr >";
                            row += "<td>" + `<img src = 'images/${tour_hot[i].img}' style = "width: 100px; height: 100px;">` + "</td>";
                            row += "<td>" + tour_hot[i].name + "</td>";
                            row += "<td>" + tour_hot[i].price + "</td>";
                            row += "<td>" + tour_hot[i].from + "</td>";
                            row += "<td>" + '<input class="form-control text-center" id="amount" value="1" type="number">' + "</td>";
                            row += "<td>" + tour_hot[i].price + "</td>";
                            row += "<td>" + `<button type="button" onclick="deletehot(${tour_hot[i].id})" class="btn btn-danger">Delete</button>` + "</td>";
                            row += "</tr>";
                            document.getElementById("cart").innerHTML += row;
                        }

                    }

                }
            }
        }
        document.getElementById("tong").innerHTML = tong;
    });
}
//   }
//     }
// }
showCart();

function deletehot(id) {
    var r = confirm("Are you sure you want to delete?");
    if (r === true) {
        var listUser = [];
        check();
        listUser = getListAccounts();
        var listUser2 = [];
        console.log(listUser)

        checkCurrentUser();
        listUser2 = getCurrentUser()
        console.log(listUser2)
        for (var u in listUser) {
            if (listUser[u].user == listUser2[0].user) {
                for (var k in listUser[u].cart) {
                    if (listUser[u].cart[k] == id) {
                        console.log(listUser[u].cart[k])
                        listUser[u].cart.splice(k, 1);
                        setListAccounts(listUser);
                        window.location.reload();
                    }
                }
            }
        }
        alert("Delete successful!");
    } else {
        window.location.href = "cart.html";
    }
}