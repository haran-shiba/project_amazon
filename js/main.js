console.log("JavaScript connected");
const addressButton = document.getElementById("addressButton");
const addressPopup = document.getElementById("addressPopup");
const closePopup = document.getElementById("closePopup");
const overlay = document.getElementById("overlay");

// 開く
addressButton.addEventListener("click", function(){
    addressPopup.style.display = "block";
    overlay.style.display = "block";
});

// ×で閉じる
closePopup.addEventListener("click", function(){
    addressPopup.style.display = "none";
    overlay.style.display = "none";
});

// 黒い背景をクリックして閉じる
overlay.addEventListener("click", function(){
    addressPopup.style.display = "none";
    overlay.style.display = "none";
});

// 選択するリストの国表示
const countryButton = document.getElementById("countryButton");
const countryList = document.getElementById("countryList");

countryButton.addEventListener("click", function(){
    countryList.style.display = "block";
});
const addressTopText = document.getElementById("addressTopText");
const addressMainText = document.getElementById("addressMainText");
const countryItems = document.querySelectorAll(".country-item");

countryItems.forEach(function(item){
    item.addEventListener("click", function(){

        addressTopText.textContent = "お届け先";
        addressMainText.textContent = item.textContent;

        countryList.style.display = "none";
        addressPopup.style.display = "none";
        overlay.style.display = "none";

    });
});
const searchForm = document.getElementById("searchForm");
const categoryBox = document.getElementById("categoryBox");
const categoryLabel = document.getElementById("categoryLabel");
const categorySearch = document.getElementById("categorySearch");

categorySearch.addEventListener("change", function(){
    categoryLabel.textContent = categorySearch.options[categorySearch.selectedIndex].text;

    const newWidth = categoryLabel.scrollWidth + 40;

    categoryBox.style.width = newWidth + "px";

    searchForm.classList.add("active");
});

const languageWrap = document.querySelector(".language-wrap");
const languagePopup = document.querySelector(".language-popup");

const loginWrap = document.querySelector(".login-wrap");
const accountPopup = document.querySelector(".account-popup");

function showPopup(popup){
    popup.style.display = "block";
    overlay.style.display = "block";
}

function hidePopup(popup){
    popup.style.display = "none";
    overlay.style.display = "none";
}

// JP
languageWrap.addEventListener("mouseenter", function(){
    showPopup(languagePopup);
});

languageWrap.addEventListener("mouseleave", function(){
    hidePopup(languagePopup);
});

// アカウント
loginWrap.addEventListener("mouseenter", function(){
    showPopup(accountPopup);
});

loginWrap.addEventListener("mouseleave", function(){
    hidePopup(accountPopup);
});

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const sideMenuClose = document.getElementById("sideMenuClose");

menuButton.addEventListener("click", function(){
    sideMenu.classList.add("active");
    sideMenuClose.classList.add("active");
    overlay.style.display = "block";
});

sideMenuClose.addEventListener("click", function(){
    sideMenu.classList.remove("active");
    sideMenuClose.classList.remove("active");
    overlay.style.display = "none";
});