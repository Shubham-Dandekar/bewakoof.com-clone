let women = document.querySelector("#tab-navbar > :nth-child(2)");
women.style.fontWeight = "bold";
let bannerData = [
  "https://images.bewakoof.com/uploads/grid/app/weekend-sale-women-new-1658468289.jpg",
  "https://images.bewakoof.com/uploads/grid/app/bf-tee-women-1658468286.jpg",
  "https://images.bewakoof.com/uploads/grid/app/b1g1-women-new-1658468283.jpg",
];

let banner = document.querySelector("#banner");

bannerData.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  banner.append(div);
});

let categoryData = [
  "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Women-1658480172.jpg",
  "https://images.bewakoof.com/uploads/grid/app/bests-sellers-women-1657696851.jpg",
  "https://images.bewakoof.com/uploads/grid/app/women-new-arrival--1657696857.jpg",
  "https://images.bewakoof.com/uploads/grid/app/custom-wonmen-1657696851.jpg",
  "https://images.bewakoof.com/uploads/grid/app/last-size-women-1657696853.jpg",
  "https://images.bewakoof.com/uploads/grid/app/plus-size-women-1657696854.jpg",
  "https://images.bewakoof.com/uploads/grid/app/merch-store-women-1657696853.jpg",
  "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1657696856.jpg",
  "https://images.bewakoof.com/uploads/grid/app/pc-women-1657696854.jpg",
];

let category = document.querySelector("#category");

categoryData.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  category.append(div);
});

let popularCategoryData = [
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-BoyfriendTees-1657527656.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-FashionTops-1657527658.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-OversizedTees-1657527660.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Dresses-1657527657.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PJs-1657527660.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Joggers-1657527659.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Shorts-1657527662.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Jeans-1657527659.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Covers-1657527657.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Boxers-1657527655.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Bagss-1657534528.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PrrintedTees-1657527661.jpg",
];

let popularCategory = document.querySelector("#popular-category");

popularCategoryData.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  popularCategory.append(div);
});

let disountPeDiscountData = [
  "https://images.bewakoof.com/uploads/grid/app/midsize-banner-buy2shorts-common-1658475318.jpg",
  "https://images.bewakoof.com/uploads/grid/app/midsize-banner-buy2boxers-common-1658475318.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sweatshirts---Hoodies-Women-1657788986.jpg",
  "https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-women-1657003959.jpg",
];

let disountPeDiscount = document.querySelector("#discount-pe-discount");

disountPeDiscountData.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  disountPeDiscount.append(div);
});

let bestSellerForWomenData = [
  {
    image:
      "https://images.bewakoof.com/t320/voyage-boyfriend-t-shirt-520743-1658295262-1.jpg",
    price: 299,
    originalPrice: 999,
  },
  {
    image:
      "https://images.bewakoof.com/t320/women-s-black-space-space-typography-oversized-t-shirt-493391-1655750788-1.jpg",
    price: 599,
    originalPrice: 1299,
  },
  {
    image:
      "https://images.bewakoof.com/t320/foodie-oversized-fit-t-shirt-520742-1658344182-1.jpg",
    price: 499,
    originalPrice: 1299,
  },
  {
    image:
      "https://images.bewakoof.com/t320/beyond-infinity-boyfriend-t-shirt-520755-1658295300-1.jpg",
    price: 299,
    originalPrice: 999,
  },
  {
    image:
      "https://images.bewakoof.com/t320/voyage-oversized-fit-t-shirt-520740-1658295225-1.jpg",
    price: 499,
    originalPrice: 1299,
  },
];

let bestSellerForWomen = document.querySelector("#best-seller-for-women");

bestSellerForWomenData.forEach(function (elem) {
  let div1 = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem.image;
  let price = document.createElement("p");
  price.innerText = "₹" + elem.price;
  price.style.fontWeight = "bold";
  let originalPrice = document.createElement("p");
  originalPrice.innerText = "₹" + elem.originalPrice;
  originalPrice.style.textDecoration = "line-through";
  originalPrice.style.color = "#949494";
  originalPrice.style.fontSize = "14px";
  originalPrice.style.marginTop = "18px";
  let div2 = document.createElement("div");
  div2.append(price, originalPrice);
  div1.append(image, div2);
  bestSellerForWomen.append(div1);
});

let banner2Data = [
  "https://images.bewakoof.com/uploads/grid/app/clearance-women---Copy-1658475317.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Static-JustArrived-Disney-women-1658250093.gif",
  "https://images.bewakoof.com/uploads/grid/app/minion-homepage-women-1658140993.jpg",
];

let banner2 = document.querySelector("#banner-2");

banner2Data.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  banner2.append(div);
});

let bargainData = [
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-w-tees---Copy-1658123807.jpg",
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-w-boxers---Copy-1658123806.jpg",
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-w-varsity-tees-1658123808.jpg",
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-w-sliders-1658123807.jpg",
];

let bargain = document.querySelector("#bargain");

bargainData.forEach(function (elem) {
  // let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  // div.append(image);
  bargain.append(image);
});

let clearanceData = [
  "https://images.bewakoof.com/t320/women-s-black-food-bear-boyfriend-t-shirt-392142-1655810977-5.jpg",
  "https://images.bewakoof.com/t320/women-s-black-dope-shit-typography-boyfriend-t-shirt-486586-1655749653-1.jpg",
  "https://images.bewakoof.com/t320/women-s-purple-sundays-we-do-nothing-graphic-printed-boyfriend-t-shirt-505581-1655817269-1.jpg",
  "https://images.bewakoof.com/t320/women-s-black-t-shirt-105769-1655748001-5.jpg",
  "https://images.bewakoof.com/t320/women-s-black-friends-typography-boyfriend-t-shirt-234669-1655810556-4.jpg",
];

let clearance = document.querySelector("#clearance");

clearanceData.forEach(function (elem) {
  let image = document.createElement("img");
  image.src = elem;
  clearance.append(image);
});

let stupidData = [
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-jackets-women-1657872393.jpg",
  "https://images.bewakoof.com/uploads/grid/app/meshirt-women-1656488700.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Joggers-Women-1658308584.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Pyjamas-Women-1658122291.jpg",
];

let stupid = document.querySelector("#stupid");

stupidData.forEach(function (elem) {
  let image = document.createElement("img");
  image.src = elem;
  stupid.append(image);
});
