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
