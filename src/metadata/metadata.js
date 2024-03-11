module.exports = {
	name: 'Tuan, Vu Anh (Anthony)',
	title: 'Software Engineer | Backend Developer | Java developer',
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
		['Kafka', 70, 'Mid-level'],
		['OSB/ESB', 70, 'Mid-level'],
		['Python', 60, 'Mid-level'],
		['JS', 50, 'Beginner'],
		['AI/ML', 50, 'Beginner'],
		['Data processing', 50, 'Beginner'],
	],

	company: [
		{
			cname: "VMO Holdings",
			crole: "Senior Java developer",
			cperiod: "2022 - Present",
			prj: [
				{
					title: 'Ringkas housing loan',
					period: 'Sep 2023 - Present',
					skills: ['Java', 'Spring Webflux', 'SOAP', 'REST', 'Git', 'AWS', 'ELK', 'Notion'],
					role: "Senior Software engineer",
					contents: `
Developed, enhanced, maintained features throughout the entire backend of v1 of CRM housing loan system.

Responsibilities:

- Develope, enhance, maintain multiple Back-end services in microservices system using Spring Webflux, Spring Boot, R2DBC, PostgreSQL involve to some Front-end tasks using React.js.

- Work closely with in-house team member for clearing PRD/URD, integrating with FE side.

- Monitor infrastructure of development, sandbox, production environment include Kubernetes, Rancher, Kibana,... on AWS EC2.

- Agile with Notion

- Full flow of CI CD
`
				},
				{
					title: 'P2C',
					period: 'Jul 2022 - Aug 2023',
					skills: ['Java', 'Struts', 'Spring', 'SOAP', 'REST', 'Git', 'JSP', 'Jquery', 'Jira'],
					role: "Senior Software engineer",
					contents: `
Developed, enhanced, maintained multiple sub-system projects for PCCW (Hong Kong) client as an outsourced Java developer.

Responsibilities:

- Actively communicated with the in-house development team to understand project requirements and design specifications, as well as to catch up on tasks during daily stand-up meetings.

- Developed new features and improved old features for the client's services using Java and related technologies and utilized SQL Server for database management.

- Led a 3 members team, mentored how to work with client, workflow (coding and GitFlow), reviewed document and source code.
`
				}
			]
		},
		{
			cname: "Enterprise Nao",
			crole: "Technical leader",
			cperiod: "2018 - 2022",
			prj: [
				{
					title: 'Vietinbank E-Fast business customers banking service',
					period: 'Jul 2021 - Jun 2022',
					skills: ['Java', 'Spring', 'Hibernate', 'Jasper Report', 'REST', 'OracleDB', 'Docker', 'K8s', 'Git', 'Jira'],
					role: "Team lead",
					contents: `
Rebuilt Vietinbank's business customer banking service into microservices as an outsourced Java developer.

Responsibilities:

- Collaborated with the in-house development team to understand project requirements and design specifications.

- Built infrastructure for development and UAT environment include Kubernetes, Rancher, ELK, Prometheus,... according to Vietinbank's running system documents.

- Developed microservices for the banking service using Java 11 and related technologies, such as Spring Boot 2, Hibernate, Jasper Report, Oracle DB.

- The developed product has won the Golden Star (Sao Khue) Award.

- Led a team with 6 backend members, mentored team members to review each other, resolve conflict.
`
				},
				{
					title: 'Vietinbank E-Connect',
					period: 'Jun 2021 - Mar 2022',
					skills: ['Java', 'Spring', 'Hibernate', 'Jasper Report', 'REST', 'OracleDB', 'Docker', 'K8s', 'Git', 'Jira'],
					role: "Team lead",
					contents: `
Worked as an outsourced Java developer and built a Vietinbank system which supported connections from other systems like Misa ERP, Grab, etc to core banking.

Responsibilities:

- Collaborated with the in-house development team to understand project requirements and design specifications.

- Built infrastructure for development and UAT environment include Kubernetes, Rancher, ELK, Prometheus,... according to Vietinbank's running system documents.

- Developed Rest API services using Java 11 and related technologies, such as Spring Boot 8, Jasper Report, Hibernate, Oracle DB.

- Led a team with 3 backend members, reviewed code of team members.
`
				},
				{
					title: 'National population database',
					period: 'Mar 2020 - Jul 2021',
					skills: ['Java', 'Spring', 'Hibernate', 'Oracle DB', 'Oracle Service Bus', 'SOAP', 'REST', 'Weblogic', 'Git'],
					role: "Team lead",
					contents: `
Designed and built the National Population Database project under the Ministry of Public Security as an outsourcing developer.

Responsibilities:

- Worked closely with the in-house teams (PO, PM, SA, DEV) to grasp the key needs and technical details of the product.

- Led a team with 3 members, developed integration services using Java and related technologies, such as Java, OSB, Weblogic, Oracle DB.

- Built development environment infrastructure on-premise: CentOS 7, Oracle DB, Weblogic clustering, CD manually using Bash/Shell and both Batch.

- Attended to develop Backend services in the system for managing population data using Spring Boot, Oracle DB.

- Supported connection from LGSP (Local Government Service Platform) and NGSP (National Government Service Platform) to the developed services.
`
				},
				{
					title: 'ATM transactions fraud detection',
					period: 'Aug 2019 - Mar 2020',
					skills: ['Java', 'Python', 'Hibernate', 'Spring', 'Kafka', 'AI/ML', 'OracleDB', 'Docker', 'Git'],
					role: "Software engineer",
					contents: `
Designed and built real-time fraud detection system for ATM transactions, resulting in a significant reduction in fraudulent activity.

Responsibilities:

- Implemented ML algorithms and tools such as Tibco Statica, Tibco Datascience, Pandas, Sk-learn and Tree-based algorithm, etc libraries using Python to load data from Oracle DB for cleansing, enrichment data and train model.

- Deployed trained model with the ~29% true positive (actual fraudulent activity) and ~25% false negative (actual non-fraudulent notify) result using Spring boot, Kafka with two main streams, one for training cycle, one for detection.
`
				},
				{
					title: 'In-house device management system',
					period: 'Nov 2018 - Aug 2019',
					skills: ['Java', 'C', 'Thingsboard', 'MQTT', 'Git', 'Docker'],
					role: "Software engineer",
					contents: `
Collaborated with a startup to build an IoT application for managing the status of various in-house devices (such as those in buildings, malls and stores).

Responsibilities:

- Experience in customization (both using built-in and raw source code) and configuration of Thingsboard CE (Community Edition) features and deploy with Docker.

- Developed simulator tools using Java and MQTT for pushing real-time data continuously to the Thingsboard.
`
				},
				{
					title: 'Scraping user data',
					period: 'Jan 2018 - Oct 2018',
					skills: ['Java', 'Cassandra', 'Apache Storm', 'Selenium', 'SVN'],
					role: "Software engineer",
					contents: `
Built the Java-based company product that scrapes types of data from various sources, including social media platforms, websites, and search engines.

Responsibilities:

- Implemented solution using scraping tools and libraries such as Selenium with headless Chrome, Facebook GraphAPI, etc to collect data from real-estate and car selling websites, as well as Facebook groups, streaming large amount of data by Apache Storm and store on Cassandra database.

- Applied techniques like IP rotation, human interaction simulation, discovery data allowed in robot.txt when scrap the data to avoid blocking by website.

- Using SVN as source control system. 
`
				}
			]
		}
	],
	edu: [
		{
			period: "Sep 2015 - Jul 2018",
			name: "Hanoi vocational College of Technology",
			degree: "Higher Diploma",
			note: [
				"GPA: 8.4/10",
				"#1 score of graduation project of Information Technology department",
				"Teaching assistant for some subjects such as OOP, DSA, Java"
			]
		}
	]
};
