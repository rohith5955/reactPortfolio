import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteering",
	description:
		"I have worked with multiple high-paced organizations, including a Big4 firm, Government of India, and a start-up modelled organization. My core competencies include Data Science, Machine Learning, Deep Learning, Software Engineering, and Product Management.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Business Intelligence Analyst",
					company: "Eller College of Management",
					company_url: "https://eller.arizona.edu/",
					logo_path: "ua_eller.png",
					duration: "August 2019 - Present",
					location: "Tucson, Arizona",
					description:
						"Research on comprehensive data, and help an entrepreneurial organization turn data into insights. Worked with international clients to perform data mining and visualization on extensive large-scale data sets using Business Intelligence tools for reporting, creating dashboards",
					color: "red"
				},
				{
					title: "Data Scientist & Product Manager",
					company: "Center for Cognitive Activities (CCA)",
					company_url: "https://ccanitd.in",
					logo_path: "cca_logo.png",
					duration: "Feb 2016 - Mar 2019",
					location: "Durgapur, India",
					description:
						"Data Scientist researching on various metrics for performance of released applications, attendees and users. Led a team of 15, of data scientists, developers and designers working on multiple deliverables including applications, websites, graphic designs, and motion graphics. Customer retention up by 40% in 3 years",
					color: "blue"
				}
			]
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Data Analytics Intern",
					company: "ForeOptics",
					company_url: "https://www.foreoptics.com/",
					logo_path: "foreoptics_logo.png",
					duration: "June 2020 - Present",
					location: "Scottsdale, AZ",
					description: ["Develop a data analytics roadmap and release strategy for new products and refine existing analytics portfolio.", " Use advanced data modeling and analysis techniques to identify performance metrics, and discover insights."," Build, develop and maintain data models, reporting systems, data automation systems, dashboards.", " Optimize processes for data intake, validation, mining, engineering as well as modeling & visualization deliverables."],
					color: "#1268A8"
				},
				{
					title: "Software Engineering Intern",
					company: "PricewaterhouseCoopers Pvt. Ltd. (PwC)",
					company_url: "https://www.pwc.in/",
					logo_path: "pwc_logo.png",
					duration: "May 2018 - Jul 2018",
					location: "Bangalore, India",
					description: ["Developed Web Applications for a service-based client.", "Improved operational efficiency by 30%. Developed Applications on C#, .NET, SQL Server, and SQL. Performed Data Modeling and managed resources, product operations, with cloud ERP solutions on Azure and MS Dynamics 365. Worked in all phases of SDLC, Agile Project Management, and UI/UX Design"],
					color: "orange"
				},
				{
					title: "Research Intern",
					company: "Defence Research and Development Organization (DRDO), MoD, Govt. of India",
					company_url:
						"https://drdo.gov.in/",
					logo_path: "drdo_logo.png",
					duration: "May 2017 - Jul 2017",
					location: "Hyderabad, India",
					description: "Developed Application gateway for TCP/IP Communication Network and VoIP Systems. Comprehensive Network Analysis of time-critical defense network using NetworkX on Python",
					color: "black"
				}
			]
		},
		{
			title: "Volunteering",
			experiences: [
				{
					title: "Volunteer",
					company: "National Service Scheme, Govt. of India",
					company_url: "https://nss.gov.in/",
					logo_path: "nss_logo.png",
					duration: "Aug 2015 - May 2019",
					location: "Durgapur, India",
					description:
						"Social initiative by the Govt. of India that focuses on community and social development. As a volunteer, I taught many underprivileged school-going kids on basic math and science, conducted community development programs and awareness campaigns",
					color: "blue"
				},
				// {
				// 	title: "Microsoft Student Partner",
				// 	company: "Microsoft",
				// 	company_url: "https://www.microsoft.com/",
				// 	logo_path: "microsoft_logo.png",
				// 	duration: "Aug 2019 - PRESENT",
				// 	location: "Hyderabad, Telangana",
				// 	description:
				// 		"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
				// 	color: "#D83B01"
				// },
				// {
				// 	title: "Mozilla Campus Captain",
				// 	company: "Mozilla",
				// 	company_url: "https://www.mozilla.org/",
				// 	logo_path: "mozilla_logo.png",
				// 	duration: "Oct 2019 - PRESENT",
				// 	location: "Kurnool, Andhra Pradesh",
				// 	description:
				// 		"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
				// 	color: "#000000"
				// },
				// {
				// 	title: "Developer Students Club Member",
				// 	company: "DSC IIITDM Kurnool",
				// 	company_url:
				// 		"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
				// 	logo_path: "dsc_logo.png",
				// 	duration: "Jan 2018 - PRESENT",
				// 	location: "Kurnool, Andhra Pradesh",
				// 	description:
				// 		"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
				// 	color: "#0C9D58"
				// },
				// {
				// 	title: "Developer Program Member",
				// 	company: "Github",
				// 	company_url: "https://github.com/",
				// 	logo_path: "github_logo.png",
				// 	duration: "July 2019 - PRESENT",
				// 	location: "Work From Home",
				// 	description:
				// 		"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
				// 	color: "#181717"
				// }
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
