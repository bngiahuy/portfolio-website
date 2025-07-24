'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				I am a <span className="font-medium">Software Engineer</span> based in
				Ho Chi Minh City, currently contributing to the development of scalable,
				enterprise-grade software systems. I hold a Bachelor's degree in{' '}
				<span className="font-medium">Computer Science</span>{' '}
				from Bach Khoa University (HCMC University of Technology), one of
				Vietnam's leading technical universities, and I am pursuing my{' '}
				<span className="font-medium">Master of Computer Science</span> at the
				same institution.
			</p>

			<p className="mb-3">
				My technical background spans across backend engineering with
				proficiency in{' '}
				<span className="font-medium">Python, Node.js, and Spring Boot</span>. I have
				practical experience designing and implementing{' '}
				<span className="font-medium">RESTful APIs</span>, working with
				relational and NoSQL databases, and building robust{' '}
				<span className="font-medium">server-side architectures</span>. Recently, I have been focusing on enhancing my skills in{' '}
        <span className="font-medium">NLP</span> in order to develop AI-powered applications, particularly in the context of RAG (Retrieval-Augmented Generation) systems. 
			</p>

			<p className="mb-3">
				I am bilingual in{' '}
				<span className="font-medium">English and Vietnamese</span>, and have a
				deep interest in{' '}
				<span className="font-medium">distributed systems</span>,{' '}
				<span className="font-medium">AI/ML</span>, and{' '}
				<span className="font-medium">new technologies</span>. I'm
				fond of crafting clean, scalable code and continuously
				improving engineering workflows to become a true <span className="font-medium">"engineer"</span>.
			</p>
		</motion.section>
	);
}
