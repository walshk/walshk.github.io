/**
 * Loads new content in the module display
 * @param {String} moduleContent - String of HTML content to display in the module display
 */
function loadNewModule(moduleContent) {
    $("#module-display-col").empty();
    $(moduleContent).hide().appendTo("#module-display-col").fadeIn(500);
}

/**
 * Create content string for a given module type
 * @param {String} moduleType - String indicating the type of module being shown
 * @param {String} workPosition - Optional string indicating position title (for when creating work exp. module)
 * @returns {String} - Content string to be placed in the Module Display section
 */
function createModuleContent(moduleType, workPosition = null) {
    $(".btn-secondary").removeClass("btn-secondary");
    $(`#${moduleType}-button`).addClass("btn-secondary");
    $(".btn-blue-grey").addClass("btn-light");
    $(".btn-blue-grey").removeClass("btn-blue-grey");

    if (moduleType === "education") {
        const content = `
            <div class="row" id="education-toprow">
                <div class="col-md-3" id="educationLogo">
                    <img class="img-thumbnail" src="img/rochester.png" alt="University of Rochester Logo">
                </div>
                <div class="col-md-8">
                    <div class="row" id="educationName">
                        <h2>University of Rochester</h2>
                    </div>
                    <div class="row" id="educationLocation">
                        <h4>Rochester, NY</h4>
                    </div>
                    <div class="row" id="educationTimePeriod">
                        <i>Graduated May 2018</i>
                    </div>
                </div>
            </div>
            <div class="row" id="education-botrow">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Bachelor of Science in Business (Business Analytics Track)</strong></li>
                    <li class="list-group-item">Minor in Computer Science</li>
                    <li class="list-group-item">Dean's List all semesters from Spring 2016 through Spring 2018</li>
                    <li class="list-group-item">Cumulative GPA: 3.5/4.0</li>
                </ul>
            </div>
        `;

        return content;
    } else if (moduleType === "work") {
        let companyName;
        let companyLocation;
        let timePeriod;
        let experienceBullets;

        let tmp = workPosition.toLowerCase().split(" ");
        tmp.push("btn");
        let identifier = tmp.join("-");

        $(".btn-blue-grey").addClass("btn-light");
        $(".btn-blue-grey").removeClass("btn-blue-grey");
        $(`#${identifier}`).addClass("btn-blue-grey");
        $(`#${identifier}`).removeClass("btn-light");

        console.log(identifier);
        console.log($(`#${identifier}`));

        switch (workPosition) {
            case "Staff Technologist":
                companyName = "Booz Allen Hamilton";
                companyLocation = "Washington, DC";
                timePeriod = "July 2019 - Present";
                logoName = "boozallen.jpg";

                experienceBullets = [
                    "Supported several technical projects for US Government clients and internal strategic investments",
                    "Developed and deployed machine learning models to detect and classify gestures in live video feeds",
                    "Containerized a data visualization dashboard product using Docker to reduce local set-up times and avoid issues stemming from running the product on different machines",
                    "Conducted a distributed map/reduce effort using Python multiprocessing to extract statistics from large amounts of American Community Survey public-use microdata",
                ];

                break;
            case "Technologist":
                companyName = "Booz Allen Hamilton";
                companyLocation = "Washington, DC";
                timePeriod = "August 2018 - July 2019";
                logoName = "boozallen.jpg";

                experienceBullets = [
                    "Developed a multi-source data integration capability using Microsoft HoloLens and NVIDIA Jetson Nano",
                    "Built up knowledge of an emergent machine learning framework in a limited time frame to integrate a cyber risk scoring AI capability into an established client-facing product",
                    "Developed several interactive data visualization dashboards with strong focus on UI/UX using D3 and jQuery",
                    "Built a capability to perform computation for a machine learning task on the cloud using the AWS Serverless Application Model (API Gateway, Lambda) to aid scalability",
                    "Led numerous meetings and calls to gather client needs and determine how those needs could be met in both an innovative and cost-effective way",
                ];

                break;
            case "Teaching Assistant":
                companyName = "University of Rochester";
                companyLocation = "Rochester, NY";
                timePeriod = "September 2016 - May 2018";
                logoName = "rochester.png";

                experienceBullets = [
                    "Lab TA (Spring 2018) - Ran lab sessions twice per week to help students learn aspects of the Python programming language required for their lab assignments",
                    "Workshop Leader (Fall 2016 - Fall 2017) - Conducted weekly workshops in order to help students learn the more complicated aspects of the Python programming language",
                ];

                break;
            case "Summer Games Intern":
                companyName = "Booz Allen Hamilton";
                companyLocation = "Washington, DC";
                timePeriod = "June - August 2017";
                logoName = "boozallen.jpg";

                experienceBullets = [
                    "Worked with a team of 4 other interns to build a proof-of-concept solution for a US Army client over the course of ten weeks, exploring the relationship between physical stress and mental acuity",
                    "Utilized the knowledge of various subject matter experts throughout the firm to efficiently design a data ingestion, analytics, and visualization strategy",
                    "Wrote multiple data ingestion and processing scripts in Python, along with a basic GUI using the TkInter library",
                    "Built interactive data visualizations using D3 to assist the end user in examining the relationship between physical stress and mental acuity",
                ];

                break;
            case "Market Research Intern":
                companyName = "Pollinate Publicity";
                companyLocation = "Rochester, NY";
                timePeriod = "February - April 2016";
                logoName = "pollinate.png";

                experienceBullets = [
                    "Conducted interviews with students and leaders of student organizations to research how students discover and advertise for events on campus",
                    "Constructed projection tables in Excel to map out projected revenues and profits based on variable costs as part of a break-even analysis",
                ];

                break;
            case "Public Works Intern":
                companyName = "Town of Darien";
                companyLocation = "Darien, CT";
                timePeriod = "May - August 2015; May - August 2016";
                logoName = "darien.jpg";

                experienceBullets = [
                    "Directly interacted with customers to sell over 7,000 municipal recycling center passes each summer",
                    "Utilized Excel to compile and analyze five years of sales data and created a report on the impacts of the department’spricing changes on sales and consumer decisions",
                    "Separately analyzed fifteen years of sales data in Excel to learn more about consumer demand for recycling center passes",
                    "Constructed pivot tables and charts in Excel to perpetually track sales statistics for future analysis",
                ];

                break;
            default:
                break;
        }

        let expBulletString = "";
        experienceBullets.forEach((bulletContent) => {
            expBulletString += `<li class='bulletContent list-group-item'>${bulletContent}</li>`;
        });

        const content = `
            <div class="row" id="work-exp-toprow">
                <div class="col-md-2" id="workLogo">
                    <img class="img-thumbnail" src="img/${logoName}" alt="${companyName} Logo">
                </div>
                <div class="col-md-10">
                    <div class="row" id="workName">
                        <h2>${companyName}</h2>
                    </div>
                    <div class="row" id="workLocation">
                        <h4>${companyLocation}</h4>
                    </div>
                    <div class="row" id="workTimePeriod">
                        <i>${timePeriod}</i>
                    </div>
                </div>
            </div>
            <div class="row" id="work-exp-botrow">
                <strong>${workPosition}</strong>
                <ul class="list-group list-group-flush">
                    ${expBulletString}
                </ul>
            </div>
        `;

        return content;
    } else if (moduleType === "skills") {
        const content = `
            <div class="row" style="height: 100%;">
            <div class="col-md-6" style="padding-right: 0;">
                <svg width="100%" height=270>
                    <rect x=0 y=0 width="100%" height="100%" fill="springgreen" opacity=0.2 rx=25 />
                    <text x=20 y=20>Proficient</text>
                    
                    <svg id="skill-js" x=35 y=40 width="100%">
                        <image xlink:href="img/javascript.png" width=80 height=60>
                    </svg>
                    <svg id="skill-d3" x=130 y=40 width="100%">
                        <image xlink:href="img/d3.png" width=80 height=60>
                    </svg>
                    <svg id="skill-jquery" x=215 y=40 width="100%">
                        <image xlink:href="img/jquery.png" width=80 height=60>
                    </svg>

                    <svg id="skill-python" x=35 y=110 width="100%">
                        <image xlink:href="img/python.png" width=80 height=60>
                    </svg>
                    <svg id="skill-numpy" x=130 y=110 width="100%">
                        <image xlink:href="img/numpy.png" width=80 height=60>
                    </svg>
                    <svg id="skill-pandas" x=215 y=110 width="100%">
                        <image xlink:href="img/pandas.png" width=80 height=60>
                    </svg>

                    <svg id="skill-sklearn" x=35 y=180 width="100%">
                        <image xlink:href="img/sklearn.png" width=80 height=60>
                    </svg>
                    <svg id="skill-sql" x=130 y=180 width="100%">
                        <image xlink:href="img/sql.svg" width=80 height=60>
                    </svg>
                    <svg id="skill-bootstrap" x=225 y=180 width="100%">
                        <image xlink:href="img/bootstrap.svg" width=60 height=60>
                    </svg>

                </svg>
            </div>
            <div class="col-md-6" style="padding-left: 0; padding-right: 0;">
                <svg width="100%" height=270>
                    <rect x=0 y=0 width="100%" height="100%" fill="gold" opacity=0.2 rx=25 />
                    <text x=20 y=20>Some Experience</text>

                    <svg id="skill-angular" x=35 y=40 width="100%">
                        <image xlink:href="img/angular.png" width=80 height=60>
                    </svg>

                    <svg id="skill-docker" x=130 y=40 width="100%">
                        <image xlink:href="img/docker.png" width=80 height=60>
                    </svg>

                    <svg id="skill-java" x=215 y=40 width="100%">
                        <image xlink:href="img/java.png" width=80 height=60>
                    </svg>

                    <svg id="skill-opencv" x=35 y=110 width="100%">
                        <image xlink:href="img/opencv.png" width=80 height=60>
                    </svg>
                    <svg id="skill-csharp" x=130 y=110 width="100%">
                        <image xlink:href="img/csharp.png" width=80 height=60>
                    </svg>
                    <svg id="skill-mlnet" x=215 y=110 width="100%">
                        <image xlink:href="img/mlnet.png" width=80 height=60>
                    </svg>

                    <svg id="skill-aws" x=75 y=180 width="100%">
                        <image xlink:href="img/aws.png" width=80 height=60>
                    </svg>

                    <svg id="skill-stata" x=165 y=180 width="100%">
                        <image xlink:href="img/stata.png" width=100 height=60>
                    </svg>


                </svg>
            </div>
            </div>
        `;

        return content;
    } else if (moduleType === "contact") {
        const content = `
            <div class="row">
                <div class="col-sm-12">
                    <h3>Contact Me</h4>
                    <p>The easiest way to get in touch with me is via email at <a href="mailto:contact@kwalsh.dev">contact@kwalsh.dev</a>.</p>
                    <p>You can also connect with me on <a href="https://linkedin.com/in/walshkr">LinkedIn</a>!</p>
                </div>
            </div>
        `;

        return content;
    }
}

