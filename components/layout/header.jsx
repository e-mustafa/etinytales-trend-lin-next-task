import Link from 'next/link';

export default function Header() {
	return (
		// ========== HEADER ==========
		<header className='flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-5 bg-white shadow-[0px_0px_52px_-24px_#00000040]'>
			<nav className='relative max-w-7xl w-full flex gap-[42px] justify-between lg:justify-start basis-full items-center px-4 md:px-6 lg:px-10 mx-auto'>
				<div className=' flex items-center'>
					{/* <!-- Logo --> */}
					<a
						className='flex-none h-[51px] rounded-xl text-xl flex items-center gap-1 font-semibold focus:outline-hidden focus:opacity-80'
						href='/'
						aria-label='Preline'
					>
						<img src='/logo.png' alt='logo' className='h-full' />
					</a>
					{/* <!-- End Logo --> */}

					<div className='ms-1 sm:ms-2'></div>
				</div>

				{/* <!-- End Button Group --> */}
				<div className='lg:hidden'>
					<button
						type='button'
						className='size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none '
						aria-label='Toggle navigation'
					>
						<svg
							className='hs-collapse-open:hidden shrink-0 size-4'
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
							<line x1='3' x2='21' y1='6' y2='6' />
							<line x1='3' x2='21' y1='12' y2='12' />
							<line x1='3' x2='21' y1='18' y2='18' />
						</svg>
						<svg
							className='hs-collapse-open:block hidden shrink-0 size-4'
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
							<path d='M18 6 6 18' />
							<path d='m6 6 12 12' />
						</svg>
					</button>
				</div>

				{/* <!-- Collapse --> */}
				<div
					id='hs-pro-hcail'
					className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:flex gap-6 justify-between lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6'
					aria-labelledby='hs-pro-hcail-collapse'
				>
					<div className='text-[#8A8A8A] text-sm flex flex-col gap-y-4 gap-x-0  mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0'>
						<a
							className='flex items-center gap-1 hover:text-gray-600 focus:outline-hidden focus:text-gray-600'
							href='#'
							aria-current='page'
						>
							<svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M16.625 14.2237V8.03568C16.625 7.077 16.1978 6.16906 15.4614 5.56266L11.503 2.30323C10.3373 1.34336 8.66266 1.34337 7.49697 2.30323L3.53864 5.56266C2.80222 6.16906 2.375 7.077 2.375 8.03568V14.2238C2.375 15.9871 3.79276 17.4167 5.54167 17.4167H13.4583C15.2072 17.4167 16.625 15.9871 16.625 14.2237Z'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinejoin='round'
								/>
								<path d='M7.91667 14.25H11.0833' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
							</svg>

							<span>Home</span>
						</a>

						<a
							className='flex items-center gap-1 hover:text-gray-600 focus:outline-hidden focus:text-gray-600'
							href='#'
						>
							<svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1.66666 3.83333C1.66666 2.91286 2.41285 2.16667 3.33332 2.16667H6.66666C7.58713 2.16667 8.33332 2.91286 8.33332 3.83333V7.16667C8.33332 8.08714 7.58713 8.83333 6.66666 8.83333H3.33332C2.41285 8.83333 1.66666 8.08714 1.66666 7.16667V3.83333Z'
									stroke='currentColor'
									strokeWidth='1.5'
								/>
								<path
									d='M18.3333 5.5C18.3333 7.34095 16.8409 8.83333 15 8.83333C13.159 8.83333 11.6667 7.34095 11.6667 5.5C11.6667 3.65905 13.159 2.16667 15 2.16667C16.8409 2.16667 18.3333 3.65905 18.3333 5.5Z'
									stroke='currentColor'
									strokeWidth='1.5'
								/>
								<path
									d='M8.33332 15.5C8.33332 17.3409 6.84094 18.8333 4.99999 18.8333C3.15904 18.8333 1.66666 17.3409 1.66666 15.5C1.66666 13.6591 3.15904 12.1667 4.99999 12.1667C6.84094 12.1667 8.33332 13.6591 8.33332 15.5Z'
									stroke='currentColor'
									strokeWidth='1.5'
								/>
								<path
									d='M11.6667 13.8333C11.6667 12.9129 12.4128 12.1667 13.3333 12.1667H16.6667C17.5871 12.1667 18.3333 12.9129 18.3333 13.8333V17.1667C18.3333 18.0871 17.5871 18.8333 16.6667 18.8333H13.3333C12.4128 18.8333 11.6667 18.0871 11.6667 17.1667V13.8333Z'
									stroke='currentColor'
									strokeWidth='1.5'
								/>
							</svg>
							<span>Our Category</span>
						</a>

						<a
							className='flex items-center gap-1 hover:text-gray-600 focus:outline-hidden focus:text-gray-600'
							href='#'
						>
							<svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M13.8649 8.94025C13.2475 7.4118 11.7497 6.33333 9.99999 6.33333C7.6988 6.33333 5.83332 8.19881 5.83332 10.5C5.83332 12.2497 6.91179 13.7475 8.44024 14.3649M9.92962 18.833C5.35965 18.7952 1.66666 15.0789 1.66666 10.5C1.66666 5.89763 5.39762 2.16667 9.99999 2.16667C14.5789 2.16667 18.2952 5.85966 18.333 10.4296M10.0477 11.6863L12.2249 18.2179C12.4985 19.0385 13.6592 19.0385 13.9327 18.2179L14.7367 15.806C14.8263 15.5372 15.0372 15.3263 15.306 15.2367L17.7179 14.4327C18.5385 14.1592 18.5385 12.9985 17.7179 12.7249L11.1863 10.5477C10.4826 10.3132 9.81318 10.9826 10.0477 11.6863Z'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span>About Us</span>
						</a>

						<a
							className='flex items-center gap-1 hover:text-gray-600 focus:outline-hidden focus:text-gray-600'
							href='#'
						>
							<svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M15 14.6667H12.5M15 12.1667H12.5M5.00002 18H15C16.841 18 18.3334 16.5076 18.3334 14.6667V6.33333C18.3334 4.49238 16.841 3 15 3H5.00002C3.15907 3 1.66669 4.49238 1.66669 6.33333V14.6667C1.66669 16.5076 3.15907 18 5.00002 18ZM6.66669 6.33333H8.33335C9.25383 6.33333 10 7.07953 10 8C10 8.92047 9.25383 9.66667 8.33335 9.66667H6.66669C5.74621 9.66667 5.00002 8.92047 5.00002 8C5.00002 7.07953 5.74621 6.33333 6.66669 6.33333Z'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span>Contact Us</span>
						</a>

						<a
							className='flex items-center gap-1 hover:text-gray-600 focus:outline-hidden focus:text-gray-600'
							href='#'
						>
							<svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10 7.16667V8M10 10.5V13.8333M9.16669 3H10.8334C14.9755 3 18.3334 6.35786 18.3334 10.5C18.3334 14.6421 14.9755 18 10.8334 18H5.00002C3.15907 18 1.66669 16.5076 1.66669 14.6667V10.5C1.66669 6.35786 5.02455 3 9.16669 3Z'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span>FAQs</span>
						</a>
					</div>

					{/* <!-- Button Group --> */}
					<div className='flex items-center gap-2 lg:gap-4 ms-auto lg:ps-6 lg:order-3 lg:col-span-3 text-[#020202]'>
						<div className='size-6'>
							<span className='sr-only'>Cart</span>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M16 6C16 3.79086 14.2091 2 12 2C9.79085 2 7.99999 3.79086 7.99999 6M6.8197 22H17.1803C19.6848 22 21.5733 19.7245 21.1118 17.2628L19.6118 9.26285C19.257 7.37095 17.6051 6 15.6803 6H8.3197C6.39484 6 4.74294 7.37096 4.38821 9.26285L2.88821 17.2628C2.42665 19.7245 4.31515 22 6.8197 22Z'
									stroke='#020202'
									strokeWidth='1.5'
									strokeLinejoin='round'
								/>
							</svg>
						</div>

						<div className='size-6'>
							<span className='sr-only'>Notification</span>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M17 6.5C18.1045 6.5 19 7.39543 19 8.5M12 5.70254L12.6851 5C14.816 2.81471 18.2709 2.81471 20.4018 5C22.4755 7.1266 22.5392 10.5538 20.5461 12.7599L14.8197 19.0982C13.2984 20.782 10.7015 20.782 9.18026 19.0982L3.45393 12.76C1.46078 10.5538 1.5245 7.12662 3.5982 5.00002C5.72912 2.81472 9.18404 2.81473 11.315 5.00002L12 5.70254Z'
									stroke='#020202'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>

						<div className='size-6'>
							<span className='sr-only'>Favorite</span>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M16 6C16 3.79086 14.2091 2 12 2C9.79085 2 7.99999 3.79086 7.99999 6M6.8197 22H17.1803C19.6848 22 21.5733 19.7245 21.1118 17.2628L19.6118 9.26285C19.257 7.37095 17.6051 6 15.6803 6H8.3197C6.39484 6 4.74294 7.37096 4.38821 9.26285L2.88821 17.2628C2.42665 19.7245 4.31515 22 6.8197 22Z'
									stroke='#020202'
									strokeWidth='1.5'
									strokeLinejoin='round'
								/>
							</svg>
						</div>

						<div className='flex gap-2'>
							<div className='h-6 flex items-center gap-'>
								<span className='text-sm font-medium'>EN</span>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_1_485)'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M12.707 15.707C12.5194 15.8945 12.2651 15.9998 12 15.9998C11.7348 15.9998 11.4805 15.8945 11.293 15.707L5.63598 10.05C5.54047 9.95775 5.46428 9.84741 5.41188 9.7254C5.35947 9.6034 5.33188 9.47218 5.33073 9.3394C5.32957 9.20662 5.35487 9.07494 5.40516 8.95205C5.45544 8.82915 5.52969 8.7175 5.62358 8.6236C5.71747 8.52971 5.82913 8.45546 5.95202 8.40518C6.07492 8.3549 6.2066 8.3296 6.33938 8.33075C6.47216 8.3319 6.60338 8.35949 6.72538 8.4119C6.84739 8.46431 6.95773 8.54049 7.04998 8.636L12 13.586L16.95 8.636C17.1386 8.45384 17.3912 8.35305 17.6534 8.35533C17.9156 8.3576 18.1664 8.46277 18.3518 8.64818C18.5372 8.83359 18.6424 9.0844 18.6447 9.3466C18.6469 9.6088 18.5461 9.8614 18.364 10.05L12.707 15.707Z'
											fill='#020202'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_485'>
											<rect width='24' height='24' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</div>

							<Link href='/auth/login'>
								<div className='h-6 flex items-center gap-'>
									<span>
										<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M16 7H15.25C15.25 8.79493 13.7949 10.25 12 10.25V11V11.75C14.6234 11.75 16.75 9.62335 16.75 7H16ZM12 11V10.25C10.2051 10.25 8.75 8.79493 8.75 7H8H7.25C7.25 9.62335 9.37665 11.75 12 11.75V11ZM8 7H8.75C8.75 5.20507 10.2051 3.75 12 3.75V3V2.25C9.37665 2.25 7.25 4.37665 7.25 7H8ZM12 3V3.75C13.7949 3.75 15.25 5.20507 15.25 7H16H16.75C16.75 4.37665 14.6234 2.25 12 2.25V3ZM19 17.5H18.25C18.25 18.0294 17.8014 18.7105 16.6143 19.3041C15.4722 19.8751 13.8418 20.25 12 20.25V21V21.75C14.0242 21.75 15.8938 21.3414 17.2852 20.6457C18.6316 19.9725 19.75 18.9036 19.75 17.5H19ZM12 21V20.25C10.1582 20.25 8.52782 19.8751 7.38566 19.3041C6.19864 18.7105 5.75 18.0294 5.75 17.5H5H4.25C4.25 18.9036 5.36836 19.9725 6.71484 20.6457C8.10618 21.3414 9.97582 21.75 12 21.75V21ZM5 17.5H5.75C5.75 16.9706 6.19864 16.2895 7.38566 15.6959C8.52782 15.1249 10.1582 14.75 12 14.75V14V13.25C9.97582 13.25 8.10618 13.6586 6.71484 14.3543C5.36836 15.0275 4.25 16.0964 4.25 17.5H5ZM12 14V14.75C13.8418 14.75 15.4722 15.1249 16.6143 15.6959C17.8014 16.2895 18.25 16.9706 18.25 17.5H19H19.75C19.75 16.0964 18.6316 15.0275 17.2852 14.3543C15.8938 13.6586 14.0242 13.25 12 13.25V14Z'
												fill='#020202'
											/>
										</svg>
									</span>
									<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<g clipPath='url(#clip0_1_485)'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M12.707 15.707C12.5194 15.8945 12.2651 15.9998 12 15.9998C11.7348 15.9998 11.4805 15.8945 11.293 15.707L5.63598 10.05C5.54047 9.95775 5.46428 9.84741 5.41188 9.7254C5.35947 9.6034 5.33188 9.47218 5.33073 9.3394C5.32957 9.20662 5.35487 9.07494 5.40516 8.95205C5.45544 8.82915 5.52969 8.7175 5.62358 8.6236C5.71747 8.52971 5.82913 8.45546 5.95202 8.40518C6.07492 8.3549 6.2066 8.3296 6.33938 8.33075C6.47216 8.3319 6.60338 8.35949 6.72538 8.4119C6.84739 8.46431 6.95773 8.54049 7.04998 8.636L12 13.586L16.95 8.636C17.1386 8.45384 17.3912 8.35305 17.6534 8.35533C17.9156 8.3576 18.1664 8.46277 18.3518 8.64818C18.5372 8.83359 18.6424 9.0844 18.6447 9.3466C18.6469 9.6088 18.5461 9.8614 18.364 10.05L12.707 15.707Z'
												fill='#020202'
											/>
										</g>
										<defs>
											<clipPath id='clip0_1_485'>
												<rect width='24' height='24' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</div>
							</Link>
						</div>
					</div>
				</div>
				{/* <!-- End Collapse --> */}
			</nav>
		</header>
		// <!-- ========== END HEADER ========== -->
	);
}
