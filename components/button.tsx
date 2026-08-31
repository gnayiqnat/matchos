'use client';

import { Button } from '@heroui/react';

export default function CustomButton({
	text = '',
	icon = <></>,
	scrollTo = '',
	variant = 'normal',
}) {
	return (
		<>
			{variant === 'normal' ? (
				<Button
					onPress={() => {
						document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
					}}
					size='lg'
					className=' p-6 bg-accent text-background font-normal'
				>
					{text} {icon}
				</Button>
			) : (
				<Button
					onPress={() => {
						document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
					}}
					size='lg'
					variant='ghost'
					className={'text-foreground p-6'}
				>
					{text} {icon}
				</Button>
			)}
		</>
	);
}
