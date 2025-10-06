import Image from 'next/image';

const similarItems = [
	{
		id: 1,
		image: '/images/s-product-1.png',
	},
	{
		id: 2,
		image: '/images/s-product-2.png',
		discount: '25',
	},
	{
		id: 3,
		image: '/images/s-product-3.png',
	},
	{
		id: 4,
		image: '/images/s-product-4.png',
		discount: '25',
	},
	{
		id: 5,
		image: '/images/s-product-4.png',
		discount: '25',
	},
	{
		id: 6,
		image: '/images/s-product-4.png',
		discount: '25',
	},
];

export default function SimilarItems() {
	return (
		<section className='pt-6 md:pt-16 pb-9 relative w-screen max-w-full pl-5 md:pl-[calc(((100vw-theme(maxWidth.7xl))/2)+40px)]'>
			<div className='relative mb-[38px]'>
				<div className='absolute bottom-0 start-0 -z-10 md:hidden'>
					<img src='/images/icon-light.svg' alt='logo' className='w-[59px] h-[37px]' />
				</div>
				<h5 className='relative font-semibold md:text-2xl text-[#020202] after:content-[""] after:w-10 after:h-1 after:bg-primary after:absolute after:-bottom-2 after:start-0 after:rounded-full'>
					Similar Items
				</h5>
			</div>

			<div className='w-full overflow-x-auto touch-pan-x snap-x snap-mandatory scroll-smooth hide-scrollbar'>
				<div className='flex gap-[9px] md:gap-4'>
					{/* products elements */}
					{similarItems.map((item) => (
						<div key={item.id} className='min-w-[46%] md:min-w-[22%] flex flex-col gap-3'>
							<div className='border border-black/5 rounded-[20px] pb-2'>
								<div className='flex items-center justify-between gap-[5px] md:gap-2 p-3 md:p-4 pb-4 md:pb-2.5'>
									{item.discount && (
										<div className='font-semibold text-[10px] border border-[#4040401A] me-auto text-primary rounded-lg py-2 px-4 backdrop-blur-[3px]'>
											<span className='whitespace-nowrap'>25% OFF</span>
										</div>
									)}

									<button
										type='button'
										className='border border-[#4040401A] text-[#BE968E] rounded-lg p-[5px] backdrop-blur-[3px] cursor-pointer'
									>
										<span className='[&_svg]:size-5 [&_svg]:md:size-6'>
											<svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M21.3333 7.99999C21.3333 5.05447 18.9455 2.66666 16 2.66666C13.0544 2.66666 10.6666 5.05447 10.6666 7.99999'
													stroke='#BE968E'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M6.0827 12.6718C6.41632 10.0029 8.68513 8 11.3749 8H20.6252C23.3149 8 25.5837 10.0029 25.9173 12.6718L27.2507 23.3385C27.6486 26.5217 25.1665 29.3333 21.9585 29.3333H10.0415C6.83353 29.3333 4.35147 26.5217 4.74937 23.3385L6.0827 12.6718Z'
													stroke='#BE968E'
													strokeWidth='1.5'
													strokeLinejoin='round'
												/>
												<path
													d='M12 18.6667H20'
													stroke='#BE968E'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M16 14.6667L16 22.6667'
													stroke='#BE968E'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</span>
									</button>

									<button
										type='button'
										className='border border-[#4040401A] text-[#BE968E] rounded-lg p-[5px] backdrop-blur-[3px] cursor-pointer'
									>
										<span className='[&_svg]:size-5 [&_svg]:md:size-6'>
											<svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M22.6666 8.66667C24.1393 8.66667 25.3333 9.86058 25.3333 11.3333M16 7.60339L16.9134 6.66667C19.7546 3.75296 24.3611 3.75295 27.2024 6.66667C29.9673 9.50214 30.0522 14.0717 27.3947 17.0132L19.7596 25.4642C17.7312 27.7093 14.2687 27.7093 12.2403 25.4642L4.6052 17.0133C1.94767 14.0718 2.03263 9.50217 4.79756 6.66669C7.63879 3.75297 12.2453 3.75297 15.0866 6.6667L16 7.60339Z'
													stroke='#BE968E'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</span>
									</button>
								</div>
								<div>
									<Image
										src={item.image || '/images/s-product-1.png'}
										alt='product-name'
										width={200}
										height={200}
										className='mx-auto h-full aspect-square object-contain px-4 md:px-0'
									/>
								</div>
							</div>

							<div className='grid gap-2'>
								<div className='flex items-center justify-between gap-3 text-[#545454] font-medium text-xs'>
									<p>Dresses</p>
									<div className='flex items-center gap-1'>
										<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M6.68855 2.18086C7.22501 1.05072 8.77501 1.05072 9.31147 2.18086L10.2386 4.13404C10.4516 4.58282 10.8634 4.89388 11.3398 4.96584L13.4129 5.27905C14.6125 5.46027 15.0914 6.99295 14.2234 7.87264L12.7233 9.39298C12.3786 9.74231 12.2213 10.2456 12.3027 10.7389L12.6568 12.8856C12.8617 14.1278 11.6078 15.075 10.5348 14.4885L8.68056 13.475C8.25451 13.2421 7.74551 13.2421 7.31946 13.475L5.46519 14.4885C4.39227 15.075 3.13829 14.1278 3.3432 12.8856L3.69734 10.7389C3.77871 10.2456 3.62142 9.74231 3.27673 9.39298L1.77659 7.87264C0.908588 6.99295 1.38756 5.46027 2.58712 5.27905L4.66026 4.96584C5.1366 4.89388 5.54839 4.58282 5.76142 4.13404L6.68855 2.18086Z'
												fill='#BE968E'
											/>
										</svg>
										<span className='text-[#020202]'>4,5</span>
										<span className='text-[10px] font-normal'>(2910)</span>
									</div>
								</div>
								<p className='text-[#020202] text-sm font-medium'>
									J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..
								</p>
								<div className='flex gap-3 justify-between items-center mt-1'>
									<p className='text-[#020202] text-sm font-medium'>AED 900</p>
									<div className='flex items-center gap-1'>
										<div className='size-5 rounded-full bg-primary'></div>
										<div className='size-5 rounded-full bg-[#333333]'></div>
										<div className='size-5 rounded-full bg-[#E8E8E8]'></div>
										<p className='text-[#020202] text-sm font-medium'>+2</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='flex items-center justify-center gap-3 mt-8'>
				<div className='size-[50px] bg-[#C4C4C4] grid place-items-center rounded-full [&_svg]:size-6'>
					<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_1_551)'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M6.91083 10.5891C6.7546 10.4329 6.66684 10.2209 6.66684 9.99997C6.66684 9.779 6.7546 9.56708 6.91083 9.41081L11.625 4.69664C11.7822 4.54484 11.9927 4.46085 12.2112 4.46275C12.4297 4.46464 12.6387 4.55229 12.7932 4.70679C12.9477 4.8613 13.0353 5.07031 13.0372 5.28881C13.0391 5.5073 12.9551 5.71781 12.8033 5.87497L8.67833 9.99997L12.8033 14.125C12.9551 14.2821 13.0391 14.4926 13.0372 14.7111C13.0353 14.9296 12.9477 15.1386 12.7932 15.2932C12.6387 15.4477 12.4297 15.5353 12.2112 15.5372C11.9927 15.5391 11.7822 15.4551 11.625 15.3033L6.91083 10.5891Z'
								fill='white'
							/>
						</g>
						<defs>
							<clipPath id='clip0_1_551'>
								<rect width='20' height='20' fill='white' transform='translate(0 20) rotate(-90)' />
							</clipPath>
						</defs>
					</svg>
				</div>
				<div className='size-[50px] bg-[#BE968E] grid place-items-center rounded-full [&_svg]:size-6'>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M15.707 11.2929C15.8944 11.4805 15.9998 11.7348 15.9998 11.9999C15.9998 12.2651 15.8944 12.5194 15.707 12.7069L10.05 18.3639C9.86137 18.5461 9.60876 18.6469 9.34657 18.6446C9.08437 18.6423 8.83356 18.5372 8.64815 18.3518C8.46274 18.1663 8.35757 17.9155 8.35529 17.6533C8.35302 17.3911 8.45381 17.1385 8.63597 16.9499L13.586 11.9999L8.63597 7.04994C8.45381 6.86133 8.35302 6.60873 8.3553 6.34653C8.35757 6.08434 8.46274 5.83353 8.64815 5.64812C8.83356 5.46271 9.08437 5.35754 9.34657 5.35526C9.60876 5.35298 9.86137 5.45378 10.05 5.63594L15.707 11.2929Z'
							fill='white'
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
