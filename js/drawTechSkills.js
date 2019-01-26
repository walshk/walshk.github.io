// Technical Skills Data
var techSkill = {
    "data_science": [
        ["Python", 9],
        ["C#", 6]
    ],
    "data_viz": [
        ["d3.js", 10],
        ["Tableau", 8]
    ],
    "web_dev": [
        ["Bootstrap", 8],
        ["JavaScript", 10],
        ["jQuery", 10],
        ["node.js", 4],
        ["mongoDB", 4],
    ],
    "mobile": [
        ["Swift", 4]
    ],
    "other": [
        ["Java", 5],
        ["Stata", 6]
    ]
};


/**
 * 
 * @param {Object} data - chosen tech skill data to draw
 */
function drawTechSkills(name) {

    $('#tech-skills-row').empty();

    const width = $('#tech-skills-row').width();

    var svg = d3.select('#tech-skills-row').append('svg')
        .attr('class', 'tech-skills-svg')
        .attr('width', width)
        .attr('height', 250);

    // horizontal scale
    var xScale = d3.scaleLinear()
        .domain([0,10])
        .range([60, width - 120]);

    // viz title
    svg.append('text')
        .attr('x', 0)
        .attr('y', 20)
        .style('fill', 'black')
        .attr('html', 'true')
        .style('font-weight', 'bold')
        .text('Technical Skills:');

    // add selector buttons
    [["Web Dev", "web_dev"], ["Data Science", "data_science"], ["Data Visualization", "data_viz"], 
    ["Mobile", "mobile"], ["Other", "other"]].forEach(function(d, i) {

        svg.append("rect")
            .attr("class", "selector-circle")
            .attr("x", 150 + 170*i)
            .attr("y", 5)
            .attr("width", 20)
            .attr("height", 20)
            .style("fill", function(){
                if (name === d[1]) {
                    return '#adbce6';
                } else {
                    return '#e6bbad';
                }
            })
            .style("stroke", function() {
                if (name === d[1]) {
                    return 'black';
                } else {
                    return 'none';
                }
            })
            .style('cursor', 'pointer')
            .on('click', function(){
                drawTechSkills(d[1]);
            });

        svg.append("text")
            .attr("class", "selector-text")
            .attr("x", 150 + 25 + 170*i)
            .attr("y", 21)
            .text(d[0])
            .style("fill", 'black')
            .style('font-weight', function(){
                if (name === d[1]) {
                    return 'bold';
                } else {
                    return 'normal';
                }
            })
            .style('cursor', 'pointer')
            .on('click', function(){
                drawTechSkills(d[1]);
            });
            

    });


    // background
    svg.append('rect')
        .attr('x', 0)
        .attr('y', 40)
        .attr('width', width)
        .attr('height', 400)
        .style('fill', '#86c5da');

    // draw axis labels
    svg.append("text")
        .attr("x", 85)
        .attr("y", 60)
        .style('font-size', '12')
        .style('font-weight', 'bold')
        .text("No Proficiency");

    svg.append("text")
        .attr("x", width / 2 - 50)
        .attr("y", 60)
        .style('font-size', '12')
        .style('font-weight', 'bold')
        .text("Some Experience");

    svg.append("text")
        .attr("x", width -10)
        .attr("y", 60)
        .style('font-size', '12')
        .style('font-weight', 'bold')
        .style('text-anchor', 'end')
        .text("Proficient");

    // select desired data
    const langs = techSkill[name];

    langs.forEach(function(lang, i) {

        // add language name
        svg.append("text")
            .attr("x", 80)
            .attr("y", 85 + 35*i)
            .attr('text-anchor', 'end')
            .text(lang[0])
            .attr('opacity', 0.5)
            .transition().duration(500)
            .attr('opacity', 1);

        // add bars
        svg.append("rect")
            .attr("x", 85)
            .attr("y", 70 + 35*i)
            .attr("height", 20)
            .style("fill", "#e6bbad")
            .attr("width", 0)
            .transition().duration(500)
            .attr("width", xScale(lang[1]));
            


    });
}