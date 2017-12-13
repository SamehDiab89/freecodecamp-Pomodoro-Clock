
var period = 25;
var breakMin = 5; 
var now = 59;
var minute = period - 1;
var breakMinute = breakMin - 1;
var start = 0;
var stopx = 0;

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

$("#pomoPlus").click(function() {
	if(start) {
		$("#pomoText").text("Pomodoro working");
	} else {
		period++;
		minute = period - 1;
		var pomoPlusText = period + " min";
		$("#pomoText").text(pomoPlusText);
	}
	
})

$("#pomoMin").click(function() {
	if(start) {
		$("#pomoText").text("Pomodoro working");
	} else {
		if(period === 1) {
			$("#time").text("one minute is the minimum");
		} else {
			period--;
			minute = period - 1;
			var pomoPlusText = period + " min";
			$("#pomoText").text(pomoPlusText);
		}
		
	}
	
})

$("#breakPlus").click(function() {
	if(start) {
		$("#breakText").text("Pomodoro working");
	} else {
		breakMin++;
		breakMinute = breakMin - 1;
		var breakPlusText = breakMin + " min";
		$("#breakText").text(breakPlusText);
	}
	
})

$("#breakMin").click(function() {
	if(start) {
		$("#breakText").text("Pomodoro working");
	} else {
		if(breakMin === 1) {
			$("#time").text("one minute is the minimum");
		} else {
			breakMin--;
			breakMinute = breakMin - 1;
			var breakPlusText = breakMin + " min";
			$("#breakText").text(breakPlusText);
		}
		
	}
	
})

function updateClock() {
	if(stopx){
		return;
	}
	var nowText = minute + " : "+ pad(now);
	if(now === 0) {
		minute--;
		now = 60;
	}
	
	$("#time").text(nowText);
	now --;
	if(minute >= 0 ) {
		setTimeout(updateClock, 1000);
	} else {
		
		$("#time").text("Your break Start Now")
		setTimeout(updateBreak, 3000);
		
	}

}

function updateBreak() {
	if(stopx){
		return;
	}
	
	var nowText = breakMinute + " : "+ pad(now);
	if(now === 0) {
		breakMinute--;
		now = 60;
	}
	
	$("#time").text(nowText);
	now --;
	if(breakMinute >= 0 ) {
		setTimeout(updateBreak, 1000);
	} else {
		$("#time").text("Pomodoro Period Finished");
		setTimeout(init, 3000);
	}
}


function init() {
	period = 25;
	breakMin = 5; 
	now = 59;
	minute = period - 1;
	breakMinute = breakMin - 1;
	start = 0;
	stopx = 1;
	$("#pomoText").text("25 min");
	$("#breakText").text("5 min");
	$("#time").text("Your Pomodoro Clock Start Here");
}

$("#start").click(function() {
	start = 1;
	stopx = 0;
	updateClock();
})

$("#stop").click(function() {
	stopx = 1;
	$("#time").text("Pomodoro Clock has Stopped");
	setTimeout(init, 1000);
})

// $( "#break" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );

