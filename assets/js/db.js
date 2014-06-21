var calDB = (function() {
	var tDB = {};
	var database = null;

	tDB.open = function(callback) {

		var version = 1;
		var request = indexedDB.open('calorieDB', version);


		request.onupgradeneeded = function(e) {
			var db = e.target.result;

			e.target.transaction.onerror = tDB.onerror;


			if (db.objectStoreNames.contains('foods')) {
				db.deleteObjectStore('foods');
			}


			var store = db.createObjectStore('foods', {
				keyPath: 'timestamp'
			});
		};


		request.onsuccess = function(e) {

			database = e.target.result;


			callback();
		};


		request.onerror = tDB.onerror;
	};


	tDB.fetchTodaysFoods = function(callback){
		var db = database;
		var transaction = db.transaction(['foods'], 'readwrite');
		var objStore = transaction.objectStore('foods');
		var todayZeroHour = (new Date()).setHours(0,0,0,0);
		console.log(todayZeroHour);

		var keyRange = IDBKeyRange.lowerBound(todayZeroHour);
		var cursorRequest = objStore.openCursor(keyRange);

		var foods = [];

		transaction.oncomplete = function(e) {

			callback(foods);
		};

		cursorRequest.onsuccess = function(e) {
			var result = e.target.result;

			if (!!result == false) {
				return;
			}

			foods.push(result.value);

			result.continue();
		};

		cursorRequest.onerror = tDB.onerror;

	};

	tDB.fetchFoods = function(callback) {
		var db = database;
		var transaction = db.transaction(['foods'], 'readwrite');
		var objStore = transaction.objectStore('foods');

		var keyRange = IDBKeyRange.lowerBound(0);
		var cursorRequest = objStore.openCursor(keyRange);

		var foods = [];

		transaction.oncomplete = function(e) {

			callback(foods);
		};

		cursorRequest.onsuccess = function(e) {
			var result = e.target.result;

			if (!!result == false) {
				return;
			}

			foods.push(result.value);

			result.continue();
		};

		cursorRequest.onerror = tDB.onerror;
	};

	tDB.addFoodEntry = function(foodDesc, calorie, callback) {
		
		var db = database;

		
		var transaction = db.transaction(['foods'], 'readwrite');

		
		var objStore = transaction.objectStore('foods');


		var timestamp = new Date().getTime();


		var foodEntry = {
			'foodDesc': foodDesc,
			'calorie': calorie,
			'timestamp': timestamp
		};


		var request = objStore.put(foodEntry);


		request.onsuccess = function(e) {

			callback(foodEntry);
		};


		request.onerror = tDB.onerror;
	};


	tDB.deleteFoodEntry = function(id, callback) {
		var db = database;
		var transaction = db.transaction(['foods'], 'readwrite');
		var objStore = transaction.objectStore('foods');

		var request = objStore.delete(id);

		request.onsuccess = function(e) {
			callback();
		}

		request.onerror = function(e) {
			console.log(e);
		}
	};



	return tDB;
}());