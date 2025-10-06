import { Button } from '../ui/button';

export default function ProductReviews() {
	return (
		//  Reviews Section
		<section className='section-container pt-6 md:pt-16 pb-9'>
			<h5 className='relative font-semibold mb-5 md:text-2xl text-[#020202] after:content-[""] after:w-10 after:h-1 after:bg-primary after:absolute after:-bottom-2 after:start-0 after:rounded-full'>
				Rating & Reviews
			</h5>

			<div className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8'>
				{/* <!-- Rating Stats --> */}

				<div className='flex items-baseline justify-center gap-5 text-[80px] md:text-[120px] text-[#020202] font-medium'>
					4,5<span className='text-2xl text-[#B0B0B0]'>/5</span>
				</div>
				<div className='md:col-span-2 space-y-2 text-[#545454] text-xl font-medium'>
					{Array.from([67, 15, 6, 3, 9]).map((item, index, arr) => (
						<div key={index} className='flex items-center'>
							<span className='flex items-center gap-2'>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M10.0328 3.27141C10.8375 1.5762 13.1625 1.5762 13.9672 3.27141L15.3579 6.20118C15.6774 6.87435 16.2951 7.34094 17.0096 7.44888L20.1193 7.91869C21.9187 8.19053 22.6371 10.4895 21.3351 11.8091L19.0849 14.0896C18.5679 14.6136 18.332 15.3685 18.454 16.1084L18.9852 19.3285C19.2926 21.1918 17.4116 22.6126 15.8022 21.7329L13.0208 20.2126C12.3817 19.8633 11.6183 19.8633 10.9792 20.2126L8.19776 21.7329C6.58839 22.6126 4.70742 21.1918 5.01479 19.3286L5.54599 16.1084C5.66804 15.3685 5.43211 14.6136 4.91508 14.0896L2.66488 11.8091C1.36287 10.4895 2.08133 8.19053 3.88066 7.91869L6.99037 7.44888C7.70489 7.34094 8.32257 6.87435 8.64211 6.20118L10.0328 3.27141Z'
										fill='#BE968E'
									/>
								</svg>
								<span>{arr.length - index}</span>
							</span>

							<div className='flex-1 bg-gray-200 h-2 rounded-full ms-4 me-5'>
								<div className='bg-primary h-1.5 rounded-full' style={{ width: `${item}%` }}></div>
							</div>

							<span className='w-10'>{item}%</span>
						</div>
					))}
				</div>

				<div className='md:flex flex-col gap-2 justify-between items-center w-fit hidden ms-auto'>
					<p className='text-[#545454]'>Total Reviews</p>
					<p className='text-6xl font-semibold text-[#020202]'>3.0K</p>
					<Button className='h-14 py-4 px-8 rounded-lg text-base'>
						Add Comment
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								opacity='0.4'
								d='M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z'
								fill='white'
							/>
							<circle cx='12' cy='12' r='1' fill='white' />
							<circle cx='16' cy='12' r='1' fill='white' />
							<circle cx='8' cy='12' r='1' fill='white' />
						</svg>
					</Button>
				</div>
			</div>

			{/* <!-- Reviews List --> */}
			<div className='mt-16 flex flex-col gap-8'>
				{Array.from({ length: 4 }).map((_, i) => (
					<div key={i} className='flex flex-col gap-4 not-last-of-type:border-bnot-last-of-type:pb-8'>
						<div className='flex items-center justify-between gap-4'>
							<div className='font-semibold flex items-center gap-4'>
								<p className='text-black text-sm md:text-xl'>Alex Daewn</p>
								<span className='flex items-center gap-1'>
									{Array.from({ length: 4 }).map((_, i) => (
										<svg
											key={i}
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M8.36067 2.72614C9.03124 1.31346 10.9687 1.31346 11.6393 2.72613L12.7982 5.16761C13.0645 5.72858 13.5792 6.11741 14.1747 6.20736L16.7661 6.59887C18.2655 6.8254 18.8643 8.74125 17.7793 9.84086L15.9041 11.7413C15.4732 12.1779 15.2766 12.8071 15.3783 13.4236L15.821 16.1071C16.0771 17.6598 14.5097 18.8438 13.1685 18.1107L10.8507 16.8438C10.3181 16.5527 9.68187 16.5527 9.1493 16.8438L6.83146 18.1107C5.49032 18.8438 3.92284 17.6598 4.17898 16.1071L4.62165 13.4236C4.72336 12.8071 4.52675 12.1779 4.09589 11.7413L2.22072 9.84086C1.13571 8.74125 1.73443 6.82541 3.23387 6.59887L5.8253 6.20736C6.42073 6.11741 6.93546 5.72858 7.20175 5.16761L8.36067 2.72614Z'
												fill='#BE968E'
											/>
										</svg>
									))}
									<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											opacity='0.4'
											d='M8.36067 2.72614C9.03124 1.31346 10.9687 1.31346 11.6393 2.72613L12.7982 5.16761C13.0645 5.72858 13.5792 6.11741 14.1747 6.20736L16.7661 6.59887C18.2655 6.8254 18.8643 8.74125 17.7793 9.84086L15.9041 11.7413C15.4732 12.1779 15.2766 12.8071 15.3783 13.4236L15.821 16.1071C16.0771 17.6598 14.5097 18.8438 13.1685 18.1107L10.8507 16.8438C10.3181 16.5527 9.68187 16.5527 9.1493 16.8438L6.83146 18.1107C5.49032 18.8438 3.92284 17.6598 4.17898 16.1071L4.62165 13.4236C4.72336 12.8071 4.52675 12.1779 4.09589 11.7413L2.22072 9.84086C1.13571 8.74125 1.73443 6.8254 3.23387 6.59887L5.8253 6.20736C6.42073 6.11741 6.93546 5.72858 7.20175 5.16761L8.36067 2.72614Z'
											fill='#BE968E'
										/>
									</svg>
								</span>
							</div>
							<span className='text-[10px] md:text-sm text-[#545454] font-medium'>4 months ago</span>
						</div>
						<p className='text-[#545454] md:text-[#020202] mt-1 text-sm md:text-base font-medium md:font-normal'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet,
							consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer
							adipiscing elit, sed
						</p>
					</div>
				))}
				<button className='flex gap-2 mx-auto bg-[#F5F5F5] rounded-lg p-4 text-primary'>View More Comments</button>
			</div>
			<div className='-mt-20 relative -z-10'>
				<img src='/images/icon-light.svg' alt='logo' />
			</div>
		</section>
	);
}
