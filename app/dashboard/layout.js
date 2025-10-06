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
			<header className='p-4 border-b flex items-center justify-between'>
				<div className='text-lg font-bold'>Dashboard</div>
				{user && (
					<>
						<p>Welcome "<strong>{user?.name}</strong>" to the dashboard</p>
						<div className='flex items-center gap-2'>
							<img src={user.image} alt={user.name} className='w-8 h-8 rounded-full border' />
							<span>{user.name}</span>
						</div>
					</>
				)}
			</header>
			<main>{children}</main>
		</div>
	);
}
