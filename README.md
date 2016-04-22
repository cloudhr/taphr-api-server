### Things to know about how this Project is Structured. Note this is subject to change.

## Main Application Modules

- Absence           : Manages Employee absence from work including Leaves, Sickness, and Holidays. get insight to absence patterns use the bradford factor
- Companies         : Manages Company Details and Policies
- Employees         : Manages employee Details
- EventPlanners     : Manages Events with a Powerful Calender API that integrates nicely with Services like Google calender to sync data
- Goals             : Manages Yearly Goals that gets applied to certain Entities like Company or Employee. Collects Data for Appraisal
- PayRoll           : This is the salary management section. A full-time payment reconciliation system for managing Deductions, taxes, company Entitlements. Integrates with other Payroll and banking systems
- Processes         : a Process API that gets applies to Employee and company Entities
- Recruitment       : A full-blown Recruitment and Applicant Tracking System(ATS)
- Surveys           : Get Insights about a particular subject. Know what the majority think about it.
- Timesheet         : Based on Employee type and contracts, Give them the ability to record their work house or let the system figure it out for them.


## Repo Format
Ideally each Module should be in its own repo in the format

- io.rackten.taphr.Absence
- io.rackten.taphr.Companies
- io.rackten.taphr.Employees
- io.rackten.taphr.EventPlanners
- io.rackten.taphr.Goals
- io.rackten.taphr.PayRoll
- io.rackten.taphr.Processes
- io.rackten.taphr.Recruitment
- io.rackten.taphr.Surveys
- io.rackten.taphr.Timesheet

## The API Server
This is just a resource server that assembles all the modules together and 
exposes endpoints based on the different types of membership categories. 
Each Membership type will live in its own DNS.

## How feature modules interact with the API server
Now Repository code will be required into the main server app by proxying 
the native require function and catching any require errors. This separate 
module per feature strategy lets us deploy different types of app with different 
features included. This way then can get Go Server to build and deploy a certain 
group of features to an AWS instance based on Config Settings. 

## API versioning and Feature Module Versioning
Each module semver change should cause a subsequent change in the API version.
We will use the semver module to achieve this.

## Feature Module Architecture
Each module should be architected to follow a certain conventions. 
Like it how it should expose certain APIs, consume certain backing services 
like DBs and other Restful APIs. There should be a special module loader/integrator that
takes care of binding it to the main api server.

## API Consumabilty and Tooling
We should strive to generate a Swagger file for Each API

## API Security
Know that API server is just acting as a resource server only. It doesnt take care of . 
Ideally we should deligate Identity management to a completely seperate process in a federated way so
this way we can reuse identity with the help of tokens for many other internal services/modules. 
Put simply you are only allowed to to use a module if you have a valid token with the right scope/authorization.