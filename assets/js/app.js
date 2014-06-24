
function getDailyCalorieNeed(sex, weight, height, activityLevel, age){

	var BMR;

	if(sex === 'm'){
		BMR = 66 + 13.8 * weight + 5 * height - 6.8 * age;
	} else {
		BMR = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
	}

	return parseInt(BMR * activityLevel);
}


function fireChangeEvent(element){

	var evt = document.createEvent("HTMLEvents");
	evt.initEvent("change", false, true);
	element.dispatchEvent(evt);
}

function runUp () {

	num += 17;
	if (num < maxnum) {
		_bigCalCountH.innerHTML = num;

		if(num > todayCalorieNeed){
			todayTotalCalCount.style.color = "red";
			
			crossedCalLimit = true;
		}

		setTimeout(runUp, 10);


	} else {
		_bigCalCountH.innerHTML = maxnum;

		var btn = document.querySelector('#seeSuggestPage');
		if(crossedCalLimit){
			btn.style.display = 'block';
			btn.className = "animated fadeInDown";	
		}
		
	}

}

function countUp(selector) {

	crossedCalLimit = false;
	_bigCalCountH = document.querySelector(selector);
	maxnum = parseInt(_bigCalCountH.innerHTML);
	_bigCalCountH.innerHTML = "0";
	num = 0;
	todayCalorieNeed = localStorage.todaysCalorieNeed;

	console.log(localStorage.todaysCalorieNeed);
	runUp();
}



function activityRun(){

	activityRunSecond++;

	if(activityRunSecond == 60){
		activityRunSecond = 0;
		activityRunMinute++;
	}

	if (activityRunSecond<10) secString = "0" + activityRunSecond;
	else secString = "" + activityRunSecond;

	if (activityRunMinute<10) minString = "0" + activityRunMinute;
	else minString = "" + activityRunMinute;


	_runningTimer.innerHTML = minString + ":" + secString;

	if(activityRunning){
		setTimeout(activityRun, 1000);
	}

}


function prepareTimer(activityId){


	document.querySelector('#runningActivityName').innerHTML = allActivities[activityId].name_ing;


	activityRunSecond = 0;
	activityRunMinute = 0;

	activityRunning = true;

	runningAvtivityType = activityId;

	_runningTimer.innerHTML = '00:00';

	cpuLock = navigator.requestWakeLock('cpu');

	setTimeout(activityRun, 1000);

}


function finishCurrentActivity(){

	activityRunning = false;

	var burntPerMinutePerkg = allActivities[runningAvtivityType].calorie;

	var minute = activityRunMinute + activityRunSecond/60.0;

	var totalBurnt = burntPerMinutePerkg * minute + parseFloat(localStorage.weight);

	console.log("before: " + localStorage.todaysCalorieNeed);

	localStorage.todaysCalorieNeed = parseInt(localStorage.todaysCalorieNeed) + parseInt(totalBurnt);

	console.log("after: " + localStorage.todaysCalorieNeed);

	console.log('totalBurnt :' + totalBurnt );

	cpuLock.unlock();



}

function showActivityTimer(activity){

	prepareTimer(activity);

	document.querySelector('#confirm').className = 'fade-in';
	
}






function refreshTodaysList(callback, first){

	calDB.fetchTodaysFoods(function (fetchedFoods){
		populateTodayList(fetchedFoods, first);
		callback();
	});
}


function refreshHistory(callback){

	calDB.fetchFoods(function (fetchedFoods){
		populateHistory(fetchedFoods);
		callback();
	});
}

function refreshPreferences(){

	var age = localStorage['age'];
	var sex = localStorage['sex'];
	var height = localStorage['height'];
	var weight = localStorage['weight'];
	var activity = localStorage['activity'];

	_prefAge.value = age;
	_prefHeight.value = height;
	_prefWeight.value = weight;

	if(sex === 'm') _prefSex.options[0].selected = true;
	else _prefSex.options[1].selected = true;

	if(activity === '1.2') _prefActivity.options[0].selected = true;
	if(activity === '1.375') _prefActivity.options[1].selected = true;
	if(activity === '1.55') _prefActivity.options[2].selected = true;
	if(activity === '1.725') _prefActivity.options[3].selected = true;
	if(activity === '1.9') _prefActivity.options[4].selected = true;

}

