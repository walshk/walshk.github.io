
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
function createModuleContent(moduleType, workPosition=null) {

    if (moduleType === 'education')
    {

        const content = `

        `;

        return content;
    }

    else if (moduleType === 'workOverview')
    {
        const content = `
        
        `;

        return content;
    }

    else if (moduleType === 'workSpecific') 
    {
        let companyName;
        let companyLocation;
        let timePeriod;
        let experienceBullets;

        switch(workPosition) {
            case 'Staff Technologist':
                companyName = 'Booz Allen Hamilton';
                companyLocation = 'Washington, DC';
                timePeriod = 'July 2019 - Present';
                logoName = 'boozallen.jpg';

                experienceBullets = [
                    'Supported several technical projects for US Government clients and internal strategic investments',
                    'Developed and deployed machine learning models to detect and classify gestures in live video feeds'
                ];

                break;
            case 'Technologist':
                companyName = 'Booz Allen Hamilton';
                companyLocation = 'Washington, DC';
                timePeriod = 'August 2018 - July 2019';
                logoName = 'boozallen.jpg';

                experienceBullets = [
                    'Developed a multi-source data integration capability using Microsoft HoloLens and NVIDIA Jetson Nano',
                    'Built up knowledge of an emergent machine learning framework in a limited time frame to integrate a cyber risk scoring AI capability into an established client-facing product',
                    'Developed several interactive data visualization dashboards with strong focus on UI/UX using D3 and jQuery',
                    'Built a capability to perform computation for a machine learning task on the cloud using the AWS Serverless Application Model (API Gateway, Lambda) to aid scalability',
                    'Led numerous meetings and calls to gather client needs and determine how those needs could be met in both an innovative and cost-effective way'
                ];

                break;
            case 'Teaching Assistant':
                companyName = 'University of Rochester';
                companyLocation = 'Rochester, NY';
                timePeriod = 'September 2016 - May 2018';
                logoName = 'rochester.png';

                experienceBullets = [
                    'Lab TA (Spring 2018) - Ran lab sessions twice per week to help students learn aspects of the Python programming language required for their lab assignments',
                    'Workshop Leader (Fall 2016 - Fall 2017) - Conducted weekly workshops in order to help students learn the more complicated aspects of the Python programming language'
                ];

                break;
            case 'Summer Games Intern':
                companyName = 'Booz Allen Hamilton';
                companyLocation = 'Washington, DC';
                timePeriod = 'June - August 2017';
                logoName = 'boozallen.jpg';

                experienceBullets = [
                    'Worked with a team of 4 other interns to build a proof-of-concept solution for a US Army client over the course of ten weeks, exploring the relationship between physical stress and mental acuity',
                    'Utilized the knowledge of various subject matter experts throughout the firm to efficiently design a data ingestion, analytics, and visualization strategy',
                    'Wrote multiple data ingestion and processing scripts in Python, along with a basic GUI using the TkInter library',
                    'Built interactive data visualizations using D3 to assist the end user in examining the relationship between physical stress and mental acuity'
                ];

                break;
            case 'Market Research Intern':
                companyName = 'Pollinate Publicity';
                companyLocation = 'Rochester, NY';
                timePeriod = 'February - April 2016';
                logoName = 'pollinate.png';

                experienceBullets = [
                    'Conducted interviews with students and leaders of student organizations to research how students discover and advertise for events on campus',
                    'Constructed projection tables in Excel to map out projected revenues and profits based on variable costs as part of a break-even analysis'
                ];

                break;
            case 'Public Works Intern':
                companyName = 'Town of Darien';
                companyLocation = 'Darien, CT';
                timePeriod = 'May - August 2015; May - August 2016';
                logoName = 'darien.jpg';

                experienceBullets = [
                    'Directly interacted with customers to sell over 7,000 municipal recycling center passes each summer',
                    'Utilized Excel to compile and analyze five years of sales data and created a report on the impacts of the department’spricing changes on sales and consumer decisions',
                    'Separately analyzed fifteen years of sales data in Excel to learn more about consumer demand for recycling center passes',
                    'Constructed pivot tables and charts in Excel to perpetually track sales statistics for future analysis'
                ];

                break;
            default:
                break;
        }

        let expBulletString = '';
        experienceBullets.forEach((bulletContent) => {
            expBulletString += `<li class='bulletContent list-group-item'>${bulletContent}</li>`;
        });

        const content = `
            <div class="row" id="work-exp-toprow">
                <div class="col-md-3" id="workLogo">
                    <img class="img-thumbnail" src="img/${logoName}" alt="${companyName} Logo">
                </div>
                <div class="col-md-7">
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
                <h6>${workPosition}</h6>
                <ul class="list-group list-group-flush">
                    ${expBulletString}
                </ul>
            </div>
        `;

        return content;
    }

    else if (moduleType === 'skills')
    {


        return content;
    }
    
    else if (moduleType === 'interests')
    {

        return content;
    }


}