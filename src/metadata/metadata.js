module.exports = {
	name: 'Tuan, Vu Anh (Anthony)',
	title: 'Software Engineer | Backend Developer | Java developer',
	facts: {
		'Email': '<a href="mailto:vuanhtuan3.14@gmail.com"><i class="fa fa-envelope fact-icon"></i>vuanhtuan3.14@gmail.com</a>',
		'Mobile': '<a href="tel:+84385061465"><i class="fa fa-phone fact-icon"></i>(+84)385061465</a>',
		'LinkedIn': '<a href="https://www.linkedin.com/in/tuanvayn/"><i class="fa-brands fa-linkedin fact-icon"></i>/tuanvayn</a>',
		'Github': '<a href="https://github.com/tuanvayn"><i class="fa-brands fa-github fact-icon"></i>/tuanvayn</a>'
	},
	skills: [
		['Java', 100, 'proficient'],
		['Spring', 100, 'proficient'],
		['OracleDB', 100, 'proficient'],
		['Docker', 100, 'proficient'],
		['K8s', 100, 'proficient'],
		['REST', 100, 'proficient'],
		['SOAP', 100, 'proficient'],
		['Git', 100, 'proficient'],
		['Kafka', 70, 'intermediate'],
		['OSB/ESB', 70, 'intermediate'],
		['Python', 60, 'intermediate'],
		['JS', 50, 'beginner'],
		['AI/ML', 50, 'beginner'],
		['Data processing', 50, 'beginner'],
	],

	company: [
		{
			cname: "VMO Holdings",
			crole: "Senior Java developer",
			cperiod: "2022 - Present",
			prj: [
				{
					title: 'P2C',
					period: 'Jul 2022 - Present',
					skills: ['Java', 'Struts', 'Spring', 'SOAP', 'REST', 'Git', 'JSP', 'Jquery', 'Jira'],
					role: "Senior Software engineer",
					contents: `
Maintained multiple sub-system projects for PCCW (Hong Kong) client as an outsourced Java developer.

- Active communicated with the in-house development team to understand project requirements and design specifications

- Led a 3 members team, developed new features and improved old features for the client's services using Java and related technologies and utilized SQL Server for database management.
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

- Collaborated with the in-house development team to understand project requirements and design specifications

- Led a team with 6 backend members, developed microservices for the banking service using Java and related technologies, such as Spring Boot, Hibernate and Docker, Kubernetes

- The developed product has won the Golden Star (Sao Khue) Award.
`
				},
				{
					title: 'Vietinbank E-Connect',
					period: 'Jun 2021 - Mar 2022',
					skills: ['Java', 'Spring', 'Hibernate', 'Jasper Report', 'REST', 'OracleDB', 'Docker', 'K8s', 'Git', 'Jira'],
					role: "Team lead",
					contents: `
Worked as an outsourced Java developer and built a Vietinbank system which supported connections from other systems like Misa ERP, Grab, etc.

- Collaborated with the in-house development team to understand project requirements and design specifications

- Led a team with 4 members, developed microservices using Java and related technologies, such as Spring and Hibernate.
`
				},
				{
					title: 'National population database',
					period: 'Mar 2020 - Jul 2021',
					skills: ['Java', 'Spring', 'Hibernate', 'Oracle DB', 'Oracle Service Bus', 'SOAP', 'REST', 'Git'],
					role: "Team lead",
					contents: `
Designed and built the National Population Database project under the Ministry of Public Security as an outsourced developer.

- Worked closely with the internal software engineers to grasp the key needs and technical details of the product

- Led a team with 3 members, developed services using Java and related technologies, such as Java, OSB, Weblogic.

- Attended to develop services in the system for managing population data using Spring Boot

- Supported connections from LGSP and NGSP to the developed services.
`
				},
				{
					title: 'ATM transactions fraud detection',
					period: 'Aug 2019 - Mar 2020',
					skills: ['Java', 'Python', 'Hibernate', 'Spring', 'Kafka', 'AI/ML', 'OracleDB', 'Docker', 'Git'],
					role: "Software engineer",
					contents: `
Designed and built real-time fraud detection system for ATM transactions, resulting in a significant reduction in fraudulent activity.

- Implemented algorithms and tools such as Tibco Statica, Tibco Datascience, Sk-learn and Tree-based algorithms, etc

- Deployed trained model with the ~30% true positive (actual fraudulent activity) and ~25% false negative (actual non-fraudulent notify) result.
`
				},
				{
					title: 'In-house device management system',
					period: 'Oct 2018 - Aug 2019',
					skills: ['Java', 'C', 'Thingsboard', 'MQTT', 'Git', 'Docker'],
					role: "Software engineer",
					contents: `
Collaborated with a startup to build an IoT application for managing the status of various in-house devices (such as those in buildings and stores).

- Studied to use and customized Thingsboard CE features

- Developed simulator tool for pushing data continuously to the Thingsboard platform

- Implemented embedded C in device simulators to understand how the embedded devices work.
`
				},
				{
					title: 'Scraping user data',
					period: 'Jan 2018 - Oct 2018',
					skills: ['Java', 'Cassandra', 'Apache Storm', 'Selenium', 'SVN'],
					role: "Software engineer",
					contents: `
Built the Java-based data platform that scrapes types of data from various sources, including social media platforms, websites, and search engines.

- Studied, suggested, implemented solutions for scraping tools and techniques such as Apache Storm streaming, Selenium, Headless browsers API, Facebook GraphAPI,... to the team.
`
				}
			]
		}
	],
	edu: [
		{
			period: "Sep 2015 - July 2018",
			name: "Hanoi vocational College of Technology",
			degree: "Higher Vocational Diploma",
			note: [
				"GPA: 8.4/10",
				"#1 score of graduation project of Information Technology department",
				"Teaching assistant for some subjects such as OOP, DSA, Java"
			]
		}
	]
};