function populateTodayList(foods, first){

	var html = "";


	todaysTotal = 0;

	for(var i = foods.length-1; i>=0; --i){


		food = foods[i];

		html += '<li>';
		html += '<aside class="pack-end">';
		html += '<div class="liCalCount">';
		html += food.calorie + '<span>KCal</span>';
		html += '</div>';
		html += '</aside>';
		html += '<a href="#">';
		html += '<p>' + food.foodDesc + '</p>';

		timeStr = moment(parseInt(food.timestamp)).startOf('second').fromNow();


		html += '<p>' + timeStr + '</p>';
		html += '</a>';
		html += '</li>';

		todaysTotal += parseInt(food.calorie);
	}



	_todayTotalCalCount.innerHTML = todaysTotal;

	if(todaysTotal > parseInt(localStorage.todaysCalorieNeed) && !first){

		console.log(localStorage.todaysCalorieNeed);


		_todayTotalCalCount.style.color = "red";
		var btn = document.querySelector('#seeSuggestPage');
		btn.style.display = 'block';
		btn.className = "animated fadeInDown";	
		

	}

	_calorieNeedToday.innerHTML = localStorage.todaysCalorieNeed;

	console.log(localStorage.todaysCalorieNeed);
	localStorage['tadaysCalorie'] = todaysTotal;




	_todayFoodList.innerHTML = html;

}




function populateHistory(foods){

	var html = "";


	for(var i = foods.length-1; i>=0; --i){

		console.log(i + " " + foods[i]);

		food = foods[i];

		html += '<li>';
		html += '<aside class="pack-end">';
		html += '<div class="liCalCount">';
		html += food.calorie + '<span>KCal</span>';
		html += '</div>';
		html += '</aside>';
		html += '<a href="#">';
		html += '<p>' + food.foodDesc + '</p>';

		timeStr = moment(parseInt(food.timestamp)).startOf('second').fromNow();


		html += '<p>' + timeStr + '</p>';
		html += '</a>';
		html += '</li>';



	}

	_foodHistory.innerHTML = html;

}


function refreshSuggestions(){

	var today = parseInt(localStorage.tadaysCalorie);
	var max = parseInt(localStorage.todaysCalorieNeed);

	console.log(localStorage.todaysCalorieNeed);

	var diff = today - max;

	_extraCal.innerHTML = diff;

	_swalktime.innerHTML = parseInt((diff / calCosts.s_walk));
	_mwalktime.innerHTML = parseInt((diff / calCosts.m_walk));
	_fwalktime.innerHTML = parseInt((diff / calCosts.f_walk));
	_jogtime.innerHTML = parseInt((diff / calCosts.jog));
	_swimtime.innerHTML = parseInt((diff / calCosts.swim));
	_runtime.innerHTML = parseInt((diff / calCosts.run));
	_cycletime.innerHTML = parseInt((diff / calCosts.cycle));



}


function queryDom(){

	_slFood = document.querySelector("#slFood");
	_slFoodType = document.querySelector("#slFoodType");
	_calPerUnit = document.querySelector("#calPerUnit");
	_unit = document.querySelector("#unit");
	_slFoodAmount = document.querySelector("#slFoodAmount");
	_singleFoodTotal = document.querySelector('#singleFoodTotal');
	_singleFoodTotal = document.querySelector("#singleFoodTotal");
	_btnAddFood = document.querySelector("#btnAddFood");
	_todayFoodList = document.querySelector("#todayFoodList");
	_todayTotalCalCount = document.querySelector("#todayTotalCalCount");
	_foodHistory = document.querySelector("#foodHistory");

	_prefSex = document.querySelector("#prefSex");
	_prefAge = document.querySelector("#prefAge");
	_prefHeight = document.querySelector("#prefHeight");
	_prefWeight = document.querySelector("#prefWeight");
	_prefBtnSave = document.querySelector("#prefBtnSave");
	_prefActivity = document.querySelector("#prefActivity");
	_calorieNeedToday = document.querySelector('#calorieNeedToday');


	_welSex = document.querySelector("#welSex");
	_welAge = document.querySelector("#welAge");
	_welHeight = document.querySelector("#welHeight");
	_welWeight = document.querySelector("#welWeight");
	_welActivity = document.querySelector("#welActivity");
	_btnSaveWelcome = document.querySelector("#btnSaveWelcome");
	


	_extraCal = document.querySelector('#extraCal');
	_swalktime = document.querySelector('#swalktime');
	_mwalktime = document.querySelector('#mwalktime');
	_fwalktime = document.querySelector('#fwalktime');
	_cycletime = document.querySelector('#cycletime');
	_runtime = document.querySelector('#runtime');
	_jogtime = document.querySelector('#jogtime');
	_swimtime = document.querySelector('#swimtime');

	_startswalk = document.querySelector('#startswalk');
	_startmwalk = document.querySelector('#startmwalk');
	_startfwalk = document.querySelector('#startfwalk');
	_startcycle = document.querySelector('#startcycle');
	_startrun = document.querySelector('#startrun');
	_startjog = document.querySelector('#startjog');
	_startswim = document.querySelector('#startswim');

	_runningTimer = document.querySelector('#runningTimer');
	_btnActivityFinish = document.querySelector('#btnActivityFinish');

	_activityStartButtons = document.querySelector('#activityStartButtons');


	tickSound = document.querySelector('#tickSound');

}


