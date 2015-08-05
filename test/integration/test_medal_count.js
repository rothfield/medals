
// Integration test using casperjs
// TODO: port to clojurescript

function checkSortOrder(test,myThis,expected,msg) {
		// check sort order by looking at country codes
		var ary= myThis.getElementsInfo("div.countryRow div.colCountryCode");
		var actual= ary.map(function(x) {
				return x.text;
		})
		test.assertEquals(actual,expected, msg);
}

var utils = require('utils');
casper.options.viewportSize = {width: 700, height: 600};
casper.options.waitTimeout= 20000;
casper.test.begin('Test sort order of medals.json', 11, function suite(test) {
		casper.start("http://localhost:8000/", function() {
				this.waitForSelector("div.countryRow", function() {
						checkSortOrder(test,this,
													 ["RUS","NOR","CAN","USA","NED","GER","SUI","BLR","AUT","FRA"],
													 "gold first line expected values"); 
													 test.assertTitle("Medal Count", "title is the one expected");
													 test.assertExists('div.medalCountTable', "main div is found");
													 test.assertExists('div.colMedalClass.bronze', "bronze div found");
													 test.assertExists('div.colMedalClass.silver', "silver div found");
													 test.assertExists('div.colMedalClass.gold', "gold div found");
													 test.assertExists('div.colTotal', "total div found");
													 casper.captureSelector("initial.png" , "div.medalCountTable");
				})
		});
		casper.then(function() {
				this.click("div.colMedalClass.bronze");
				this.waitForSelector(
						".colMedalClass.currentSort.bronze", 
						function() {
								checkSortOrder(test,this,
															 ["USA","NOR","RUS","NED","FRA","SWE","ITA","CAN","GER","AUT"],
															 "sorted by bronze first line expected values"); 
															 casper.captureSelector("bronze.png" , "div.medalCountTable");
						});
		});
		casper.then(function() {
				this.click("div.colMedalClass.silver");
				this.waitForSelector(".colMedalClass.currentSort.silver", 
														 function() {
																 checkSortOrder(test,this,
																								["RUS","CAN","AUT","USA","NED","SWE","GER","NOR","FRA","CHN"],
																								"sorted by silver first line expected values"); 
																								casper.captureSelector("silver.png" , "div.medalCountTable");
														 });
		});
		casper.then(function() {
				this.click("div.colMedalClass.gold");
				this.waitForSelector(".colMedalClass.currentSort.gold", 
														 function() {
																 checkSortOrder(test,this,
																								["RUS","NOR","CAN","USA","NED","GER","SUI","BLR","AUT","FRA"],
																								"gold first line expected values"); 

																								casper.captureSelector("gold.png" , "div.medalCountTable");
														 });
		});
		casper.then(function() {
				this.click("div.colTotal");
				this.waitForSelector(".colTotal.currentSort", 
														 function() {
																 checkSortOrder(test,this,
																								["RUS","USA","NOR","CAN","NED","GER","AUT","FRA","SWE","SUI"],	
																								"sorted by total first line expected values"); 
																								casper.captureSelector("total.png" , "div.medalCountTable");
														 });
		});
		casper.run(function() {
				test.done();
		});
});
