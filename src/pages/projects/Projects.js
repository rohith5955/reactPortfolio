import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import Button from "../../components/button/Button";
import {Fade} from 'react-reveal';
import ProjectsData from '../../shared/opensource/projects.json';
import './Projects.css';

const projectsHeader = {
    title: "Projects",
    description: "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
    avatar_image_path: "version_control.svg"
}

// const User = props => {
// 	// const username = props.query.id;
// 	const username = "rohith5955";
// 	const [userData, setUserData] = useState(null);
// 	const [langData, setLangData] = useState(null);
// 	const [repoData, setRepoData] = useState(null);
// 	const [error, setError] = useState({ active: false, type: 200 });
// 	const [rateLimit, setRateLimit] = useState(null);
  
// 	const getUserData = () => {
// 	  fetch(`https://api.github.com/users/${username}`)
// 		.then(response => {
// 		  if (response.status === 404) {
// 			return setError({ active: true, type: 404 });
// 		  }
// 		  if (response.status === 403) {
// 			return setError({ active: true, type: 403 });
// 		  }
// 		  return response.json();
// 		})
// 		.then(json => setUserData(json))
// 		.catch(error => {
// 		  setError({ active: true, type: 400 });
// 		  console.error('Error:', error);
// 		});
// 	};
  
// 	const getLangData = () => {
// 	  const me = new GhPolyglot(`${username}`);
// 	  me.userStats((err, stats) => {
// 		if (err) {
// 		  console.error('Error:', err);
// 		  setError({ active: true, type: 400 });
// 		}
// 		setLangData(stats);
// 	  });
// 	};
  
// 	const getRepoData = () => {
// 	  fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
// 		.then(response => {
// 		  if (response.status === 404) {
// 			return setError({ active: true, type: 404 });
// 		  }
// 		  if (response.status === 403) {
// 			return setError({ active: true, type: 403 });
// 		  }
// 		  return response.json();
// 		})
// 		.then(json => setRepoData(json))
// 		.catch(error => {
// 		  setError({ active: true, type: 200 });
// 		  console.error('Error:', error);
// 		});
// 	};
  
// 	useEffect(() => {
// 	  fetch(`https://api.github.com/rate_limit`)
// 		.then(response => response.json())
// 		.then(json => {
// 		  setRateLimit(json.resources.core);
// 		  if (json.resources.core.remaining < 1) {
// 			setError({ active: true, type: 403 });
// 		  }
// 		});
  
// 	  getUserData();
// 	  getLangData();
// 	  getRepoData();
  
// 	  // setUserData(mockUserData);
// 	  // setLangData(mockLangData);
// 	  // setRepoData(mockRepoData);
// 	}, []);
  
// 	return (
// 	  <main>
// 		{rateLimit && <RateLimit rateLimit={rateLimit} />}
  
// 		{error && error.active ? (
// 		  <Error error={error} />
// 		) : (
// 		  <>
// 			{/* <Head title={`${username ? `OctoProfile | ${username}` : 'OctoProfile'}`} />
  
// 			<Corner /> */}
  
// 			{/* {userData && <UserInfo userData={userData} />} */}
  
// 			{langData && repoData && <Charts langData={langData} repoData={repoData} />}
  
// 			{repoData && <Repos repoData={repoData} />}
  
// 			<Footer />
// 		  </>
// 		)}
// 	  </main>
// 	);
//   };

class Projects extends Component {
    render(){
        return (
					<div className="projects-main">
						<Header />
						<div className="basic-projects">
							<Fade bottom duration={1000} distance="40px">
								<div className="projects-heading-div">
									<div className="projects-heading-img-div">
										<img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="projects-heading-text-div">
										<h1 className="projects-heading-text">
											{projectsHeader.title}
										</h1>
										<p className="projects-header-detail-text subTitle">
											{projectsHeader["description"]}
										</p>
									</div>
								</div>
							</Fade>
						</div>
						<div className="repo-cards-div-main">
							{ProjectsData.data.map(repo => {
								return <GithubRepoCard repo={repo} />;
							})}
						</div>
						<Button
							text={"More Projects"}
							className="project-button"
							href="https://github.com/rohith5955"
							newTab={true}
						/>
						<Footer />
					</div>
				);
    }
}

// User.propTypes = {
// 	query: PropTypes.object,
//   };
  
// export default User;

export default Projects;