module.exports = cv;

function cv() {
    return {
        title: "Razvan-Valentin Grigoras - Curiculum Vitae",
        name: "Razvan-Valentin Grigoras",
        email: "razvanvalentin.grigoras@gmail.com",
        phoneNumber: "+40 742 862 602",
        aboutMe: "A creative and results driven IT professional, a problem solver with experience in both troubleshooting and programming. Quick to \
                    master new technologies, experienced in a fast-paced multi-cultural environment and passionate about \
                    delivering high quality results and using my skills to enact positive change.",
        experience: [
            {
                startTime: "June 2019", endTime: "Present", jobTitle: "Cloud Architect", jobCompany: "UiPath",
                jobDescription: "Spearheaded the design, development, and maintenance of UiPath Cloud Products and internal tools across multiple environments. Led initiatives to maintain and optimize existing products in major cloud marketplaces including Azure, AWS, and GCP, while successfully launching new offerings in both public and government cloud platforms. Engineered sophisticated internal tooling solutions that streamlined cloud operations, automated deployment workflows, and enhanced cross-team collaboration capabilities. Developed custom monitoring dashboards and infrastructure-as-code frameworks that significantly improved operational visibility and resource management. Played a key role in building and orchestrating the company's USGov cloud environment onboarding process, establishing secure and compliant infrastructure for federal clients. Implemented strategic projects focused on cloud governance, security enhancement, and cost optimization, resulting in improved operational efficiency and regulatory compliance."

            },
            {
                startTime: "March 2018", endTime: "June 2019", jobTitle: "Senior Cloud Engineer", jobCompany: "Honeywell",
                jobDescription: "Performed constant evaluations of the existing Honeywell services architecture hosted in the cloud to make sure they are operating in a cost efficient and streamlined manner while also migrating existing services to newer cloud services and offerings. Participated in formulating the architecture for the new features being developed for Honeywell services. Ensured that new features are developed, tested and shipped in a timely fashion by constantly reviewing and streamlining the CI/DI process. Ensured the Honeywell services are provisioned with enough capacity to handle spikes in workload. Reviewed existing instrumentation and alerts for Honeywell services and ensured new services and features are also properly instrumented and robust alerts are put in place to monitor the availability and health of these services."

            },
            {
                startTime: "November 2017", endTime: "March 2018", jobTitle: "Technical Advisor - Azure Developer", jobCompany: "Microsoft",
                jobDescription: "Specialized on Azure Communication Services (Service Bus Queues, Topics, Event Hub, Event Grid, Notification Hub and Relay). Handled the most complex issues for our biggest customers. Participated in authoring internal documentations and workflows. Was also responsible for the team's technical readiness. Worked closely with the team manager to maintain the team at peak performance levels; assisted other Technical Advisers in optimizing our tools and processes; worked with other engineers to ensure our customers are served as fast as possible, by providing my technical expertise when progress was slow. Handled new hire technical interviews. Worked on the overall team technical readiness material."

            },
            {
                startTime: "July 2015", endTime: "November 2017", jobTitle: "Azure Cloud Integration Support Engineer", jobCompany: "Microsoft",
                jobDescription: "Offering support for multiple PaaS Services in Azure (Cloud Service, Service Bus, Event Hub, Notification Hub, Relay, Storage, CDN, Redis Cache, Service Fabric, API Management, Traffic Manager etc.) as well as related technologies (IIS, microservices, virtualization) and concepts (SSL security, DNS services, Load Balancing, Availability) while enabling customers to develop, deploy, troubleshoot, migrate and integrate their cloud-based solutions with the existing on-premises infrastructure. Currently focused on customers using Azure communication services (Service Bus, Event Hub, Notification Hub and Relay) where I have become a subject matter expert. Participated in authoring internal documentations. Authored presentations for new hires and interns to become familiar with Azure technologies and services. Mentored several waves of new hires for my team. Participated in other events, like hackathons, and I am member  of the Microsoft Romania Table Tenis team."

            },
            {
                startTime: "July 2013", endTime: "July 2015", jobTitle: "Web Developer", jobCompany: "Stefanini",
                jobDescription: "Developed a Web Platform for an US Private Equity fund association. My responsabilities included testing and bug fixing, as well as developing new features and pages. The application was built in ASP.NET Web Forms and made use of Entity Framework for data access and Bootstrap for the front end. We used SVN for source control and the application was deployed to a Azure Cloud Service. Later we scaled to multiple regions and use Azure Traffic Manager for request performance routing and resilience. Also developed a number of web sites, the majority for private educational institutions in the United Kingdom but also around the world. These responsive web applications were built in ASP.NET MVC and made extensive use of CSS3, multiple JavaScript plugins and JQuery. We also developed an in-house CMS solution which used MSSQL Server for data storage and Entity Framework for data access."
            }
],
        softSkills: "More than two years of experience in direct customer support in an international and multi-cultural environment. Both \
                    a great team worker and an emphatic leader with experience in setting the team up for success by understanding \
                    individual needs and offering the proper help with long term positive effects. Fluent in English and \
                    Romanian. Beginner in French and German.",
        techSkills: "Cloud architecture expert with extensive experience across major platforms including AWS, Azure, and GCP, with deep specialization in Microsoft Azure PaaS offerings including AKS, Cloud Services, Azure Service Fabric, Azure Service Bus, Azure Redis Cache, Azure Storage. </br> \
                        Proficient in designing and implementing multi-cloud solutions, cloud governance frameworks, and secure cloud infrastructures for both commercial and government environments. Strong background in microservices architecture and infrastructure-as-code methodologies, using technologies like .NET core, Node.js and Express for building scalable RESTful APIs. Experienced with deployment automation, CI/CD pipelines, and source control systems including GIT and Azure DevOps. </br> \
                        Well-versed in cloud cost optimization strategies, security compliance frameworks, and multi-instance design patterns for high availability solutions. ",
        certifications: [
             {
                name:"Microsoft Certified: Azure Solutions Architect Expert",
                issuer:"Microsoft",
                date:"November 2019"
            },
            {
                name:"Exam 70-532 - Developing Microsoft Azure Infrastructure Solutions",
                issuer:"Microsoft",
                date:"April 2017"
            },
            {
                name:"Exam 70-533 - Implementing Microsoft Azure Infrastructure Solutions",
                issuer:"Microsoft",
                date:"April 2017"
            },
            {
                name:"Exam 70-534 - Architecting Microsoft Azure Solutions",
                issuer:"Microsoft",
                date:"August 2015"
            }
        ],
        education:[
            {
                date: "2012-2014",
                name:"Master's Degree - Database and Web Technologies",
                institution:"University of Bucharest - Faculty of Mathematics and Computer Science",
                description:"Field of study: Databases, Data Warehousing, Data Mining, Web Technologies \
                </br> Disertation thesis: Data cube abstracter - Web platform which allowed the user to visually construct queries on any data cube without having MDX experience "
            },
            {
                date: "2007-2012",
                name:"Bachelor Degree - Computer Science",
                institution:"University of Bucharest - Faculty of Mathematics and Computer Science",
                description:"Field of study: Algorythms, Computer Science, Mathematics \
                </br> Diploma thesis: Performance comparison between popular Data Mining algorythms",
            },
            {
                date: "2003-2007",
                name:"Highschool",
                institution:'"Tudor Vianu" National College of Computer Science',
                description:"Mathematics and Programming, intensive Programming program",
            }

        ]

    }
}
