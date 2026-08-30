import { siteConfig } from '@/config/site';
import {
	Avatar,
	Button,
	Card,
	CardDescription,
	Chip,
	Typography,
} from '@heroui/react';
import { ArrowRight, ChefHat, MapPin } from 'lucide-react';
import {
	Playfair_Display,
	Oswald,
	Outfit,
	Playfair,
	Inter,
	Nunito,
} from 'next/font/google';
import Image from 'next/image';

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
			<Image
				src='/matchos-bg.png'
				alt='bg'
				fill={true}
				className='object-cover opacity-60'
			/>{' '}
			<section className='flex items-center max-h-screen py-55 px-30'>
				<div className='fixed top-0 left-0 -z-1 '></div>
				<div className='flex flex-col justify-center gap-10'>
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
							className={`${outfit.className} text-8xl/19 font-bold text-wrap max-w-5 `}
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
						<Button size='lg' className=' p-6 bg-accent text-background font-normal'>
							View Menu <ArrowRight />
						</Button>
						<Button size='lg' variant='ghost' className={'text-foreground p-6'}>
							Find Us <MapPin size={30} />
						</Button>
					</div>
				</div>
				{/* <Image src={'/stock1-nobg.png'} alt='stc' width={500} height={500} /> 
				<Image src={'/wave.svg'} alt='stc' fill={true} /> */}
			</section>{' '}
			<div className='bg-[url(/wave.svg)] w-full h-40 bg-no-repeat bg-cover' />
			<section className=' relative h-fit mx-auto flex bg-background-secondary gap-20 py-10'>
				{' '}
			</section>
			{/*<section className='rounded-3xl relative w-full flex flex-col bg-background-secondary gap-20 p-10'>
				<Typography className={`${nunito.className} text-accent font-black text-center`}>
					WHY MATCHOS?
				</Typography>
				<div className='flex flex-row gap-5'>
					<div>
						<Avatar />
					</div>
				</div>
			</section>
			 */}
			<section className=' relative w-full h-fit px-30 flex bg-background gap-20 py-10'>
				{' '}
				<div className='flex flex-col gap-13'>
					<div className='flex flex-col gap-2 mt-10'>
						<Typography
							className={`${nunito.className} text-accent text-lg font-black ml-2`}
						>
							OUR MENU
						</Typography>
						<Typography
							type='h3'
							className={`${outfit.className} font-medium max-w-100 text-6xl text-foreground`}
						>
							Good things, made simple.
						</Typography>
					</div>
					<Button
						size='lg'
						className='rounded-4xl p-7 bg-accent text-background font-normal gap-3'
					>
						Explore Menu <ArrowRight />
					</Button>
				</div>
				<div className='h-fit flex flex-row'>
					<Card
						variant='transparent'
						className='flex justify-center items-center h-fit w-fit p-4  border-none'
					>
						<Card.Header className='flex flex-col gap-3 bg-background-secondary/85 rounded-xl p-4'>
							<Image src={'/stock1-nobg1.png'} alt='stc' width={320} height={320} />
						</Card.Header>
						<Card.Footer className='flex flex-row w-full justify-between py-3 px-2'>
							<Card.Title className={`${nunito.className} text-xl`}>
								Iced Matcha Latte
							</Card.Title>
							<Card.Description
								className={`${outfit.className} text-lg font-bold text-accent`}
							>
								RM 10.99
							</Card.Description>
						</Card.Footer>
					</Card>
				</div>
			</section>
		</>
	);
}
