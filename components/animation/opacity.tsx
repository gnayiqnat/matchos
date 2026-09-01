'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export default function FadeInProvider({ children }: { children: ReactNode }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 1 }}
			>
				{children}
			</motion.div>
		</>
	);
}
