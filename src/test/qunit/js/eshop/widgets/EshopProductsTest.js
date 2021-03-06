/*global require */

require ( [ "jquery", "./Products", "./EShopAPI", "./WSConfig", "qunit" ] , function($, Products, EShopAPI, WSConfig, QUnit) {

	var equal = QUnit.equal, expect = QUnit.expect, notEqual = QUnit.notEqual, testProductsWithSameCategoryId = QUnit.test, testProductsWithDiffCategoryId = QUnit.test, self = this, api, output1, output2, productsobj, wsconfig, categoryId, searchCriteria, searchData, callback;

		testProductsWithSameCategoryId(" Test products using same category Id " , function() {
	
		// Setup view and call method under test
		productsobj = new Products();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
		productsobj.api = api;
		productsobj.categoryId =1;
		productsobj.searchCriteria =undefined;

		output1 = productsobj.renderUI();
		
		var self = this,
		mainContent = $('<div></div>'),
		topH3 = $('<h3>Products</h3>'),
		navUL = $('<ul></ul>'),
		categoryId = 1;
		//searchCriteria = undefined;
		
		api.getAllProducts(categoryId, function(jsonObject){
			var productList = jsonObject,
			i, product, innerLi, innerDiv1, innerDiv2, productNamelink,
			productPriceDiv, productButtonDiv, ahref1, ahref2, data,
			newproducts = productList.product.length;

			for (i = 0; i < newproducts; i++) {
				product = jsonObject.product[i];
				innerLi = $('<li></li>');
				innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="'+api.wsURLWithoutContext+'/images/web/'+product.image+'" alt=""></a></div>');
				innerDiv2 = $('<div class="info"></div>');
				productNamelink = $('<a class="title2" href="#">'+product.name+'</a>');
				productPriceDiv = $('<div class="price"><span class="st">Our price:</span><strong>$'+product.listPrice+'</strong><br><span class="st2">Sell at:</span><span class="st3">$'+product.sellPrice+'</span></div></div>');
				productButtonDiv = $('<div class="actions">');
				ahref1 = $('<a href="#">Details</a>');
				ahref2 = $('<a href="#">Add to cart</a>');
				data = {};
				data.productId = product.id;
				data.name = product.name;
				data.quantity = 1;
				data.price = product.sellPrice;
				data.image = product.image;
				data.totalPrice = (data.quantity * product.sellPrice);
				productButtonDiv.append(ahref1);
				productButtonDiv.append(ahref2);
				innerDiv2.append(productNamelink);
				innerDiv2.append(productPriceDiv);
				innerDiv2.append(productButtonDiv);
				innerLi.append(innerDiv1);
				innerLi.append(innerDiv2);
				navUL.append(innerLi);
			}
		});      
		mainContent.append(topH3);     
		mainContent.append(navUL);
		output2 = mainContent.append(navUL);
		equal(output1.html(), output2.html(), "Products List with same category Id --Test case passed");
	});
	
	testProductsWithDiffCategoryId(" Test products using different category Id " , function() {
	
		// Setup view and call method under test
		productsobj = new Products();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
		productsobj.api = api;
		productsobj.categoryId =1;
		productsobj.searchCriteria =undefined;

		output1 = productsobj.renderUI();
		
		var self = this,
		mainContent = $('<div></div>'),
		topH3 = $('<h3>Products</h3>'),
		navUL = $('<ul></ul>'),
		categoryId = 2;
		//searchCriteria = undefined;
		
		api.getAllProducts(categoryId, function(jsonObject){
			var productList = jsonObject,
			i, product, innerLi, innerDiv1, innerDiv2, productNamelink,
			productPriceDiv, productButtonDiv, ahref1, ahref2, data,
			newproducts = productList.product.length;

			for (i = 0; i < newproducts; i++) {
				product = jsonObject.product[i];
				innerLi = $('<li></li>');
				innerDiv1 = $('<div class="img"><a href="javascript:void(0);"><img src="'+api.wsURLWithoutContext+'/images/web/'+product.image+'" alt=""></a></div>');
				innerDiv2 = $('<div class="info"></div>');
				productNamelink = $('<a class="title2" href="#">'+product.name+'</a>');
				productPriceDiv = $('<div class="price"><span class="st">Our price:</span><strong>$'+product.listPrice+'</strong><br><span class="st2">Sell at:</span><span class="st3">$'+product.sellPrice+'</span></div></div>');
				productButtonDiv = $('<div class="actions">');
				ahref1 = $('<a href="#">Details</a>');
				ahref2 = $('<a href="#">Add to cart</a>');
				data = {};
				data.productId = product.id;
				data.name = product.name;
				data.quantity = 1;
				data.price = product.sellPrice;
				data.image = product.image;
				data.totalPrice = (data.quantity * product.sellPrice);
				productButtonDiv.append(ahref1);
				productButtonDiv.append(ahref2);
				innerDiv2.append(productNamelink);
				innerDiv2.append(productPriceDiv);
				innerDiv2.append(productButtonDiv);
				innerLi.append(innerDiv1);
				innerLi.append(innerDiv2);
				navUL.append(innerLi);
			}
		});      
		mainContent.append(topH3);     
		mainContent.append(navUL);
		output2 = mainContent.append(navUL);
		notEqual(output1.html(), output2.html(), "Products List with different category Id -- Test case passed");
	});
});