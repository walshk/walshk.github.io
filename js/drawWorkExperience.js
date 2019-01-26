var experienceView;

var experience = [
    {
        "title": "Technologist",
        "company": "Booz Allen Hamilton",
        "time": "August 2018 - Present",
        "description": `
            Description Text
        `
    },
    {
        "title": "Teaching Assistant, Dept. of Computer Science",
        "company": "University of Rochester",
        "time": "August 2017 - May 2018",
        "description": `
            Description Text
        `
    },
    {
        "title": "Summer Games Intern, Soldier Performance & Readiness Science Team",
        "company": "Booz Allen Hamilton",
        "time": "August 2018 - Present",
        "description": `
            Description Text
        `
    }
    //TODO - add in all work experience

];


function drawWorkExperience(index) {
    // keep track of current view
    experienceView = index;

    const div = $('#work-exp');
    $(div).empty(); // clear contents

    const width = $('#work-exp-row').width();

    let svg = d3.select('#work-exp').append('svg')
        .attr('class', 'work-exp-svg')
        .attr('width', width)
        .attr('height', 180);

    let g = svg.append('g')
        .attr('class', 'work-box');

    // background
    g.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', 180)
        .style('fill', '#86c5da');

    // job title
    g.append('text')
        .attr('x', 10)
        .attr('y', 30)
        .text(experience[index].title);

    // company name
    g.append('text')
        .attr('x', 10)
        .attr('y', 60)
        .text(experience[index].company);

}