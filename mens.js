let bannerData = [
  "https://images.bewakoof.com/uploads/grid/app/Static-JustArrived-Cargo-men-1658250092.gif",
  "https://images.bewakoof.com/uploads/grid/app/undrdawg-homepage-revised-1658327775.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Oversized-Tshirts-Men-1658129216.gif",
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
  "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1658305788.gif",
  "https://images.bewakoof.com/uploads/grid/app/bestsellers-thumbnail-1657631910.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-arrival-thumbnail-1657631913.jpg",
  "https://images.bewakoof.com/uploads/grid/app/customisation-thumbnail-1657631911.jpg",
  "https://images.bewakoof.com/uploads/grid/app/last-size-thumbnail-1657631912.jpg",
  "https://images.bewakoof.com/uploads/grid/app/plus-size-thumbnail-1657631915.jpg",
  "https://images.bewakoof.com/uploads/grid/app/merch-store-thumbnail-1657631913.jpg",
  "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1657631916.jpg",
  "https://images.bewakoof.com/uploads/grid/app/personal-care-thubnail-1657631915.jpg",
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
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shoes-1657526331.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Bags-1657526325.jpg",
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
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-B2599-Men-1658240220.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sweatshirts---Hoodies-Men-1657788986.jpg",
  "https://images.bewakoof.com/uploads/grid/app/mid-banner-clearance---Copy-1658322427.jpg",
  "https://images.bewakoof.com/uploads/grid/app/meshirt-men-1656488700.jpg",
];

let disountPeDiscount = document.querySelector("#discount-pe-discount");

disountPeDiscountData.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  disountPeDiscount.append(div);
});

let bestSellerForMenData = [
  {
    image:
      "https://images.bewakoof.com/t320/men-s-black-peace-seeker-typography-oversized-t-shirt-502331-1655810546-1.jpg",
    price: 599,
    originalPrice: 1299,
  },
  {
    image:
      "https://images.bewakoof.com/t320/men-s-white-karma-circles-typography-oversized-t-shirt-489752-1656144467-1.jpg",
    price: 599,
    originalPrice: 1049,
  },
  {
    image:
      "https://images.bewakoof.com/t320/voyage-oversized-fit-t-shirt-520745-1658295402-1.jpg",
    price: 499,
    originalPrice: 1299,
  },
  {
    image:
      "https://images.bewakoof.com/t320/men-s-black-find-your-inner-minion-graphic-printed-oversized-t-shirt-504267-1655797669-1.jpg",
    price: 599,
    originalPrice: 1299,
  },
  {
    image:
      "https://images.bewakoof.com/t320/men-s-blue-peace-not-war-oversized-t-shirt-479634-1656191303-1.jpg",
    price: 599,
    originalPrice: 1049,
  },
];

let bestSellerForMen = document.querySelector("#best-seller-for-men");

bestSellerForMenData.forEach(function (elem) {
  let div1 = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem.image;
  let price = document.createElement("p");
  price.innerText = "₹" + elem.price;
  price.style.fontWeight = "bold";
  let originalPrice = document.createElement("p");
  originalPrice.innerText = "₹" + elem.originalPrice;
  originalPrice.style.textDecoration = "line-through";
  let div2 = document.createElement("div");
  div2.append(price, originalPrice);
  div1.append(image, div2);
  bestSellerForMen.append(div1);
});

let banner2Data = [
  "https://images.bewakoof.com/uploads/grid/app/clearance-zone-tshirt-1657884720.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Buy2get1-1x1-common-1658240220.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Static-JustArrived-Cargo-men-1658250092.gif",
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
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-tees---Copy-1658123486.jpg",
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-bboxers2-1658294222.jpg",
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-shirts-1658123485.jpg",
  "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-sliders-1658123485.jpg",
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
  "https://images.bewakoof.com/t320/men-s-blue-t-shirt-271438-1655748128-1.jpg",
  "https://images.bewakoof.com/t320/load-game-adjustable-strap-men-slider-373620-1656138694-1.jpg",
  "https://images.bewakoof.com/t320/meteor-grey-full-sleeve-t-shirt-211959-1655747957-1.jpg",
  "https://images.bewakoof.com/t320/men-s-black-iron-man-arc-t-shirt-472728-1656150990-1.jpg",
  "https://images.bewakoof.com/t320/men-s-blue-t-shirt-115-1655747790-1.jpg",
];

let clearance = document.querySelector("#clearance");

clearanceData.forEach(function (elem) {
  let image = document.createElement("img");
  image.src = elem;
  clearance.append(image);
});

let stupidData = [
  "https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-men-1657003958.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-jackets-men-1657872392.jpg",
  "https://images.bewakoof.com/uploads/grid/app/unnamed-1657696177.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Full-Sleeves-Men-1658308584.jpg",
];

let stupid = document.querySelector("#stupid");

stupidData.forEach(function (elem) {
  let image = document.createElement("img");
  image.src = elem;
  stupid.append(image);
});
