import Image from 'next/image';

import { Inter } from 'next/font/google';

const inter = Inter({ weight: ['300', '400', '600'] });

export default function NavBar() {
	return (
		<>
			<nav className='w-full h-20 pt-20 flex flex-row justify-center items-center'>
				<div className='w-[90%] flex flex-row items-center rounded-[100px] gap-15'>
					<Image
						src={'/matchos logo.png'}
						alt='monochrome-logo'
						width={100}
						height={100}
					/>
					{/*<ul
						className={`${inter.className} text-lg font-semibold flex flex-row gap-10 text-foreground/80`}
					>
						<li>Home</li>
						<li>Menu</li>
						<li>Find Us</li>
						<li>About</li>
					</ul> */}
				</div>
			</nav>
		</>
	);
}
