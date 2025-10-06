import VerifyAccountForm from '@/components/auth/verify-account-form';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function VerifyEmailPage() {
	return (
		<div>
			<div className='flex flex-col items-center gap-2'>
				{/* logo  */}
				<Link href='/' aria-label='Home' className='flex shrink-0 justify-center'>
					<Image src='/logo.png' alt='logo' width={65} height={50}></Image>
				</Link>

				<div className='sm:text-center'>Verify Account</div>
				<div className='sm:text-center'>We just need a few details to get you started.</div>
			</div>
			
			<VerifyAccountForm />

			<Button type='button' variant='link' asChild>
				<Link href='#'>Resend Code</Link>
			</Button>
		</div>
	);
}
