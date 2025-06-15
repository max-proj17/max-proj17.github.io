'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		title: "Autonomy Software Engineer 1",
		company: "Hexagon's Autonomy & Positioning Division",
		location: "On-Site",
		period: "Jun 2024 - Present",
		type: "Full-time",
		image: "/experience/hex-lex.jpg",
		description: [
			"Developed a C++ trailer dynamics simulator for autonomous trucks using multithreading and DDS/ROS middleware for precise relative position tracking.",
			"Built a C++ Dead Reckoning Simulator integrating A-Kit’s curvature algorithms to match and improve the localization team’s Python-based estimator for accurate path tracking.",
			"Co-developed a Python Dash app with Pandas and Plotly for CSV validation and real-time visualization of CAN logs, navigation data, controller outputs, and map overlays—used company-wide across international teams."
		]
	},
	{
		title: "Electrical Engineer",
		company: "TRACERS UIowa x NASA",
		location: "On-Site",
		period: "Feb 2023 - May 2024",
		type: "Part-time",
		image: "/experience/tracers-max.jpg",
		description: [
			"Engineered a system focused on acquiring real-time temperature control data from a Thermal Control Unit (TCU) with Ethernet Modbus TCP using the Watlow F4T Process Controller.",
			"Developed Python software tools for teams to synchronize testing across equipment such as waveform generators and power supplies (via VISA and SCPI commands). Utilized MATLAB and Raspberry Pi to monitor ADC outputs sent via SPI.",
			"Wrote Verilog testbenches and modules for FPGAs to test space instrument timing systems.",
			"Contributed to design of Low-Voltage Differential Signaling (LVDS) embedded system via Altium to process CCSDS packets from satellite instruments to simulate receiving data from a rocket."
		]
	},
	{
		title: "Software Engineering Researcher",
		company: "Holo Reality Labs (University of Iowa)",
		location: "On-Site",
		period: "Sep 2023 - May 2024",
		type: "Part-time",
		image: "/experience/hlr.jpg",
		description: [
			"Built a Python-based AI tool (APEX) using Llama 3.1 for Afib patient education, now in hospital use.Integrated local LLMs for secure medical record processing.",
			"Contributed to research on a Unity-based VR eye exam app, ensuring in-game measurements and VR visuals accurately mirror real-life values for reliable assessments."
		]
	},
	{
		title: "Research Intern",
		company: "University of Chicago Medicine",
		location: "On-site",
		period: "Jun 2019 - Nov 2019",
		type: "Full-time",
		image: "/experience/ucm.jpg",
		description: [
			"Researched the reversibility of the complete denaturation of the Trypsin Protein with different Copolymers.",
			"Conferred with Dr. Raphael C. Lee and a team of graduate-student researchers every week to provide project updates. ",
			"Presented results at the end of the internship."
		]
	},
];

const Experience = () => {
	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Professional Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				{experiences.map((exp, index) => (
					<ScrollAnimation key={exp.title}>
						<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="grid grid-cols-1 md:grid-cols-[1fr,500px]">
								<div className="p-6 sm:p-8">
									<div className="flex items-center gap-3 mb-4 sm:mb-6">
										<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
											<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
										</div>
										<div>
											<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
											<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
										<MapPin className="w-4 h-4" />
										<span>{exp.location}</span>
										<span>•</span>
										<span>{exp.period}</span>
									</div>

									<ul className="space-y-3 sm:space-y-4">
										{exp.description.map((item, i) => (
											<li
												key={i}
												className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
											>
												<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
												<span className="leading-relaxed">{item}</span>
											</li>
										))}
									</ul>


								</div>

								<div className="relative hidden md:block">
									<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
										<img
											src={exp.image}
											alt={exp.company}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent group-hover:scale-105 transition-transform duration-500" />
									</div>
									
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;