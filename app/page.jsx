import ScaleProvider from '@/components/animation/scale';
import CustomButton from '@/components/button';
import MapBlock from '@/components/MapComponent';
import { siteConfig } from '@/config/site';
import {
	Avatar,
	Button,
	Card,
	CardDescription,
	Chip,
	Typography,
} from '@heroui/react';
import { ArrowRight, ChefHat, Leaf, MapPin } from 'lucide-react';
import {
	Playfair_Display,
	Oswald,
	Outfit,
	Playfair,
	Inter,
	Nunito,
} from 'next/font/google';
import Image from 'next/image';
import { FaWaze } from 'react-icons/fa';

const outfit = Outfit({ weight: ['300', '400', '500', '600'] });
const inter = Inter({ weight: ['300', '400', '500', '600'] });
const playfairDisplay = Playfair_Display({
	weight: ['400', '600'],
	style: 'italic',
});
const nunito = Nunito({ weight: ['700', '800'] });

export default function Home() {
	return (
		<>
			<section
				className='flex h-screen pt-21 lg:flex-row px-8 md:px-30 bg-no-repeat bg-cover bg-right'
				style={{ backgroundImage: "url('/matchos-bg.png')" }}
			>
				<div className='flex  flex-col justify-start gap-10'>
					<div className='flex flex-col gap-8'>
						{/* <Chip
							size='lg'
							variant='soft'
							className={`${nunito.className} text-accent bg-white/60 py-2 px-3 rounded-4xl font-bold gap-2`}
						>
							<ChefHat size={20} />
							<span className='mt-1'>NEVER TRY, NEVER KNOW</span>
						</Chip> */}
						<Typography
							type='h1'
							className={`${outfit.className} text-7xl/15 md:text-8xl/19 font-bold text-wrap max-w-5 `}
						>
							matcha meets{' '}
							<span className={`${playfairDisplay.className} text-accent`}>
								nachos
							</span>
						</Typography>{' '}
						<Typography
							type='h2'
							className={`${outfit.className} text-2xl font-thin text-foreground text-balance max-w-xl`}
						>
							Refreshing matcha latte and crispy nachos made for your cravings.
						</Typography>
					</div>
					<div className={`${inter.className} flex flex-row gap-3 `}>
						<ScaleProvider>
							<CustomButton text='View Menu' icon={<ArrowRight />} scrollTo='menu' />
						</ScaleProvider>
						<ScaleProvider>
							<CustomButton
								variant='ghost'
								text='Find Us'
								icon={<MapPin size={30} />}
								scrollTo='location'
							/>
						</ScaleProvider>
					</div>
				</div>
				<div className='flex items-start justify-start -mt-20'>
					<Image
						src={'/food-both.png'}
						alt='matcha-latte'
						width={700}
						height={700}
						className='hidden xl:block'
					/>
				</div>
				{/* <Image src={'/stock1-nobg.png'} alt='stc' width={500} height={500} /> 
				<Image src={'/wave.svg'} alt='stc' fill={true} /> */}
			</section>
			<section
				id='location'
				className=' relative w-full h-fit px-3 md:px-13 lg:px-30 flex flex-col-reverse items-center md:flex-row bg-background gap-5 lg:gap-20 py-15'
			>
				<MapBlock />
				<div className='flex flex-col gap-7 p-3'>
					<div>
						<Typography
							className={`${nunito.className} text-accent text-lg font-black ml-2`}
						>
							LOCATION
						</Typography>
						<Typography
							type='h3'
							className={`${outfit.className} font-medium max-w-100 text-5xl lg:text-6xl text-foreground`}
						>
							Booth Details
						</Typography>
					</div>
					<div className='flex flex-col lg:flex-row gap-3'>
						<div className='px-5 py-4 bg-accent/5 rounded-xl'>
							<Typography
								className={`${nunito.className} text-accent text-lg font-black`}
							>
								Booth
							</Typography>
							<Typography
								className={`${outfit.className} font-base max-w-100 text-xl text-foreground/90 text-balance ml-1`}
							>
								22
							</Typography>
						</div>
						<div className='px-5 py-4 bg-accent/5 rounded-xl'>
							<Typography
								className={`${nunito.className} text-accent text-lg font-black`}
							>
								Date
							</Typography>
							<Typography
								className={`${outfit.className} font-base max-w-100 text-xl text-foreground/80 text-balance`}
							>
								23 Sept 2026 (Entreprenuership Day)
							</Typography>
						</div>
					</div>
					<div className='flex flex-col px-7 py-5 bg-accent/5 rounded-xl gap-4'>
						<Typography
							className={`${nunito.className} text-accent text-lg font-black`}
						>
							Venue
						</Typography>
						<Typography
							className={`${outfit.className} font-base max-w-100 text-xl text-foreground/80 text-balance`}
						>
							UTMSPACE Block T05, Skudai, 81310 Johor Bahru, Johor
						</Typography>
						<div className='flex flex-row gap-3'>
							{' '}
							<a
								href='https://maps.app.goo.gl/VRuri975ueW8nGU36/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<ScaleProvider>
									<Button className='text-background bg-accent/90'>
										Google Maps <MapPin />
									</Button>
								</ScaleProvider>
							</a>
							<a
								href='https://ul.waze.com/ul?ll=1.56324245%2C103.65291072&navigate=yes&zoom=17'
								target='_blank'
								rel='noopener noreferrer'
							>
								<ScaleProvider>
									<Button className='text-background bg-accent/90'>
										Waze <FaWaze />
									</Button>
								</ScaleProvider>
							</a>
						</div>
					</div>
				</div>
			</section>
			<div
				className='w-full h-40 bg-no-repeat bg-cover'
				style={{ backgroundImage: 'url(/wave.svg)' }}
			/>
			<section className=' relative h-fit w-full mx-auto flex flex-col justify-center items-center bg-background-secondary gap-15 pt-10 pb-20 px-3'>
				{' '}
				<div>
					<Typography
						className={`${nunito.className} text-accent font-black text-center`}
					>
						NOTICE BOARD
					</Typography>
					<Typography
						type='h3'
						className={`${outfit.className} font-medium lg:max-w-200 text-5xl lg:text-6xl text-foreground text-balance text-center`}
					>
						Limited deals, and updates.
					</Typography>
				</div>
				<Image
					src='/poster1.png'
					alt='poster'
					width={320}
					height={200}
					className='rounded-lg'
				/>
			</section>
			{/*<section className='rounded-3xl relative w-full flex flex-col bg-background-secondary gap-20 p-10'>
				<Typography className={`${nunito.className} text-accent font-black text-center`}>
					WHY MATCHOS?
				</Typography>
				<div className='flex flex-row gap-5 items-center justify-center'>
					<div>
						<Avatar size='lg' className='p-2 w-20 h-20 rounded-4xl 	'>
							<Leaf size={30} className='text-accent' />
						</Avatar>
					</div>
				</div>
			</section>
			 */}
			<section
				id='menu'
				className=' relative flex-col lg:flex-row w-full h-fit px-8 md:px-30 flex bg-background gap-5 lg:gap-20 py-15'
			>
				{' '}
				<div className='flex flex-col gap-8 lg:gap-13'>
					<div className='flex flex-col gap-2 mt-10'>
						<Typography
							className={`${nunito.className} text-accent text-lg font-black ml-2`}
						>
							OUR MENU
						</Typography>
						<Typography
							type='h3'
							className={`${outfit.className} font-medium max-w-100 text-5xl lg:text-6xl text-foreground`}
						>
							Good things, made simple.
						</Typography>
					</div>{' '}
					<div className='flex flex-col gap-4 justify-center'>
						{' '}
						<Image
							src={'/food-both.png'}
							alt='matcha-latte'
							width={370}
							height={370}
							className='lg:hidden'
						/>
						<div className='flex flex-col px-7 py-5 bg-accent/5 rounded-xl gap-2'>
							<div>
								<Typography
									className={`${outfit.className} font-black max-w-100 text-xl text-foreground/80 text-balance`}
								>
									Crispy Loaded Doritos Nachos
								</Typography>
								<Typography
									className={`${outfit.className} font-base max-w-100 text-lg/5 text-foreground/80 text-balance`}
								>
									25g Doritos loaded with your choice of toppings and sauces.{' '}
								</Typography>
							</div>
							<Typography
								className={`${outfit.className} text-lg font-bold text-accent `}
							>
								RM 11.70
							</Typography>
						</div>
						<div className='flex flex-col px-7 py-5 bg-accent/5 rounded-xl gap-2'>
							<div>
								<Typography
									className={`${outfit.className} font-black max-w-100 text-xl text-foreground/80 text-balance`}
								>
									Niko Neko Matcha Latte
								</Typography>
								<Typography
									className={`${outfit.className} font-base max-w-100 text-lg/5 text-foreground/80 text-balance`}
								>
									16Oz Premium Niko Neko Yuri matcha powder with fresh barista milk over
									ice.
								</Typography>
							</div>
							<Typography
								className={`${outfit.className} text-lg font-bold text-accent`}
							>
								RM 13.90
							</Typography>
						</div>
					</div>
					<div className='flex flex-row'>
						<a
							href='https://bit.ly/3SLpBRA'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ScaleProvider>
								<Button
									size='lg'
									className='hidden lg:flex rounded-4xl p-7 bg-accent text-background font-normal gap-3'
								>
									Order Now <ArrowRight />
								</Button>
							</ScaleProvider>
						</a>
					</div>
				</div>
				<div className='flex flex-col xl:flex-row-reverse items-center justify-center gap-2'>
					<Image
						src={'/food-both.png'}
						alt='matcha-latte'
						width={600}
						height={600}
						className='hidden lg:block'
					/>

					{/*<Card
						variant='transparent'
						className='flex justify-center items-center h-fit w-fit p-4  border-none'
					>
						<Card.Header className='flex flex-col gap-3 bg-background-secondary/30 rounded-xl p-4'>
							<Image
								src={'/matcha-cup.png'}
								alt='matcha-latte'
								width={320}
								height={320}
							/>
						</Card.Header>
						<Card.Footer className='flex flex-row w-full justify-between py-3 px-2'>
							<Card.Title className={`${nunito.className} text-xl`}>
								Iced Matcha Latte
							</Card.Title>
							<Card.Description
								className={`${outfit.className} text-lg font-bold text-accent`}
							>
								x
							</Card.Description>
						</Card.Footer>
					</Card>
					<Card
						variant='transparent'
						className='flex justify-center items-center h-fit w-fit p-4  border-none'
					>
						<Card.Header className='flex flex-col gap-3 bg-background-secondary/30 rounded-xl p-4'>
							<Image
								src={'/nachos.png'}
								alt='matcha-latte'
								width={320}
								height={320}
							/>
						</Card.Header>
						<Card.Footer className='flex flex-row w-full justify-between py-3 px-2'>
							<Card.Title className={`${nunito.className} text-xl`}>
								Nachos
							</Card.Title>
							<Card.Description
								className={`${outfit.className} text-lg font-bold text-accent`}
							>
								x
							</Card.Description>
						</Card.Footer>
					</Card>
					 */}
				</div>{' '}
				<a href='https://bit.ly/3SLpBRA' target='_blank' rel='noopener noreferrer'>
					<ScaleProvider>
						<Button
							size='lg'
							className='flex lg:hidden mt-5 rounded-4xl p-7 bg-accent text-background font-normal gap-3'
						>
							Order Now <ArrowRight />
						</Button>
					</ScaleProvider>
				</a>
			</section>
		</>
	);
}
