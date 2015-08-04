// Integration test using casperjs
casper.options.viewportSize = {width: 700, height: 600};
casper.options.waitTimeout= 20000;
casper.test.begin('Test medal count', 6, function suite(test) {
		casper.start("http://localhost:8000/", function() {
				casper.on('resource.requested', function(requestData, networkRequest) {
						var match = requestData.url.match(/medals.json/g);
						if (match != null) {
								console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
								networkRequest.changeUrl('fixtures/zmy_medals.json');
					 	}
				});

				this.waitForSelector("div.countryRow", function() {
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
				this.waitForSelector(".colMedalClass.currentSort.bronze", 
														 function() {
																 casper.captureSelector("bronze.png" , "div.medalCountTable");
														 });
		});
		casper.then(function() {
				this.click("div.colMedalClass.silver");
				this.waitForSelector(".colMedalClass.currentSort.silver", 
														 function() {
																 casper.captureSelector("silver.png" , "div.medalCountTable");
														 });
		});
		casper.then(function() {
				this.click("div.colMedalClass.gold");
				this.waitForSelector(".colMedalClass.currentSort.gold", 
														 function() {
																 casper.captureSelector("gold.png" , "div.medalCountTable");
														 });
		});
		casper.then(function() {
				this.click("div.colTotal");
				this.waitForSelector(".colTotal.currentSort", 
														 function() {
																 casper.captureSelector("total.png" , "div.medalCountTable");
														 });
		});
		casper.run(function() {
				test.done();
		});
});
