'use client';

import { verifyAccountAction } from '@/actions/verify-account-action';
import { useActionFeedback } from '@/hooks/useActionFeedback';
import { Loader2Icon } from 'lucide-react';
import { useActionState, useId } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import FieldError from './field-error';

const initialState = { errors: {} };
export default function VerifyAccountForm() {
	const id = useId();
	const [state, formAction, isPending] = useActionState(verifyAccountAction, initialState);

	useActionFeedback(state);

	return (
		<form action={formAction} className='grid gap-6 mt-4'>
			<div className='*:not-first:mt-2'>
				<Label htmlFor={`${id}-code`}>Verify code</Label>
				<Input
					id={`${id}-code`}
					name='code'
					placeholder='123...'
					type='text'
					required
					disabled={isPending}
					aria-invalid={!!state.errors?.code}
				/>
				<FieldError message={state.errors?.code?.[0]} />
			</div>

			<Button type='submit' disabled={isPending} className='w-full'>
				{isPending ? (
					<>
						<Loader2Icon className='animate-spin size-5' />
						<span>'verifying...'</span>
					</>
				) : (
					'Verify'
				)}
			</Button>
		</form>
	);
}
