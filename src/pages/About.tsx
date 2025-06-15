'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {EagleScout} from '@/components/TechLogos';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "10+ Projects",
			description: "Completed high performance C/C++ applications"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "3+ Years",
			description: "Of professional work experience"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "2+ Research Internships",
			description: "For NASA & The University of Iowa"
		},
		{
			icon: <Briefcase />,
			title: "Eagle Scout",
			description: "Earned in 2017"
		},
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "UIOWA Hackathon 2023 Champion",
			description: "Won best integration and use of AI"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "Chicago Engineer Foundation Scholarship",
			description: "4 year recipient for maintaining a 3.2+ GPA"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "Hu Shin Kai Alumni",
			description: "Black Belt in Shotokan Karate, 2018"
		}
		
	];

	const interests = [
		"Robotics",
		"High-Performance C/C++",
		"Embedded Systems",
		"Control Systems",
		"Sensor Fusion & State Estimation",
		"Artificial Intelligence"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Me
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation>
					<div className="aspect-square overflow-hidden rounded-2xl">
						<img
							src="/profile/profile.jpg"
							alt="Maximelio Finch"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							I’m currently an Autonomy Software Engineer at Hexagon | Autonomy & Positioning, with a B.S. in Electrical and Computer Engineering from the University of Iowa. I specialize in robotics and embedded software, with a focus on high-performance C++ development, real-time systems, and multi-sensor fusion.
						</p>
						<p className="text-gray-300 leading-relaxed">
							My work spans across the robotics software stack—from bare-metal firmware to full Linux-based autonomy systems. I work daily with C/C++, Python, Docker, Git, RTOS, and Linux, and have extensive experience with communication protocols such as SPI, I2C, CAN, BLE, and Wi-Fi. I’m also deeply familiar with DDS-based messaging systems and containerized simulation environments using Gazebo and ROS 2.
						</p>
						<p className="text-gray-300 leading-relaxed">
							In both professional and personal projects, I’ve designed, integrated, and tested embedded systems for robotics applications—prioritizing performance, reliability, and real-time responsiveness.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Based in Chicago, IL", "B.S. in Electrical Engineering"].map((fact, index) => (
									<motion.li
										key={fact}
										className="flex items-center space-x-2 text-gray-300"
									>
										<span className="w-2 h-2 bg-white rounded-full" />
										<span>{fact}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="flex justify-start space-x-4">

							<a
								href="/skills"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								My Skills
							</a>
						</div>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
									<p className="text-gray-400">{achievement.description}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest, index) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;