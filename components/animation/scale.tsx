'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export default function ScaleProvider({ children }: { children: ReactNode }) {
	return (
		<>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.9 }}
			>
				{children}
			</motion.div>
		</>
	);
}
