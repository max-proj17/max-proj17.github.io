'use client';

// import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
	const { data: githubData } = useSWR('https://api.github.com/users/max-proj17', fetcher);
	function formatRepoCount(count: number): string {
		if (count < 5) return count.toString();
		return `${Math.floor(count / 5) * 5}+`;
	}
	const githubRepos = githubData?.public_repos || 0;
	const displayRepos = formatRepoCount(githubRepos);

	return (
		<div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
			<div className="text-center relative z-10 max-w-4xl mx-auto">
				<motion.h1
					className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Maximelio Finch
				</motion.h1>
				<motion.h1
					className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					I design autonomy for machines
				</motion.h1>

				<motion.p
					className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Robotics and autonomy engineer with expertise in C++, ROS and real-time systems. 
				</motion.p>

			</div>
		</div>
	);
};

export default Home;