const wineShop = [
  {
    name: "Chateau de la Lune",
    region: "Bordeaux",
    country: "France",
    type:"Champagne",
    brand:"Emmanuel Rouget",
    vintage: 2015,
    price: 88.70
  },
  {
    name: "Luminous Blanc",
    region: "Napa Valley",
    country: "USA",
    type:"White",
    brand:"Emmanuel Rouget",
    vintage: 2010,
    price: 26.0
  },
  {
    name: "Vega Sicilia Unico",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2011,
    price: 32.99
  },
  {
    name: "Sassicaia",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 1999,
    price: 27.99
  },
  {
    name: "Château Margaux",
    region: "Bordeaux",
    country: "France",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2015,
    price: 25.60
  },
  {
    name: "Opus One",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2004,
    price: 340.0
  },
  {
    name: "Sauvignon Blanc",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2011,
    price: 49.99
  },
  {
    name: "Trebbiano Toscano",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2008,
    price: 40.00
  },
  {
    name: "Pinot Noir",
    region: "Bordeaux",
    country: "France",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2007,
    price: 62.0
  },
  {
    name: "Merlot",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2015,
    price: 109.00
  },
  {
    name: "Cabernet Sauvignon",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2002,
    price: 649.30
  },
  {
    name: "Tempranillo",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Emmanuel Rouget",
    vintage: 2019,
    price: 39.54
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

function addCountryProductInfo(country) {
  var i = 1;
  wineShop.filter(wine => wine.country === country)
          .forEach(element =>  {
            addHomepageProductInfo(element, i);
            i = i + 1;
        })
}

function addHomepageProductInfo(product, i) {
	document.getElementById("product_"+ i + "_wine_name").innerText = product.name;
	document.getElementById("product_"+ i + "_wine_type").innerText = product.type + " wine";
	document.getElementById("product_"+ i + "_wine_from").innerText = "from " + product.country;
	/*document.getElementById("product_"+ i + "_wine_country").innerText = product.country;*/
	document.getElementById("product_"+ i + "_wine_price").innerText = product.price + " $";
	// document.getElementById("wine_image").src = "img/wine_" + (i + 1) + ".webp";
}

function onClickAddtoBasket2(price, n , name) {
	var basketItemsMap = getBasketMap()
	
	var num = n 
	var totalPrice = price * num;

	var originNum = basketItemsMap.get(name);
	if (originNum != null && originNum !== undefined) {
		num = num + originNum.num
		totalPrice = price * num
	}

	basketItemsMap.set(name, {
		num: num,
		price:"$" + price,
		name : name,
		totalPrice: "$" + totalPrice 
	})
	saveBasketMap(basketItemsMap);
	alert("Add to basket successfully!");
  }

  
function addItemtoBasketById(i) {
  var wineInfo = getWineInfo(i-1)
	onClickAddtoBasket2(wineInfo.price, 1 , wineInfo.name)
}

function setCurrentProductDetailPage(i) {
  localStorage.setItem("current_product_detail_page_num", i);
}

function changeColor(){ //for later use

  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Change the color of the clicked button to red
      btn.style.color = "#756e62";
  
      // Reset the color of the other buttons
      filterBtns.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.style.color = '';
        }
      });
    });
  });
  

}



