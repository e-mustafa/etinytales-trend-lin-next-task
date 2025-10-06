import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='max-w-3xl grid place-items-center mx-auto size-full min-h-[100dvh]'>
			{/* ========== MAIN CONTENT ========== */}
			<main id='content'>
				<Link href='/' aria-label='Home' className='flex shrink-0 justify-center'>
					<Image src='/logo.png' alt='logo' width={65} height={50}></Image>
				</Link>
				<div className='text-center py-10 px-4 sm:px-6 lg:px-8'>
					<h1 className='block text-7xl font-bold text-gray-800 sm:text-9xl'>404</h1>
					<p className='mt-3 text-gray-600'>Oops, something went wrong.</p>
					<p className='text-gray-600'>Sorry, we couldn't find your page.</p>
					<div className='mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3'>
						<Button asChild>
							<Link className='w-full sm:w-auto py-3 px-4 inline-flex ' href='/'>
								<svg
									className='shrink-0 size-4'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='m15 18-6-6 6-6' />
								</svg>
								Back to home
							</Link>
						</Button>
					</div>
				</div>
			</main>
			{/* ========== END MAIN CONTENT ========== */}
		</div>
	);
}
