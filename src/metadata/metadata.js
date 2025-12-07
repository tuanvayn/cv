module.exports = {
	name: 'Tuan, Vu Anh',
	title: 'Software Engineer | Backend Developer | Java Developer',
	facts: {
		'Email': '<a href="mailto:vuanhtuan3.14@gmail.com"><i class="fa fa-envelope fact-icon"></i>vuanhtuan3.14@gmail.com</a>',
		'Mobile': '<a href="tel:+84385061465"><i class="fa fa-phone fact-icon"></i>(+84)38 506 1465</a>',
		'LinkedIn': '<a href="https://www.linkedin.com/in/tuanvayn/"><i class="fa-brands fa-linkedin fact-icon"></i>/tuanvayn</a>',
		'Github': '<a href="https://github.com/tuanvayn"><i class="fa-brands fa-github fact-icon"></i>/tuanvayn</a>'
	},
	skills: [
		['Java', 100, 'Advanced'],
		['Spring', 100, 'Advanced'],
		['OracleDB', 100, 'Advanced'],
		['Docker', 100, 'Advanced'],
		['K8s', 100, 'Advanced'],
		['REST & SOAP', 100, 'Advanced'],
		['Git', 100, 'Advanced'],
		['Kafka', 80, 'Mid-level'],
		['OSB/ESB', 70, 'Mid-level'],
		['Python', 60, 'Mid-level'],
		['JS', 50, 'Mid-level'],
		['WebLogic', 50, 'Mid-level'],
		['AI/ML', 50, 'Mid-level'],
		['Data Processing', 50, 'Mid-level'],
		['SVN', 50, 'Mid-level'],
	],

	company: [
		{
			cname: "FPT Software",
			crole: "Principal Software Engineer",
			cperiod: "2024 - Present",
			prj: [
				{
					title: 'IExams - Singapore Ministry of Education',
					period: 'Oct 2024 - Present',
					skills: ['Java', 'Spring Frameworks', 'SOAP', 'REST', 'SQL Server', 'Git', 'AWS', 'ELK', 'Jira'],
					role: "Team Lead",
					contents: `
Leading backend development for the Ministry of Education's nationwide examination management system, covering end-to-end feature delivery, system stability, and team performance.

Responsibilities:

Lead a backend team of 4 engineers: assign tasks, mentor members, conduct weekly and monthly performance reviews, and report progress directly to the Project Manager.

- Design, build, and enhance multiple microservices using Spring Boot, Spring Batch, Kafka, and MsSQL, ensuring reliability and performance across mission-critical workflows.

- Work closely with Business Analysts to clarify Service Requests (SR), Change Requests (CR), and incident reports, ensuring accurate and timely delivery following Agile/Scrum processes.

- Oversee infrastructure health and CI/CD pipelines on AWS, including CloudWatch, Jenkins, and logging/monitoring stacks.

- Contribute to overall system architecture discussions and guide the team in adopting coding best practices and clean code standards.
`
				},
				{
					title: 'STE - Singapore Water management System',
					period: 'May 2024 - Oct 2024',
					skills: ['Spring Frameworks', 'NodeJS', 'SOAP', 'REST', 'SQL Server', 'Git', 'LightRay DXP', 'Jira'],
					role: "Software Engineer",
					contents: `
Participated in a large-scale migration project where the legacy Spring MVC + JSP system was rebuilt using a custom Node.js framework developed by the client.

Responsibilities:

- Migrated and refactored legacy Spring MVC modules into Spring Boot services for a large-scale system modernization.

- Maintained and enhanced all Java services required due to Node.js framework limitations, especially modules using MSSQL stored procedures and triggers.

- Developed a shared Java common library reused across services to standardize utilities and reduce duplication.

- Collaborated with the Node.js team to integrate Java services with the client's custom framework and resolve cross-system issues.

- Supported development of additional features after completing Java migration tasks.
`
				}
			]
		},
		{
			cname: "VMO Holdings",
			crole: "Senior Java Developer",
			cperiod: "2022 - May 2024",
			prj: [
				{
					title: 'Indonesia Ringkas Housing Loan',
					period: 'Sep 2023 - May 2024',
					skills: ['Java', 'Spring Webflux', 'SOAP', 'REST', 'Git', 'AWS', 'ELK', 'Notion'],
					role: "Senior Software Engineer",
					contents: `
Developed, enhanced, and maintained features throughout the entire backend of version 1 of the CRM housing loan system.

Responsibilities:

- Develop, enhance, and maintain multiple backend services in a microservices system using Spring WebFlux, Spring Boot, OpenAPI, Kafka, R2DBC, PostgreSQL, and Keycloak, involving some frontend tasks using React.js.

- Work closely with in-house teams for clearing PRD/URD, using Notion with Agile principles to manage tasks in stages.

- Work directly to clear technical issues when integrating with stakeholders like BTN (National Saving Bank of Indonesia), Whatsapp, Infobip (Messaging Service Provider).

- Monitor the infrastructure of development, sandbox, and production environments including Kubernetes, Rancher, ELK, etc. on AWS EC2.

- Control the full flow of CI/CD when deploying from the development environment to the production environment using GitLab CI with GitLab flow.
`
				},
				{
					title: 'Hong Kong P2C',
					period: 'Jul 2022 - Aug 2023',
					skills: ['Java', 'Struts', 'Spring', 'SOAP', 'REST', 'Git', 'JSP', 'Jquery', 'Jira'],
					role: "Senior Software Engineer",
					contents: `
Developed, enhanced, and maintained multiple sub-system projects for the PCCW (Hong Kong) client as an outsourced Java developer.

Responsibilities:

- Actively communicated with the in-house development team to clarify project requirements and design specifications, as well as to catch up on tasks during daily stand-up meetings.

- Developed new REST APIs and converted SOAP services to REST APIs using Java 6 and related technologies like Spring, Struts 2, JSP, and utilized SQL Server for database management.

- Mentored 2 team members, guided them on working with clients, workflow (coding and GitFlow), reviewed documents and source code, and estimated and divided project tasks among team members.
`
				}
			]
		},
		{
			cname: "Enterprise Nao",
			crole: "Technical Leader",
			cperiod: "2018 - 2022",
			prj: [
				{
					title: 'Vietinbank E-Fast Business Customers Banking Service',
					period: 'Jul 2021 - Jun 2022',
					skills: ['Java', 'Spring', 'Hibernate', 'Jasper Report', 'REST', 'OracleDB', 'Docker', 'K8s', 'Git', 'Jira'],
					role: "Team Lead",
					contents: `
Rebuilt Vietinbank's business customer banking service into microservices as an outsourced Java developer.

Responsibilities:

- Led a team with 6 backend members, mentored team members to review each other, and resolve conflicts.

- Collaborated with the in-house development team to understand project requirements and design specifications.

- Built infrastructure for development and UAT environments including Kubernetes, Rancher, ELK, Prometheus, etc. according to Vietinbank's running system documents.

- Developed microservices for the banking service using Java 11 and related technologies such as Spring Boot 2, Hibernate, Jasper Report, Oracle DB (with PL/SQL).

- The developed product won the Golden Star (Sao Khue) Award.
`
				},
				{
					title: 'Vietinbank E-Connect',
					period: 'Jun 2021 - Mar 2022',
					skills: ['Java', 'Spring', 'Hibernate', 'Jasper Report', 'REST', 'OracleDB', 'Docker', 'K8s', 'Git', 'Jira'],
					role: "Team Lead",
					contents: `
Worked as an outsourced Java developer and built a Vietinbank system that supported connections from other systems like Misa ERP, Grab, etc. to core banking.

Responsibilities:

- Led a team with 3 backend members, reviewed team members' code, estimated project tasks, and effectively divided them among team members.

- Collaborated with the in-house development team to understand project requirements and design specifications.

- Built infrastructure for development and UAT environments including Kubernetes, Rancher, ELK, Prometheus, etc. according to Vietinbank's running system documents.

- Developed REST API services using Java 11 and related technologies such as Spring Boot 2, Jasper Report, Hibernate, and Oracle DB.
`
				},
				{
					title: 'National Population Database',
					period: 'Mar 2020 - Jul 2021',
					skills: ['Java', 'Spring', 'Hibernate', 'Oracle DB', 'Oracle Service Bus', 'SOAP', 'REST', 'WebLogic', 'Git'],
					role: "Team Lead",
					contents: `
Designed and built the National Population Database project under the Ministry of Public Security as an outsourced developer.

Responsibilities:

- Led a team with 3 members, developed integration services using Java and related technologies such as OSB, WebLogic, and Oracle DB.

- Worked closely with in-house teams (PO, PM, SA, DEV) to grasp the key needs and technical details of the product.

- Built development environment infrastructure on-premise: CentOS 7, Oracle DB, WebLogic clustering, and CD manually using Bash/Shell and Batch.

- Participated in developing backend services for managing population data using Spring Boot and Oracle DB.

- Supported direct connections from LGSP (Local Government Service Platform) and NGSP (National Government Service Platform) to the developed services.
`
				},
				{
					title: 'ATM Transactions Fraud Detection',
					period: 'Aug 2019 - Mar 2020',
					skills: ['Java', 'Python', 'Hibernate', 'Spring', 'Kafka', 'AI/ML', 'OracleDB', 'Docker', 'Git'],
					role: "Software Engineer",
					contents: `
Designed and built a real-time fraud detection system for ATM transactions, resulting in a significant reduction in fraudulent activity.

Responsibilities:

- Implemented ML algorithms and tools such as Tibco Statistica, Tibco Data Science, Pandas, Scikit-learn, and Tree-based algorithms using Python to load data from Oracle DB for cleansing, enriching, and training models.

- Deployed the trained model with ~29% true positives (actual fraudulent activity) and ~25% false negatives (actual non-fraudulent notifications) results using Spring Boot and Kafka with two main streams, one for the training cycle and one for detection.
`
				},
				{
					title: 'In-house Device Management System',
					period: 'Nov 2018 - Aug 2019',
					skills: ['Java', 'C', 'Thingsboard', 'MQTT', 'Git', 'Docker'],
					role: "Software Engineer",
					contents: `
Collaborated with a startup to build an IoT application for managing the status of various in-house devices (such as those in buildings, malls, and stores).

Responsibilities:

- Customized and configured Thingsboard CE (Community Edition) features and deployed using Docker.

- Developed simulator tools using Java and MQTT for pushing real-time data continuously to Thingsboard.

- Used Git as the source control system and Trello for task management.
`
				},
				{
					title: 'Scraping User Data',
					period: 'Jan 2018 - Oct 2018',
					skills: ['Java', 'Cassandra', 'Apache Storm', 'Selenium', 'SVN'],
					role: "Software Engineer",
					contents: `
Built a Java-based company product that scrapes types of data from various sources, including social media platforms, websites, and search engines.

Responsibilities:

- Implemented scraping tools and libraries such as Selenium with headless Chrome, Facebook GraphAPI, etc. to collect data from real estate and car-selling websites, streaming large amounts of data using Apache Storm and storing it in Cassandra.

- Applied techniques like IP rotation, human interaction simulation, and discovery of data allowed in robots.txt to avoid blocking while scraping.

- Used SVN as the source control system and Trello for task management.
`
				}
			]
		}
	],
	edu: [
		{
			period: "Sep 2015 - Jul 2018",
			name: "Hanoi Vocational College of Technology",
			degree: "Higher Diploma",
			note: [
				"GPA: 8.4/10 overall",
				"#1 score in graduation project of the Information Technology department",
				"Teaching assistant for subjects such as OOP, DSA, Java"
			]
		}
	],
	cert: [
		{
			period: "Jun 2024",
			name: "SQL (Advanced) Certificate",
			at: "Hackerrank",
			link: "https://www.hackerrank.com/certificates/c3a69a726a76"
		},
		{
			period: "May 2024",
			name: "Rapid Developer Certification (ID: 74513)",
			at: "Mendix",
			link: "https://academy.mendix.com/file?guid=104427216362429739&changedDate=1744529811864&name=RapidDeveloperCertification-74513.pdf&target=internal"
		},
		{
			period: "Sep 2020",
			name: "Problem Solving (Basic) Certificate",
			at: "Hackerrank",
			link: "https://www.hackerrank.com/certificates/8c35d83bfc2c"
		}
	]
};
