'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';

const ISSPATH = '/projects_img/Infrared-Security-System/';
const BBPATH = '/projects_img/Balance-Bot/';
const DBPATH = '/projects_img/Dubious-Studio/';
const LLMWPATH = '/projects_img/LLM-Smart-Watch/';
const SLAMRPATH = '/projects_img/SLAM_Rover/';
const WBTHRPATH = '/projects_img/Web-Connected-Therm/';

const projects = [
	{
		title: 'Sensor-Fused Self-Balancing Robot',
		description: (
			<ul className="list-disc list-inside space-y-1 text-gray-400">
				<li>Developed real-time control software in C++ on ESP32-S3 using FreeRTOS.</li>
				<li>Implemented PID control for optimal balance and stability.</li>
				<li>Acquired sensor data via I²C (IMU) and direct ADC (magnetic encoders) for flexible signal acquisition.</li>
				<li>Created a PyBullet Simulation for rapid testing of control algorithms and Kalman filter.</li>
				<li>Built a ROS2/Gazebo Docker container to run hardware-in-the-loop testing of C++ control code.</li>
			</ul>
			),
		media: [BBPATH + 'img1.PNG', BBPATH + 'img2.jpg', BBPATH + 'vid1.mp4'],
		github: 'https://github.com/max-proj17/Robotics-Projects/wiki',
		tags: ["C/C++", "Embedded Systems", "RTOS", "Docker", "Control Systems Design", "Kalman Filtering", "ROS2", 
			"Gazebo", "PyBullet", "Multithreading"]
	},
	{
		title: 'LLM Smart-Watch',
		description: (
			<ul className="list-disc list-inside space-y-1 text-gray-400">
				<li>Developed an LLM-Smart-Watch, a wearable device integrating AI capabilities through ChatGPT.</li>
				<li>Utilizes an ESP32 microcontroller and C++ programming language to enable real-time interaction with AI services, transforming user engagement with technology.</li>
				<li> Built with FreeRTOS to handle parallel processes, Firebase to store user photos, and SPI to communicate with the display.</li>
			</ul>
			),
		media: [LLMWPATH + 'img (1).JPG', LLMWPATH + 'img (1).PNG', LLMWPATH + 'img (2).jpg'],
		github: 'https://github.com/max-proj17/LLM-Smart-Watch',
		tags: ["C/C++", "Embedded Systems", "RTOS", "Large Language Models (LLM)", "Firebase", "SPI", "ROS2", "APIs"]
	},
	{
		title: 'Dubious Studio',
		description: (
			<ul className="list-disc list-inside space-y-1 text-gray-400">
				<li>Developed an AI-assistive drawing application designed to enhance artists' workflows, facilitate art learning, and accelerate art production.</li>
				<li>Integrated a Style Transfer TensorFlow model and Stable Diffusion (SD) models as widgets, with processing managed by CLIP Drop’s SD API</li>
				<li>Crafted and refined the drawing canvas, incorporating industry-standard controls for enhanced user interaction</li>
				<li>Engineered the program for multithreading, ensuring each AI widget operates on a separate thread for optimal performance.</li>
			</ul>
			),
		media: [DBPATH + 'img1.jpg', DBPATH + 'img2.png', DBPATH + 'img3.jpg', DBPATH + 'img4.jpg', DBPATH + 'img5.jpg', DBPATH + 'img6.jpg', DBPATH + 'img7.jpg'],
		github: 'https://github.com/max-proj17/Dubious-Studio',
		tags: ["Python", "Multithreading", "Object-Oriented Programming", "Large Language Models (LLM)", "PyQt", "Data Structures", "TensorFlow", "APIs", "GUI Design"]
	},
	{
		title: 'SLAM Point Cloud Extraction Pipeline for Rover Autonomy',
		description: (
			<ul className="list-disc list-inside space-y-1 text-gray-400">
				<li> Employed the Intel RealSense SDK and OpenCV in Python to configure a Nvidia Jetson Xavier NX for real-time depth and color frame streaming from an Intel RealSense D435i camera. Advanced image processing converted frames to numpy arrays and applied color maps to depth images for side-by-side display, demonstrating proficiency in depth mapping.</li>
				<li>Isaac ROS SLAM (Simultaneous Localization and Mapping) nodes for point cloud extraction and rosbag recording. This process was visualized in RViz. The point cloud map produced was instrumental for autonomous navigation, facilitating future integration with Nav2. </li>
			</ul>
			),
		media: [SLAMRPATH + 'img1.jpg', SLAMRPATH + 'img2.jpg', SLAMRPATH + 'img3.png', SLAMRPATH + 'img4.png'],
		github: 'https://github.com/roboticsatiowa',
		tags: ["ROS2", "Docker", "Nvidia Jetson", "Perception", "Sensor Fusion", "Linux", "SLAM", "Data Visualization", "Computer Vision"]
	},
	{
		title: 'Infrared Security System',
		description: (
			<ul className="list-disc list-inside space-y-1 text-gray-400">
				<li>The electric eye safety system uses an infrared beam and receiver with hardware filtering (BJTs, MOSFETs, diodes, capacitors) to detect obstructions and trigger alerts.</li>
				<li>Addresses the need for reliable sensor data in safety-critical applications, functioning well under varying lighting conditions, and includes an SMS alert feature.</li>
			</ul>
			),
		media: [ISSPATH + 'img1.png', ISSPATH + 'img2.jpg', ISSPATH + 'img3.png', ISSPATH + 'img4.png', ISSPATH + 'img5.png', ISSPATH + 'img6.png', ISSPATH + 'vid1.mp4'],
		github: '',
		tags: ["WiFi", "Diodes", "Signal Processing", "Filtering", "Capacitors", "MOSFET", "Amplifiers", "BJTs", "Raspberry Pi", "Infrared (IR)"]
	}
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<string[]>([]);

  const openModal = (media: string[]) => {
    setActiveMedia(media);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveMedia([]);
  };

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
              <img
                src={project.media[0]}
                alt={project.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => openModal(project.media)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="text-gray-400 mb-4">{project.description}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /><span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-[100]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[90]"
      >
        <div className="bg-gray-900 rounded-lg max-w-3xl w-full p-4 relative overflow-hidden">
          <button onClick={closeModal} className="absolute top-2 right-2 z-50 text-2xl text-white bg-black/60 p-1 rounded hover:text-red-400 focus:outline-none">✕</button>
          
          <div className="pt-10">
            <Swiper
              modules={[SwiperNavigation]}
              navigation
              spaceBetween={20}
              slidesPerView={1}
            >
              {activeMedia.map((media, i) => (
                <SwiperSlide key={i}>
                  {media.endsWith('.mp4') ? (
                    <video controls className="w-full rounded" controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback draggable={false} onContextMenu={(e) => e.preventDefault()}>
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={media} alt={`media-${i}`} className="w-full rounded" draggable={false} onContextMenu={(e) => e.preventDefault()} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Modal>
    </div>
  );
};


export default Projects;