/**
 * Activate and populate hover tooltips for all svg images in Skills module
 */
function activateSkillTooltips() {
    const skillExamples = {
        js: "I've used JavaScript on several projects, most frequently for handling interactions on data visualization dashboards.",
        d3: "I've used D3 to build a number of different data visualizations in order to display either client or internal data in an effective way.",
        jquery: "I've used jQuery in the same way I've used JavaScript, since jQuery just makes operating with JS easier.",
        python: "I've used Python mostly for projects that required data analysis or machine learning, but I've also used it to integrate data communications between a Microsoft HoloLens and an NVIDIA Jetson Nano.",
        numpy: "I've used the NumPy library in Python when I've needed to manipulate data, for example to transform data when creating input vectors for machine learning models.",
        pandas: "I've used the Pandas library in Python to easily format data for training and testing machine learning models.",
        sklearn:
            "I've used the Scikit-Learn library in Python to access its treasure trove of implemented machine learning methods, from supervised to unsupervised methods.",
        sql: "I've used SQL for querying both standalone databases as well as databases connected as a backend for a website (using PHP for the backend communications).",
        bootstrap:
            "I've used Bootstrap for both web page styles as well as functionality - the grid system is the easiest way for me to go from a drawing on a whiteboard to a wireframe on a web page.",
        java: "I mostly used Java in school, as it was the language taught in my intro CS and Data Structures & Algorithms classes.",
        csharp: "I used C# for one project where we needed to implement machine learning methods into an established software stack reliant on Microsoft .NET.",
        mlnet: "I used the ML.NET framework to implement some basic machine learning methods into an established software stack reliant on Microsoft .NET (using C#).",
        opencv: "I've used the OpenCV library in Python when working on a project that involved building machine learning models to detect certain gestures in live video feeds.",
        stata: "I used Stata in a couple of different econometrics classes - I found it very powerful for econometric analysis, but outside of that I prefer to do all data analysis in Python.",
        aws: "I used API Gateway and Lambda on a project to be able to perform the computation for a machine learning task on the cloud to allow for the task's scalability.",
        angular:
            "I've used Angular to develop new functionality for an existing web app, building several new components and services following the Model-View-Controller design pattern.",
        docker: "I've used Docker on a few occasions to repackage existing applications so they can deploy to new machines while avoiding any software dependency issues.",
    };

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    for (var skill in skillExamples) {
        if (skillExamples.hasOwnProperty(skill)) {
            const identifier = `skill-${skill}`;

            $(`svg #${identifier}`).tooltip({
                title: skillExamples[skill],
                html: true,
                placement: "top",
                container: "body",
            });
        }
    }
}
