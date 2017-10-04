// set up vizualization for resize

var chartDiv = document.getElementById("chart");
var svg = d3.select(chartDiv).append("svg");

function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function redraw() {

	// clear contents of svg element
	svg.selectAll("circle").remove();
	svg.selectAll("g").remove();

	// take width and height from iframe size
	let width = chartDiv.clientWidth;
	let height = chartDiv.clientHeight;

	let margin = 20;

	// assign width and height to svg element
	svg
		.attr("width", width)
		.attr("height", height);


	let dataURL = "https://api.github.com/repos/walshk/walshk.github.io/commits"
	

	// connect to github commits source
	d3.json(dataURL, function(data){

		var hours = [];
		var commitLengths = [];
		var days = [];

		// loop through commit dates
		for (var i = 0; i < data.length; i++) {


			days.push(new Date(data[i].commit.author.date.substring(0,10)).getDay());
			// extract length of commit messages
			commitLengths.push(data[i].commit.message.length);
			// extract hours from dates
			hours.push(data[i].commit.author.date.substring(11,13));
		}

		// x-axis scale by hours
		let xScale = d3.scaleLinear()
			.domain([d3.min(hours), d3.max(hours)])
			.range([margin, width - margin]);

		let yScale = d3.scaleLinear()
			.domain([d3.min(commitLengths), d3.max(commitLengths)])
			.range([height - margin - 20, margin]);

		let colors = ["red", "green", "blue", "orange", "cyan", "teal", "coral"];


		var xAxis = d3.axisBottom(xScale);

		svg.append("g")
			.attr("transform", "translate(0," + (height - margin) + ")")
			.call(xAxis);		

		svg.selectAll("circle")
			.data(hours)
			.enter()
			.append("circle")
				.attr("cy", function(d, i){
					return yScale(commitLengths[i]);
				})
				.attr("cx", function(d, i){
					return xScale(d);
				})
				.attr("r", 5)
				.attr("fill", function(d,i){
					return colors[days[i]];
				})
				.attr("opacity", 1)
				.text("what");



	})

}

redraw();
window.addEventListener("resize", redraw);