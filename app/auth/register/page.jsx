import RegisterForm from '@/components/auth/register-form';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
	return (
		<div>
			<div className='flex flex-col items-center gap-2'>
				{/* logo  */}
				<Link href='/' aria-label='Home' className='flex shrink-0 justify-center'>
					<Image src='/logo.png' alt='logo' width={65} height={50}></Image>
				</Link>

				<div className='sm:text-center'>Sign up Origin UI</div>
				<div className='sm:text-center'>We just need a few details to get you started.</div>
			</div>

			<RegisterForm />

			<div className='flex items-center text-xs capitalize'>
				Already have an account?
				<Button type='button' variant='link' asChild>
					<Link href='/auth/login'>login</Link>
				</Button>
			</div>
		</div>
	);
}
