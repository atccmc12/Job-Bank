// bring the API information and store in the local storage

const $jobList = document.getElementById("jobList")
const jobArray = [];

const itemSample = {
      "title": "Store Operations Manager (GM)",
      "mainCategory": "Operations",
      "companyName": "Insomnia Cookies",
      "companyLogo": "https://assets.empllo.com/44u84ludgzxqra13lnnw8sm7cfsb",
      "jobType": "Full time",
      "workModel": "On site",
      "seniorityLevel": "Manager",
      "minSalary": null,
      "maxSalary": 57000,
      "currency": "USD",
      "locations": [
        "Colorado Springs"
      ],
      "tags": [
        "MS Outlook",
        "Excel",
        "MS Teams",
        "Applicant Tracking System",
        "Inventory Management",
        "Local Marketing"
      ],
      "description": "\u003Ch3\u003E📋 Description\u003C/h3\u003E\u003Cul\u003E\u003Cli\u003EHire, coach and develop part-time staff (Shift Leaders, Cookie Crew, Drivers)\u003C/li\u003E\u003Cli\u003ELead service quality, customer service and store cleanliness\u003C/li\u003E\u003Cli\u003EBuild a culture of excellence in cookie quality, service and sales\u003C/li\u003E\u003Cli\u003EManage and audit inventory to controls\u003C/li\u003E\u003Cli\u003ECreate and execute local marketing drops\u003C/li\u003E\u003Cli\u003ECreate and drive in-store recognition programs/contests\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003E🎯 Requirements\u003C/h3\u003E\u003Cul\u003E\u003Cli\u003E3+ years of management/leadership experience in a restaurant or retail establishment\u003C/li\u003E\u003Cli\u003EAvailability to work 2-3 mid-to-late shifts Thurs-Sun\u003C/li\u003E\u003Cli\u003EBenevolent leadership style with a player-coach mentality for day-to-day management\u003C/li\u003E\u003Cli\u003EInnate sense of hospitality and ability to deliver exceptional customer service\u003C/li\u003E\u003Cli\u003EStrong software skills: MS Outlook, Excel, MS Teams; ATS experience\u003C/li\u003E\u003Cli\u003EFamiliarity with using commercial convection ovens (a plus)\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003E🎁 Benefits\u003C/h3\u003E\u003Cul\u003E\u003Cli\u003EStarting wage up to $57,000 + monthly bonus\u003C/li\u003E\u003Cli\u003E$50 per month cellphone data plan stipend\u003C/li\u003E\u003Cli\u003EComprehensive medical, dental, vision, and pet insurance\u003C/li\u003E\u003Cli\u003E401K with company match\u003C/li\u003E\u003Cli\u003E2 weeks paid vacation and wellness days + sick leave\u003C/li\u003E\u003Cli\u003ECookie College training platform\u003C/li\u003E\u003C/ul\u003E",
      "pubDate": 1772048645,
      "expiryDate": 1774640645,
      "applicationLink": "https://empllo.com/jobs/view/store-operations-manager-gm-619a778bf749",
      "guid": "https://empllo.com/jobs/view/store-operations-manager-gm-619a778bf749"
    }

jobArray.push(itemSample);

 console.log(itemSample)
 console.log(jobArray[0].title)

for(i=0;i<jobArray.length;i++){
        const newJob = `
        <div class="jobItem" onclick="jobDescription">
                
                <div>
                    <h2 class="titleItem">${jobArray[i].title}</h1>
                    <b>${jobArray[i].mainCategory}</b>
                    <div class="salaryItem">
                        <b>Salary range: </b>
                        ${jobArray[i].minSalary!=null? "$"+jobArray[i].minSalary:"$0"}
                        ${jobArray[i].maxSalary!=null? "- $"+jobArray[i].maxSalary:""}
                    </div>
                    
                    <div> Tags: ${jobArray[i].tags}</div>
                    <button class="btn" href="${jobArray[i].applicationLink}"> More...</button>
                </div>

            </div>`
        $jobList.innerHTML+= newJob;
}
// Implement personalisation and store favorites in local storage


//create callback functions for the form to filter the information


// This is the expected information from the database/API of Jobs
     
        // title: Job title
        // description: The full HTML of the job description
        // mainCategory:Job category
        // applicationLink: Link to apply for the position
        // pubDate: Timestamp of when the job was published
        // expiryDate: Timestamp of when the job will expire
        // companyName: Name of the company that is hiring
        // companyLogo: Link to the company's logo
        // jobType: Job type of the position
        // workModel: Work model of the position
        // seniorityLevel: Seniority level of the position
        // minSalary (float or null): Minimum salary for the position (null if no value)
        // maxSalary (float or null): Maximum salary for the position (null if no value)
        // locations (array): Countries where candidates should be located, there can be more than one
        // tags (array): Job tags, there can be more than one