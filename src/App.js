import React from 'react';
import hamsaResume from './resume/hamsaResume.pdf';
import './App.css';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Project from './components/projects';
import ccd from './images/ccd-edited.jpg';
import { FiPhoneCall, FiExternalLink, FiDownload } from 'react-icons/fi';
import {
	FaUser,
	FaProjectDiagram,
	FaLaptopCode,
	FaFacebookSquare,
	FaLinkedin,
	FaInstagram,
	FaCertificate,
	FaHome
} from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { FcGraduationCap } from 'react-icons/fc';
import { AiFillLike } from 'react-icons/ai';
import { GiCricketBat, GiShuttlecock, GiMusicalNotes } from 'react-icons/gi';
import { IoIosMailOpen } from 'react-icons/io';
function App() {
	return (
		<React.Fragment>
			<div className="App container mt-3">
				<header className="row">
					<h1 className=" col-12 text-center text-white">Hamsa Vardhan</h1>
					<h4 className=" col-12 text-center text-white">Full Stack Developer</h4>
				</header>
				<div className="row parent">
					<div className="col-sm-12 col-lg-4 left-side ">
						<img src={ccd} alt="ccd" className="img-thumbnail d-none  d-lg-block d-xl-block" />
						<div className="col-12 row contact">
							<h4 className="col-12">contact</h4>
							<p className="col-12">
								<FiPhoneCall className="mr-2" /> 9182947798
							</p>
							<p className="col-12">
								<IoIosMailOpen className="mr-2" /> hamsavardhan99@gmail.com
							</p>
							<p className="col-12">
								<FaHome className="mr-2" /> Srikakulam AP code: 532127
							</p>
						</div>
						<div className="col-12 row portfolio">
							<h4 className="col-12">Portfolio</h4>
							<a
								href="https://hamsa-vardhan.github.io/portfolio/"
								target="_blank"
								rel="noopener noreferrer"
								className="col-12"
							>
								https://hamsa-vardhan.github.io/portfolio/
							</a>
						</div>
						<div className="col-12 row skill">
							<h4 className="col-12">skill</h4>
							<Skills />
						</div>
						<div className="col-12 row follow">
							<h4 className="col-12">Follow me</h4>
							<p className="col-12">
								<span>
									<FaLinkedin className="mr-2" />linkedin.com/in/hamsavardhans-profile
								</span>
							</p>
							<p className="col-12">
								<span>
									<FaFacebookSquare className="mr-2" />facebook.com/profile.php?id=100010967741162
								</span>
							</p>
							<p className="col-12">
								<span>
									<FaInstagram className="mr-2" />instagram.com/hamsa_vardhan/
								</span>
							</p>
						</div>
					</div>
					<div className="right-side col-sm-12 col-lg-8 border-dark">
						<div className="col-12 row about">
							<span className="container-fluid row">
								{' '}
								<h3 className="col-5">
									<FaUser className="mr-2" size={'1.5rem'} />About Me
								</h3>{' '}
								<span className="col-7">
									<hr style={{ borderTop: '1.5px dotted black' }} />
								</span>{' '}
							</span>
							<p className="container-fluid">
								Fervent web developer with great enthusiasm to enrich web. I prefer to keep learning,
								continue challenging myself, and do interesting things that matter. My abundant energy
								fuels me in the pursuit of many interests, hobbies, areas of study and artistic
								endeavors. I’m a fast learner, able to pick up new skills and juggle different projects
								and roles with relative ease
							</p>
						</div>
						<div className="col-12 row education">
							<span className="container-fluid row">
								{' '}
								<h3 className="col-5">
									<FcGraduationCap className="mr-2" size={'1.5rem'} />Education
								</h3>{' '}
								<span className="col-7">
									<hr style={{ borderTop: '1.5px dotted black' }} />
								</span>{' '}
							</span>
							<Education />
						</div>
						<div className="col-12 row projects">
							<span className="container-fluid row">
								{' '}
								<h3 className="col-5">
									<FaProjectDiagram className="mr-2" size={'1.5rem'} />Projects
								</h3>{' '}
								<span className="col-7">
									<hr style={{ borderTop: '1.5px dotted black' }} />
								</span>{' '}
							</span>
							<Project />
						</div>
						<div className="col-12 row">
							<span className="container-fluid row">
								{' '}
								<h3 className="col-5">
									<MdWork className="mr-2" size={'1.5rem'} />Experience
								</h3>{' '}
								<span className="col-7">
									<hr style={{ borderTop: '1.5px dotted black' }} />
								</span>{' '}
							</span>
							<Experience />
						</div>
						<div className="col-12 row">
							<span className="container-fluid row">
								{' '}
								<h3 className="col-5">
									<FaCertificate className="mr-2" size={'1.5rem'} />Certifications
								</h3>{' '}
								<span className="col-7">
									<hr style={{ borderTop: '1.5px dotted black' }} />
								</span>{' '}
							</span>
							<p
								className="container-fluid"
								style={{
									padding: '0.5rem 1rem',
									borderRadius: '0.5rem',
									margin: '1rem',
									fontSize: '1.2rem',
									backgroundColor: '#f1f1f1'
								}}
							>
								I'm a Redhat certified system administrator
							</p>
						</div>
						<div className="col-12 row interest">
							<span className="container-fluid row">
								{' '}
								<h3 className="col-5">
									<AiFillLike className="mr-2" size={'1.5rem'} />Interests
								</h3>{' '}
								<span className="col-7">
									<hr style={{ borderTop: '1.5px dotted black' }} />
								</span>{' '}
							</span>
							<ul className="row container-fluid" style={{ listStyleType: 'none' }}>
								<li className="col-3" style={{ fontSize: '1rem' }}>
									<GiCricketBat /> cricket
								</li>
								<li className="col-3" style={{ fontSize: '1rem' }}>
									<GiShuttlecock /> Badminton
								</li>
								<li className="col-3" style={{ fontSize: '1rem' }}>
									<FaLaptopCode /> coding
								</li>
								<li className="col-3" style={{ fontSize: '1rem' }}>
									<GiMusicalNotes /> music
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