function addNavBtnListeners(){

	document.querySelector('#addButtonHome').addEventListener ('click', function (){

		document.querySelector('#addPage').className = 'current';
		document.querySelector('#homePage').className = 'left';
	});

	document.querySelector('#backButtonAdd').addEventListener ('click', function (){

		document.querySelector('#homePage').className = 'current';
		document.querySelector('#addPage').className = 'right';

	});

	document.querySelector('#btnSeeHistory').addEventListener ('click', function (){

		refreshHistory(function(){

			document.querySelector('#historyPage').className = 'current';
			document.querySelector('#homePage').className = 'left';
		});

		
	});


	document.querySelector('#backButtonHistory').addEventListener ('click', function (){

		document.querySelector('#homePage').className = 'current';
		document.querySelector('#historyPage').className = 'right';

	});


	document.querySelector('#btnSeeSettings').addEventListener ('click', function (){


//		tickSound.play();

		refreshPreferences();

		document.querySelector('#settingsPage').className = 'current';
		document.querySelector('#homePage').className = 'left';
	});

	document.querySelector('#backButtonSettings').addEventListener ('click', function (){

		document.querySelector('#homePage').className = 'current';
		document.querySelector('#settingsPage').className = 'right';

	});

	document.querySelector('#seeSuggestPage').addEventListener ('click', function (){

		refreshSuggestions();
		document.querySelector('#suggestPage').className = 'current';
		document.querySelector('#homePage').className = 'left';
	});

	document.querySelector('#backButtonSuggest').addEventListener ('click', function (){


		refreshTodaysList(function(){

			document.querySelector('#homePage').className = 'current';
			document.querySelector('#suggestPage').className = 'right';

		}, false);

		

	});


	document.querySelector('#btnSeeActivities').addEventListener ('click', function (){

		document.querySelector('#activityPage').className = 'current';
		document.querySelector('#homePage').className = 'left';
	});

	document.querySelector('#backButtonActivity').addEventListener ('click', function (){


			document.querySelector('#homePage').className = 'current';
			document.querySelector('#activityPage').className = 'right';

		

	});


	document.querySelector('#addButtonActivity').addEventListener ('click', function (){

		document.querySelector('#action-select-activity').className = 'fade-in';
	});

	document.querySelector('#cancel-action-select-activity').addEventListener ('click', function (){

		document.querySelector('#action-select-activity').className = 'fade-out';
	});



}


function prepareActivityStartButtons(){

	var html = "";

	for(var activityId in allActivities){
		html += '<button id="btnStartActivity_' + activityId + '" ">' + allActivities[activityId].main_name + ' start </button>';


	}

	_activityStartButtons.innerHTML = html + _activityStartButtons.innerHTML;

	for(var activityId in allActivities){

		document.querySelector('#btnStartActivity_' + activityId).addEventListener('click', function(){

			var ac_id = this.id.replace("btnStartActivity_","");

			document.querySelector('#action-select-activity').className = 'fade-out';

			showActivityTimer(ac_id);
			console.log(ac_id + ' started');
		});
	}

	console.log('whoosh');


}

