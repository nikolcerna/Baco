const wineShop = [
  {
    name: "Chateau de la Lune",
    region: "Bordeaux",
    country: "France",
    type:"Champagne",
    brand:"Château de la Belle Vue",
    vintage: 2015,
    price: 19.99
  },
  {
    name: "Luminous Blanc",
    region: "Napa Valley",
    country: "USA",
    type:"White",
    brand:"Coastal Vines Winery",
    vintage: 2016,
    price: 29.99
  },
  {
    name: "Barcelona Blanca",
    region: "Ribera del Duero",
    country: "Spain",
    type:"White",
    brand:"Bodega del Sol",
    vintage: 2011,
    price: 39.99
  },
  {
    name: "Villa Rosa",
    region: "Tuscany",
    country: "Italy",
    type:"Rosé",
    brand:"Bellavista Vineyards",
    vintage: 2016,
    price: 29.99
  },
  {
    name: "Rosé de Reims",
    region: "Bordeaux",
    country: "France",
    type:"Champagne",
    brand:"La Maison des Vignes",
    vintage: 2015,
    price: 49.99
  },
  {
    name: "Celestial Bubbles",
    region: "Napa Valley",
    country: "USA",
    type:"Champagne",
    brand:"Redwood Cellars",
    vintage: 2016,
    price: 49.99
  },
  {
    name: "Sangria Sunset",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Cava del Rey",
    vintage: 2011,
    price: 49.99
  },
  {
    name: "Sorrento Verde",
    region: "Tuscany",
    country: "Italy",
    type:"White",
    brand:"La Strada del Vino",
    vintage: 2016,
    price: 39.99
  },
  {
    name: "Provence Pink",
    region: "Bordeaux",
    country: "France",
    type:"Rosé",
    brand:"Domaine de la Roche",
    vintage: 2015,
    price: 49.99
  },
  {
    name: "Napa Noir",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Sonoma Hills Vineyard",
    vintage: 2016,
    price: 59.99
  },
  {
    name: "Marbella Blush",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Rosé",
    brand:"Rioja Real Vineyards",
    vintage: 2011,
    price: 49.99
  },
  {
    name: "Sicilian Sunset",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Montepulciano Estate",
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
	document.getElementById("wine_image").src = "img/wine_" + localStorage.getItem("current_product_detail_page_num") + ".png";
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



