//set up width and height of svg element
var width = 960,
	height = 540;

var height1 = height / 2;
var height2 = height;


var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", 270);

var svg2 = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", 270);

d3.json("testdata.json", function(data){

	var xScale = d3.scaleLinear()
		.domain([d3.min(data, function(d){
			return d.CRSDepTime;
		}), d3.max(data, function(d){
			return d.CRSDepTime;
		})])
		.range([40, width - 40]);

	var y1Scale = d3.scaleLinear()
		.domain([d3.min(data, function(d){
			return d.actualDelay;
		}), d3.max(data, function(d){
			return d.actualDelay;
		})])
		.range([height1 - 40, 40]);

	var y2Scale = d3.scaleLinear()
		.domain([d3.min(data, function(d){
			return d.predictedDelay;
		}), d3.max(data, function(d){
			return d.predictedDelay;
		})])
		.range([height1 - 40, 40]);


	var y3Scale = d3.scaleLinear()
		.domain([d3.min(data, function(d){
			return d.predictedDelay - d.actualDelay;
		}), d3.max(data, function(d){
			return d.predictedDelay - d.actualDelay;
		})])
		.range([height2, height1]);


	svg.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", function(d){
				return xScale(d.CRSDepTime);
			})
			.attr("cy", function(d){
				return y1Scale(d.actualDelay);
			})
			.attr("r", 5)
			.attr("fill", function(d){
				if (d.actualDelay == 0){
					return "none";
				}
				else{
					return "steelblue";
				}
			})
			.attr("opacity", 0.5)
		
	svg.selectAll(".circ")
		.data(data)
		.enter()
		.append("circle")
			.attr("class", "circ")
			.attr("cx", function(d){
				return Math.random()*xScale(d.CRSDepTime);
			})
			.attr("cy", function(d){
				return Math.random()*y2Scale(d.predictedDelay);
			})
			.transition()
			.duration(3000)
				.attr("cx", function(d){
					//console.log(d.CRSDepTime);
					return xScale(d.CRSDepTime);
				})
				.attr("cy", function(d){
					//console.log(y2Scale(d.predictedDelay));
					return y2Scale(d.predictedDelay);
				})
				.attr("r", 5)
				.attr("fill", function(d){
					if (d.actualDelay == 0){
						return "green";
					}
					else{
						return "orange";
					}
				})
				.attr("opacity", 0.5);


	svg2.selectAll(".circ2")
		.data(data)
		.enter()
		.append("circle")
			.attr("class", "circ2")
			.attr("cx", function(d){
				return Math.random()*xScale(d.CRSDepTime);
			})
			.attr("cy", function(d){
				return Math.random()*y3Scale(d.predictedDelay);
			})
			.transition()
			.duration(3000)
				.attr("cx", function(d){
					//console.log(d.CRSDepTime);
					return xScale(d.CRSDepTime);
				})
				.attr("cy", function(d){
					return y3Scale(d.predictedDelay - d.actualDelay);
				})
				.attr("r", 5)
				.attr("fill", function(d){
					if (d.actualDelay == 0){
						return "none";
					}
					else{
						return "red";
					}
				})
				.attr("opacity", 0.5);

	svg2.selectAll(".rect1")
		.data(data)
		.enter()
		.append("rect")
			.attr("class", "rect1")
			.attr("x", function(d){
				return xScale(d.CRSDepTime);
			})
			.attr("y", function(d){
				return y3Scale(0);
			})
			.attr("width", 100)
			.attr("height", 5)
			.attr("fill", "black");




});