window.onload = function(){



	queryDom();

	calDB.open(function(){
		refreshTodaysList(function(){
			countUp("#todayTotalCalCount");
		}, true);
	});


	prepareActivityStartButtons();


	if (localStorage.getItem("notForFirstTime") === null){


		document.querySelector('#welcomePage').className = 'current';
		document.querySelector('#homePage').className = 'left';
	}
	

	addNavBtnListeners();


	countUp("#todayTotalCalCount");

	_slFoodType.addEventListener('change', function(){

		var index = parseInt(_slFoodType.options[_slFoodType.selectedIndex].value) - 1;

		console.log(index);

		var html = "";

		if(index>=0){

			currentFoods = allfood[index];

			currentFoods.forEach(function (food, index){

				html += "<option value="+ index + " >" + food.food_name + "</option>"

			});

			_slFood.innerHTML = html;

			fireChangeEvent(_slFood);

		}



	});


	_slFood.addEventListener('change', function(){

		selectedFood = currentFoods[parseInt(_slFood.options[_slFood.selectedIndex].value)];

		_calPerUnit.innerHTML = selectedFood.food_calorie;

		if (selectedFood.food_unit === 'টি') {

			_unit.innerHTML = "প্রতিটি";

		} else {
			_unit.innerHTML = "/ " + selectedFood.food_unit;
		}


		var html = "";

		for(var i=1; i<=10; ++i) {

			html += "<option value=" + i + " >" + i + " " + selectedFood.food_unit + "</option>";
		}



		_slFoodAmount.innerHTML = html;
		fireChangeEvent(_slFoodAmount);

		
	});


	_slFoodAmount.addEventListener('change', function(){

		var amount = parseInt(_slFoodAmount.options[_slFoodAmount.selectedIndex].value);
		var calPerUnit = parseInt(selectedFood.food_calorie);

		var totalCalorie = amount * calPerUnit;

		_singleFoodTotal.innerHTML = totalCalorie;

	});


	_btnAddFood.addEventListener('click', function(){

		var amount = parseInt(_slFoodAmount.options[_slFoodAmount.selectedIndex].value);
		var calPerUnit = parseInt(selectedFood.food_calorie);

		var totalCalorie = amount * calPerUnit;


		foodDesc = _slFoodAmount.options[_slFoodAmount.selectedIndex].value + " " + selectedFood.food_unit + " " + selectedFood.food_name;

		console.log(foodDesc);

		calDB.addFoodEntry(foodDesc, totalCalorie, function(){
			refreshTodaysList(function(){
				document.querySelector('#homePage').className = 'current';
				document.querySelector('#addPage').className = 'right';

				navigator.vibrate(50);

			}, false);
		});


	});


	_prefBtnSave.addEventListener('click', function(){

		var age, sex, height, weight, activity;

		age = parseInt(_prefAge.value);
		sex = _prefSex.options[_prefSex.selectedIndex].value;
		height = parseInt(_prefHeight.value);
		weight = parseInt(_prefWeight.value);
		activity = parseFloat(_prefActivity.options[_prefActivity.selectedIndex].value);

		localStorage['age'] = age;
		localStorage['sex'] = sex;
		localStorage['height'] = height;
		localStorage['weight'] = weight;
		localStorage['activity'] = activity;


		var calorieNeed = getDailyCalorieNeed(sex, weight, height, activity, age);

		localStorage['calorieNeed'] = calorieNeed;



	});


	_btnSaveWelcome.addEventListener('click', function(){

		var age, sex, height, weight, activity;

		age = parseInt(_welAge.value);
		sex = _welSex.options[_welSex.selectedIndex].value;
		height = parseInt(_welHeight.value);
		weight = parseInt(_welWeight.value);
		activity = parseFloat(_welActivity.options[_welActivity.selectedIndex].value);

		if(isNaN(age) || isNaN(height) || isNaN(weight)){
			utils.status.show('Please input correct values');
			return;
		}



		localStorage['age'] = age;
		localStorage['sex'] = sex;
		localStorage['height'] = height;
		localStorage['weight'] = weight;
		localStorage['activity'] = activity;


		var calorieNeed = getDailyCalorieNeed(sex, weight, height, activity, age);

		localStorage.setItem('dailyCalorieNeed') = calorieNeed;


		refreshTodaysList(function(){

			document.querySelector('#homePage').className = 'current';
			document.querySelector('#welcomePage').className = 'right';

			localStorage['notForFirstTime'] = 1;
			localStorage['installDate'] = (new Date()).getTime();


		}, true);


	});


	_startswalk.addEventListener('click', function(){
		showActivityTimer('s_walk');

	});
	_startmwalk.addEventListener('click', function(){
		showActivityTimer('m_walk');

	});
	_startfwalk.addEventListener('click', function(){
		showActivityTimer('f_walk');

	});
	_startcycle.addEventListener('click', function(){
		showActivityTimer('cycle');

	});
	_startrun.addEventListener('click', function(){
		showActivityTimer('run');

	});
	_startjog.addEventListener('click', function(){
		showActivityTimer('jog');

	});
	_startswim.addEventListener('click', function(){
		showActivityTimer('swim');

	});

	_btnActivityFinish.addEventListener('click', function(evt){

		evt.preventDefault();

		finishCurrentActivity();
		refreshSuggestions();
		document.querySelector('#confirm').className = 'fade-out';

	});

	

}

