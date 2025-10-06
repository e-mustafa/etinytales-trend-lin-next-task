import { Button } from '../ui/button';

export default function ProductDetails() {
	return (
		<section className='section-container pt-4 md:pt-10 pb-9'>
			<div className='grid md:grid-cols-12 gap-4 md:gap-7'>
				<div className='md:col-span-5 flex flex-col gap-2'>
					<div className='relative rounded-3xl bg-[#F5F5F5]'>
						<div className='w-full rounded-t-3xl h-16 block bg-[linear-gradient(0deg,rgba(244,244,244,0.2)_0%,rgba(0,0,0,0.3)_100%)]'>
							<div className='w-full flex items-center gap-1 p-4'>
								<span className='h-1 flex-1 bg-[#D4D4D4] rounded-full'></span>
								<span className='h-1 flex-1 bg-white rounded-full'></span>
								<span className='h-1 flex-1 bg-[#D4D4D4] rounded-full'></span>
								<span className='h-1 flex-1 bg-[#D4D4D4] rounded-full'></span>
							</div>
						</div>

						<img src='/images/young-adult-man-wearing-hoodie-beanie 1.png' alt='product-details' className='mx-auto' />

						<div className='size-8 md:size-12 [&>svg]:size-[13px] md:[&>svg]:size-5 bg-[#BE968E] grid place-items-center absolute top-1/2 end-[13px] md:end-5 -translate-y-1/2 z-10 rounded-full'>
							<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M13.0891 9.41086C13.2454 9.56713 13.3331 9.77906 13.3331 10C13.3331 10.221 13.2454 10.4329 13.0891 10.5892L8.37498 15.3034C8.21781 15.4552 8.0073 15.5392 7.78881 15.5373C7.57031 15.5354 7.3613 15.4477 7.20679 15.2932C7.05229 15.1387 6.96465 14.9297 6.96275 14.7112C6.96085 14.4927 7.04484 14.2822 7.19664 14.125L11.3216 10L7.19664 5.87503C7.04484 5.71786 6.96085 5.50736 6.96275 5.28886C6.96464 5.07036 7.05229 4.86135 7.20679 4.70685C7.3613 4.55234 7.57031 4.4647 7.78881 4.4628C8.0073 4.4609 8.21781 4.5449 8.37497 4.6967L13.0891 9.41086Z'
									fill='white'
								/>
							</svg>
						</div>

						<div className='size-8 md:size-12 [&>svg]:size-[13px] md:[&>svg]:size-5 bg-[#C4C4C4] grid place-items-center absolute top-1/2 start-[13px] md:start-5 -translate-y-1/2 z-10 rounded-full'>
							<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
					</div>
					<div className='grid grid-cols-3 gap-1.5 md:gap-2'>
						<div className='bg-[#F5F5F5] rounded-3xl py-5 px-3.5'>
							<img src='/images/product-1.png' alt='product' className='size-full' />
						</div>

						<div className='bg-[#F5F5F5] rounded-3xl py-5 px-3.5'>
							<img src='/images/product-2.png' alt='product' className='size-full' />
						</div>

						<div className='bg-[#F5F5F5] rounded-3xl py-5 px-3.5 relative'>
							<img src='/images/product-3.png' alt='product' className='size-full' />
							<div className='absolute top-0 start-0 z-20 size-full bg-black/70 text-white rounded-3xl grid place-items-center font-semibold text-[22px] md:text-[32px]'>
								+2
							</div>
						</div>
					</div>
				</div>
				<div className='md:col-span-7 flex flex-col gap-4'>
					<div className='flex items-center justify-between gap-2'>
						<div className='grid place-items-center border border-[#BE968E] text-[#BE968E] rounded-full py-2 px-4 font-semibold text-sm'>
							T-Shirt
						</div>

						<div className='flex items-center gap-2'>
							<button
								type='button'
								className='border border-[#4040401A] text-[#BE968E] rounded-lg p-[7px] backdrop-blur-[3px] cursor-pointer'
							>
								<span className='[&_svg]:size-8'>
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
								className='border border-[#4040401A] text-[#BE968E] rounded-lg p-[7px] backdrop-blur-[3px] cursor-pointer'
							>
								<span className='[&_svg]:size-8'>
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
					</div>

					<h2 className='md:text-2xl font-medium text-[#020202'>
						J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
					</h2>

					<div className='grid gap-1 -mt-2'>
						<div className='flex gap-2'>
							<p className='text-[#020202] text-xl font-medium'>$300.00</p>
							<p className='text-[#8A8A8A] line-through '>$360.00</p>
						</div>
						<p className='text-[#333333] text-xs md:text-base'>This price is exclusive of taxes.</p>
					</div>

					<p className='text-[#020202] text-xs md:text-sm my-1'>
						Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam
						nonummy
					</p>
					<div className='w-full h-[1px] bg-[#E6E6E6] my-1'></div>

					<div className='relative'>
						<label htmlFor='type' className='bg-white p-2 ms-3 text-xs text-[#020202]'>
							Type
						</label>
						<button
							id='type'
							className='-mt-[10px] border-[0.5px] border-[#00000026] h-[45px] w-full md:w-[299px] rounded-[10px] flex items-center justify-between ps-5 pe-4 py-3.5 text-xs font-medium'
						>
							<span>Cotton</span>
							<span>
								<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M10 13.3837L5.18251 8.56748L6.06626 7.68248L10 11.6162L13.9325 7.68248L14.8175 8.56748L10 13.3837Z'
										fill='#020202'
									/>
								</svg>
							</span>
						</button>
					</div>

					<div className='relative'>
						<label htmlFor='Size' className='bg-white p-2 ms-3 text-xs text-[#020202]'>
							Size
						</label>
						<button
							id='Size'
							className='-mt-[10px] border-[0.5px] border-[#00000026] h-[45px] w-full md:w-[299px] rounded-[10px] flex items-center justify-between ps-5 pe-4 py-3.5 text-xs font-medium'
						>
							<span>2xl</span>
							<span>
								<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M10 13.3837L5.18251 8.56748L6.06626 7.68248L10 11.6162L13.9325 7.68248L14.8175 8.56748L10 13.3837Z'
										fill='#020202'
									/>
								</svg>
							</span>
						</button>
					</div>

					<div className='grid gap-4'>
						<label htmlFor='Colors' className='md:text-xl font-medium text-[#020202]'>
							Colors
						</label>

						<div className='flex gap-4 items-center flex-wrap'>
							<div className='size-11 md:size-[60px] grid place-items-center bg-[#F4F7F9] rounded-full border-[1.5px] border-transparent cursor-pointer'>
								<div className='size-6 md:size-8 rounded-full bg-[#D90202]'></div>
							</div>

							<div className='size-11 md:size-[60px] grid place-items-center bg-[#F4F7F9] rounded-full border-[1.5px] border-[#020202] cursor-pointer'>
								<div className='size-6 md:size-8 rounded-full bg-[#B8CCDA]'></div>
							</div>

							<div className='size-11 md:size-[60px] grid place-items-center bg-[#F4F7F9] rounded-full border-[1.5px] border-transparent cursor-pointer'>
								<div className='size-6 md:size-8 rounded-full bg-[#988755]'></div>
							</div>

							<div className='size-11 md:size-[60px] grid place-items-center bg-[#F4F7F9] rounded-full border-[1.5px] border-transparent cursor-pointer'>
								<div className='size-6 md:size-8 rounded-full bg-[#7198C8]'></div>
							</div>

							<div className='size-11 md:size-[60px] grid place-items-center bg-[#F4F7F9] rounded-full border-[1.5px] border-transparent cursor-pointer'>
								<div className='size-6 md:size-8 rounded-full bg-[#5D5D5B]'></div>
							</div>
						</div>
					</div>

					<div className='flex flex-col md:flex-row gap-6 md:justify-between md:mt-4'>
						<div className='grid gap-4'>
							<label htmlFor='Colors' className='flex gap-2 items-center md:text-xl font-medium text-[#020202]'>
								Quantity
								<span className='text-xs md:text-base text-[#8A8A8A]'>($300.00 for Piece)</span>
							</label>

							<div className='flex items-center gap-5'>
								<div className='bg-[#F5F5F5] w-[184px] rounded-xl p-2 flex gap-2 items-center justify-between'>
									<button className='bg-white size-10 leading-[40px] rounded-xl grid place-items-center text-[28px] text-[#B0B0B0]'>
										<span className='sr-only'>minus</span>
										<span className='bg-[#B0B0B0] w-2 h-0.5'></span>
									</button>
									<div className='font-medium text-2xl text-[#333333]'>01</div>
									<button className='bg-white size-10 rounded-xl grid place-items-center'>
										<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M12 5V19M5 12H19'
												stroke='black'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</div>

								<p className='text-[#020202] text-2xl font-medium'>$300.00</p>
							</div>
						</div>

						<Button size='lg' className='h-14 py-4 px-8 xl:px-[53px] text-base rounded-lg w-full md:w-auto self-end'>
							<span>Add to Cart</span>
							<span>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										opacity='0.4'
										d='M4.38833 9.26285C4.74306 7.37096 6.39496 6 8.31982 6H15.6804C17.6053 6 19.2572 7.37095 19.6119 9.26285L21.1119 17.2628C21.5735 19.7245 19.685 22 17.1804 22H6.81982C4.31527 22 2.42677 19.7245 2.88833 17.2628L4.38833 9.26285Z'
										fill='white'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5V8C9.75 8.41421 9.41421 8.75 9 8.75C8.58579 8.75 8.25 8.41421 8.25 8V5Z'
										fill='white'
									/>
								</svg>
							</span>
						</Button>
					</div>
				</div>
			</div>
			<div className='-mt-2 relative -z-10 hidden md:block'>
				<img src='/images/icon-light.svg' alt='logo' />
			</div>
		</section>
	);
}
