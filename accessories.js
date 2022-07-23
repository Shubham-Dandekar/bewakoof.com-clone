let bannerData = [
  "https://images.bewakoof.com/uploads/grid/app/slider-new-1658468288.jpg",
  "https://images.bewakoof.com/uploads/grid/app/sale-banner-common-1658485155.jpg",
  "https://images.bewakoof.com/uploads/grid/app/gif-banner-mobile-1658468287.gif",
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
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-bestsellers-1657622402.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-new-arrivals-1657622405.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-official-merch-1657622406.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-mobile-covers-1657622404.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-mobile-grippers-1657622404.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-sliders-1657622407.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-mugs-1657622405.jpg",
  "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-customisation-1657622403.jpg",
  "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1657631916.jpg",
];

let category = document.querySelector("#category");

categoryData.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  category.append(div);
});

let trendingData = [
  {
    image:
      "https://images.bewakoof.com/t320/zipped-it-printed-small-backpack-229513-1655746835-5.jpg",
    price: 249,
    originalPrice: 999,
  },
  {
    image:
      "https://images.bewakoof.com/t320/mickey-face-vs-mickey-face-lightweight-adjustable-strap-women-slider-333712-1655748403-5.jpg",
    price: 349,
    originalPrice: 499,
  },
  {
    image:
      "https://images.bewakoof.com/t320/men-s-dc-christmas-adjustable-slider-444774-1656144777-1.jpg",
    price: 449,
    originalPrice: 1299,
  },
  {
    image:
      "https://images.bewakoof.com/t320/navy-blue-men-s-zig-zag-slider-443086-1655834691-1.jpg",
    price: 399,
    originalPrice: 1349,
  },
  {
    image:
      "https://images.bewakoof.com/t320/steel-blue-plain-small-backpack-229482-1655747863-3.jpg",
    price: 349,
    originalPrice: 499,
  },
];

let trending = document.querySelector("#trending");

trendingData.forEach(function (elem) {
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
  trending.append(div1);
});

let banner2Data = [
  "https://images.bewakoof.com/uploads/grid/app/best-seller-1x1--1658468285.gif",
  "https://images.bewakoof.com/uploads/grid/app/bags-banner-1658468284.jpg",
  "https://images.bewakoof.com/uploads/grid/app/accessories-banner-1658468282.gif",
];

let banner2 = document.querySelector("#banner-2");

banner2Data.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  banner2.append(div);
});

let gangData = [
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1656667081.jpg",
  "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sliders-1656667081.jpg",
];

let gang = document.querySelector("#gang");

gangData.forEach(function (elem) {
  let image = document.createElement("img");
  image.src = elem;
  gang.append(image);
});

let whatNewData = [
  {
    image:
      "https://images.bewakoof.com/t320/space-doodle-adjustable-velcro-women-s-slider-507843-1656603191-1.jpg",
    price: 699,
    originalPrice: 999,
  },
  {
    image:
      "https://images.bewakoof.com/t320/pampy-angel-men-s-white-black-printed-sliders-512814-1655971949-1.JPG",
    price: 349,
    originalPrice: 799,
  },
  {
    image:
      "https://images.bewakoof.com/t320/men-s-brown-casual-shoes-515421-1657173563-1.JPG",
    price: 740,
    originalPrice: 3299,
  },
  {
    image:
      "https://images.bewakoof.com/t320/men-s-white-printed-sliders-516825-1657531150-1.JPG",
    price: 399,
    originalPrice: 1199,
  },
  {
    image:
      "https://images.bewakoof.com/t320/men-s-grey-white-color-block-casual-shoes-516773-1657290595-1.JPG",
    price: 799,
    originalPrice: 1999,
  },
];

let whatNew = document.querySelector("#what-new");

whatNewData.forEach(function (elem) {
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
  whatNew.append(div1);
});

let popularCategoryData = [
  "https://images.bewakoof.com/uploads/grid/app/category-box-mobile-covers-1657542496.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-1657542498.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1657542495.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-flip-flops-1657542496.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-notebook-1657542498.jpg",
  "https://images.bewakoof.com/uploads/grid/app/category-box-casual-shoes-1657542495.jpg",
];

let popularCategory = document.querySelector("#popular-category");

popularCategoryData.forEach(function (elem) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = elem;
  div.append(image);
  popularCategory.append(div);
});
