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

function cart() {

}