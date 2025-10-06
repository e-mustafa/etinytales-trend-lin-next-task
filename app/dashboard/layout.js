import { cookies } from 'next/headers';

export default async function DashboardLayout({ children }) {
	const cookiesStore = await cookies();
	const userCookie = cookiesStore.get('user')?.value;
	let user = null;

	if (userCookie) {
		try {
			user = JSON.parse(userCookie);
			console.log('user', user);
		} catch {
			user = null;
		}
	}

	return (
		<div className='min-h-screen'>
			<header className='p-4 border-b flex flex-col justify-between gap-3'>
				<div className='flex items-center justify-between gap-2'>
					<div className='text-lg font-bold'>Dashboard</div>
					{user && (
						<div className='flex items-center gap-2'>
							<img src={user.image} alt={user.name} className='w-8 h-8 rounded-full border' />
							<span>{user.name}</span>
						</div>
					)}
				</div>
				<p className='self-center'>
					Welcome "<strong>{user?.name}</strong>" to the dashboard
				</p>
			</header>
			<main>{children}</main>
		</div>
	);
}
