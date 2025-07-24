'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	projectUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			className="group h-full"
		>
			<section
				className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative h-full hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 hover:cursor-pointer flex flex-col"
				onClick={() => {
					window.open(projectUrl, '_blank');
				}}
			>
				<div className="relative h-48 overflow-hidden">
					<Image
						src={imageUrl}
						alt="Project I worked on"
						quality={95}
						className="w-full h-full object-cover transition group-hover:scale-105"
						fill
					/>
				</div>
				<div className="p-6 flex flex-col flex-grow">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p className="text-gray-700 dark:text-white/70 mb-4 flex-grow">
						{description}
					</p>
					<ul className="flex flex-wrap gap-2">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
			</section>
		</motion.div>
	);
}
