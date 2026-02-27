import {jobArray} from "./testApi.js" ;

//global variables
const $jobList = document.getElementById("jobList");

// global functions
function jobDescription(job){
  
  const modal = document.getElementById("overlay");
  modal.style.display = "block";
}


// bring the API information and store in the local storage

//this async function works but due to cors this will remain like this until deployed
// async function fetchAPI(){
//   try{
//     const response = await fetch("https://empllo.com/api/v1");

//     if(!response.ok){
//         throw Error("fetch not successfull")
//     }
  
//     const list = await response.json();
//     jobArray.push(list.jobs)
//     console.log(list)
//   }
//   catch(r){
//     console.log("nothing was return"+r)
//   }
// }

jobArray.map((job)=>{
  const newTags = job.tags.join(" ");

  const div = document.createElement("div");
  div.className = "jobItem";
  div.innerHTML = `
                <div>
                    <h2 class="titleItem">${job.title}</h1>
                    <b>${job.mainCategory}</b>
                    <div class="salaryItem">
                        <b>Salary range: </b>
                        ${job.minSalary!=null? "$"+job.minSalary:"$0"}
                        ${job.maxSalary!=null? "- $"+job.maxSalary:""}
                    </div>
                    
                    <div> Tags: ${newTags}</div>
                    <button class="btn" href="${job.applicationLink}"> More...</button>
                </div>
  `;
  div.addEventListener("click",()=>{
    jobDescription(job)
  });
  $jobList.append(div);
})
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