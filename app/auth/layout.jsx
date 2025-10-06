export default function AuthLayout({ children }) {
	return (
		<div className='w-full min-h-[100dvh] grid place-items-center bg-pink-100 p-4'>
			<div className='bg-white p-4 sm:p-7 w-full max-w-sm px-2 mx-auto border border-gray-200 rounded-xl shadow-xl'>
				{children}
			</div>
		</div>
	);
}
