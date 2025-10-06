export default function Breadcrumb() {
	return (
		<nav className='section-container'>
			<div className='bg-[#ECECEC66] py-4 px-4 sm:px-6 lg:px-8 font-medium rounded-2xl mt-4'>
				<ol className='flex items-center gap-0.5 whitespace-nowrap'>
					<li className='inline-flex items-center'>
						<a
							className='flex items-center text-sm text-[#020202] hover:text-blue-600 focus:outline-hidden focus:text-blue-600'
							href='#'
						>
							Home
						</a>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 5.63637L16.3636 12L10 18.3636'
								stroke='#020202'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</li>
					<li className='inline-flex items-center'>
						<a
							className='flex items-center text-sm text-[#020202] hover:text-blue-600 focus:outline-hidden focus:text-blue-600'
							href='#'
						>
							App Center
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10 5.63637L16.3636 12L10 18.3636'
									stroke='#020202'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</a>
					</li>
					<li className='inline-flex items-center text-sm font-semibold text-[#8A8A8A] truncate' aria-current='page'>
						Application
					</li>
				</ol>
			</div>
		</nav>
	);
}
