var xValues = ["x","y","z"];
var yValues = [some_var[0].x,some_var[0].y,some_var[0].z];
var barColors = ["red", "green","blue"];
console.log(yValues);
const barCtx = document.getElementById('barChart').getContext("2d");
const pieCtx = document.getElementById('pieChart').getContext("2d");

new Chart(barCtx, {
	type:"bar",
	data: {
	  labels:xValues,
	  datasets: [{
		backgroundColor: barColors,
		data: yValues,
	  }]
	},
	options: {
	  legend: {display: false},
	  title: {
	  	display: true,
		text: "BAR CHART"
	  }
	}
	
});

new Chart(pieCtx, {
	type:"pie",
	data: {
	  labels: xValues,
	  datasets: [{
		backgroundColor: barColors,
		data: yValues,
	  }]
	},
	options: {
	  legend: {display: false},
	  title: {
	  	display: true,
		text: "PIE CHART"
	  }
	}
	
});
