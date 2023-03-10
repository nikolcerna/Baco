const wineShop = [
  {
    name: "Château Margaux",
    region: "Bordeaux",
    country: "France",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2015,
    price: 19.99
  },
  {
    name: "Opus One",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2016,
    price: 29.99
  },
  {
    name: "Vega Sicilia Unico",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2011,
    price: 39.99
  },
  {
    name: "Sassicaia",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2016,
    price: 29.99
  },
  {
    name: "Château Margaux",
    region: "Bordeaux",
    country: "France",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2015,
    price: 49.99
  },
  {
    name: "Opus One",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2016,
    price: 49.99
  },
  {
    name: "Vega Sicilia Unico",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2011,
    price: 49.99
  },
  {
    name: "Sassicaia",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2016,
    price: 39.99
  },
  {
    name: "Château Margaux",
    region: "Bordeaux",
    country: "France",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2015,
    price: 49.99
  },
  {
    name: "Opus One",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2016,
    price: 59.99
  },
  {
    name: "Vega Sicilia Unico",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2011,
    price: 49.99
  },
  {
    name: "Sassicaia",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2016,
    price: 39.99
  }
];

function getWineInfo(i) {
  if (i < 0 || i >= wineShop.length) {
    return "Invalid index";
  }
  return wineShop[i];
}


function addProductDetailInfo() {
	product = getWineInfo( localStorage.getItem("current_product_detail_page_num") - 1);
	document.getElementById("wine_name").innerText = product.name;
	document.getElementById("wine_price").innerText = "$" + product.price;
	document.getElementById("wine_type").innerText = product.type;
	document.getElementById("wine_country").innerText = product.country;
	document.getElementById("wine_year").innerText = product.vintage;
	document.getElementById("wine_brand").innerText = product.brand;
	document.getElementById("wine_image").src = "img/wine_" + localStorage.getItem("current_product_detail_page_num") + ".webp";
}


function addAllHomepageProductInfo() {
  var i = 1;
  wineShop.forEach(element => {
    addHomepageProductInfo(element, i);
    i = i + 1;
  });
}

function addHomepageProductInfo(product, i) {
	document.getElementById("product_"+ i + "_wine_name").innerText = product.name;
	document.getElementById("product_"+ i + "_wine_type").innerText = product.type;
	document.getElementById("product_"+ i + "_wine_from").innerText = product.country;
	/*document.getElementById("product_"+ i + "_wine_country").innerText = product.country;*/
	document.getElementById("product_"+ i + "_wine_price").innerText = product.price;
	// document.getElementById("wine_image").src = "img/wine_" + (i + 1) + ".webp";
}


function setCurrentProductDetailPage(i) {
  localStorage.setItem("current_product_detail_page_num", i);
}