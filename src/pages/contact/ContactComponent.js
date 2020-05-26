import React, { Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {greeting} from '../../portfolio';
import {Fade} from 'react-reveal';
import './ContactComponent.css';


// const blogSection = {
// 	/* Blogs Section */

// 	title: "Blogs",
// 	subtitle:
// 		"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
// 	link: "https://ashutoshhathidara.wordpress.com",
// 	avatar_image_path: "blogs_image.svg"
// };

const addressSection = {
	title: "Address",
	subtitle: "Eller College of Management, University of Arizona, Tucson, AZ, United States",
	avatar_image_path: "address_image.svg",
	location_map_link: "https://goo.gl/maps/buQh8dJqyEPDntFx7"
}

const phoneSection = {
    title: "Phone Number",
    subtitle: "+1(520)448-7107"
}

const emailSection = {
    title: "Email",
    subtitle: "rsajja@email.arizona.edu"
}

const ContactData = {
	title: "Contact Me",
    profile_image_path: "rohithsajja.png",
    description: "I am available on almost all social media platforms. Feel free to reach out, to talk about Machine Learning, Deep Learning, Software Engineering or Product Management."
};

class Contact extends Component {
    render() {
        return (
					<div className="contact-main">
						<Header />
						<div className="basic-contact">
							<Fade bottom duration={1000} distance="40px">
								<div className="contact-heading-div">
									<div className="contact-heading-img-div">
										<img
											src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="contact-heading-text-div">
										<h1 className="contact-heading-text">
											{ContactData["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{ContactData["description"]}
										</p>
										<SocialMedia />
										<div className="resume-btn-div">
											<Button
												text="See My Resume"
												newTab={true}
												href={greeting.resumeLink}
											/>
										</div>
									</div>
								</div>
							</Fade>
							{/* <Fade bottom duration={1000} distance="40px">
								<div className="blog-heading-div">
									<div className="blog-heading-text-div">
										<h1 className="blog-heading-text">
											{blogSection["title"]}
										</h1>
										<p className="blog-header-detail-text subTitle">
											{blogSection["subtitle"]}
										</p>
										<div className="blogsite-btn-div">
											<Button
												text="Visit My Blogsite"
												newTab={true}
												href={blogSection.link}
											/>
										</div>
									</div>
									<div className="blog-heading-img-div">
										<img
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
								</div>
							</Fade> */}
							<Fade bottom duration={1000} distance="40px">
								<div className="address-heading-div">
									
									<div className="address-heading-text-div">
										{/* <h1 className="address-heading-text">
											{addressSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{addressSection["subtitle"]}
										</p> */}
										<h1 className="address-heading-text">
											{phoneSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											<a href="tel://5204487107">{phoneSection["subtitle"]}</a>
										</p>
										<h1 className="address-heading-text">
											{emailSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											<a href="mailto:rsajja@email.arizona.edu">{emailSection["subtitle"]}</a>
										</p>
										{/* <div className="address-btn-div">
											<Button
												text="Visit on Google Maps"
												newTab={true}
												href={addressSection.location_map_link}
											/>
										</div> */}
									</div>

									<div className="contact-heading-img-div">
										 <img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> 
									</div>

								</div>
							</Fade>
						</div>
						<Footer />
					</div>
				);
    }
}

export default Contact;