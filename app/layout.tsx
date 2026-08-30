import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import NavBar from './navbar.jsx';
import GoogleMaps from '../components/googleMaps.jsx';
import Image from 'next/image';
import { Button, Typography } from '@heroui/react';
import { Nunito } from 'next/font/google';
import { FaInstagram, FaWaze } from 'react-icons/fa';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};
const nunito = Nunito({ weight: ['500', '600', '700', '800'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang='en'>
			<head />
			<body
				className={clsx(
					'min-h-screen w-full text-foreground bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				<div className='relative flex flex-col h-screen'>
					<NavBar />
					<main className='flex-grow'>{children}</main>
					<footer className='w-full rounded-t-[80px] flex items-center justify-between bg-foreground py-10 px-15'>
						<div>
							<Image
								src={'/monochrome-logo.png'}
								alt='monochrome-logo'
								width={100}
								height={100}
							/>
						</div>
						<div className='flex flex-row gap-5'>
							<div className='flex flex-col gap-2 mt-6'>
								<Typography
									className={`${nunito.className} text-accent font-bold text-2xl`}
								>
									Find Us at the Entreprenuership Fair!
								</Typography>
								<div className='flex flex-row gap-7 items-center'>
									<Typography
										className={`${nunito.className} text-background-secondary text-lg font-normal`}
									>
										Follow us on social media
									</Typography>
									<a href='https://www.instagram.com/matchos_entutm/' target='_blank'>
										<Button
											isIconOnly
											size='lg'
											className=' text-background bg-accent/10'
										>
											<FaInstagram />
										</Button>
									</a>
								</div>
							</div>{' '}
						</div>
						<div
							className={`${nunito.className} flex flex-row gap-7 items-center text-background-secondary`}
						>
							<Link href='/privacy'>Privacy Notice</Link>{' '}
							<Link href='/tos'>Terms of Use</Link>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
