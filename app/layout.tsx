import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import NavBar from './navbar.jsx';
import Image from 'next/image';
import { Button, Typography } from '@heroui/react';
import { Nunito } from 'next/font/google';
import { FaInstagram, FaWaze } from 'react-icons/fa';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import FadeInProvider from '@/components/animation/opacity';

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
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='icon' href='/icon.jpeg' type='image/jpeg' sizes='any' />
				<link
					rel='stylesheet'
					href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
					integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
					crossOrigin=''
				/>
			</head>
			<body
				className={clsx(
					'min-h-screen w-full text-foreground bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				<div className='relative flex flex-col h-screen'>
					<NavBar />
					<main className='grow'>
						<FadeInProvider>{children}</FadeInProvider>
					</main>
					<Analytics />
					<footer className='w-full rounded-t-[80px] flex flex-col md:flex-row md:items-center justify-between bg-foreground py-10 px-15'>
						<div>
							<Image
								src={'/monochrome-logo.png'}
								alt='monochrome-logo'
								width={100}
								height={100}
							/>
						</div>
						<div className='flex flex-row gap-5'>
							<div className='flex flex-col  gap-4 mt-6'>
								<Typography
									className={`${nunito.className} text-accent font-bold text-2xl text-balance`}
								>
									Find Us at the Entreprenuership Fair!
								</Typography>
								<div className='flex flex-col md:flex-row gap-2 md:gap-7 md:items-center'>
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
							className={`${nunito.className} flex flex-row gap-7 items-center text-background-secondary/70 mt-10 md:mt-0`}
						>
							<Link href='/privacy'>Privacy Notice</Link>{' '}
						</div>
					</footer>{' '}
				</div>
			</body>
		</html>
	);
}
