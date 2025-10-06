'use client';

import { registerAction } from '@/actions/register-action';
import { useActionFeedback } from '@/hooks/useActionFeedback';
import { useActionState, useId } from 'react';
import PhoneNumberInput from '../phone-input';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import FieldError from './field-error';

const initialState = { errors: {} };
export default function RegisterForm() {
	const id = useId();
	const [state, formAction, isPending] = useActionState(registerAction, initialState);

	useActionFeedback(state);

	return (
		<form action={formAction} className='grid gap-6 mt-4'>
			<div className='*:not-first:mt-2'>
				<Label htmlFor={`${id}-name`}>Full name</Label>
				<Input
					id={`${id}-name`}
					name='name'
					defaultValue={state.values?.name || ''}
					placeholder='Matt Welsh'
					type='text'
					required
					aria-invalid={!!state.errors?.name}
					disabled={isPending}
				/>
				<FieldError message={state.errors?.name?.[0]} />
			</div>

			<div className='*:not-first:mt-2'>
				<Label htmlFor={`${id}-email`}>Email</Label>
				<Input
					id={`${id}-email`}
					name='email'
					defaultValue={state.values?.email || ''}
					placeholder='hi@yourcompany.com'
					type='email'
					required
					aria-invalid={!!state.errors?.email}
					disabled={isPending}
				/>
				<FieldError message={state.errors?.email?.[0]} />
			</div>

			{/* mobile number */}
			<div className='*:not-first:mt-2'>
				<PhoneNumberInput name='mobile' name2='mobile_country_code' />
				<FieldError message={state.errors?.mobile?.[0]} />
				<FieldError message={state.errors?.mobile_country_code?.[0]} />
			</div>
			<div className='*:not-first:mt-2'>
				<Label htmlFor={`${id}-password`}>Password</Label>
				<Input
					id={`${id}-password`}
					name='password'
					type='password'
					defaultValue={state.values?.password || ''}
					placeholder='Enter your password'
					required
					aria-invalid={!!state.errors?.password}
					disabled={isPending}
				/>
				<FieldError message={state.errors?.password?.[0]} />
			</div>

			<div className='*:not-first:mt-2'>
				<Label htmlFor={`${id}-password_confirmation`}>Password Confirmation</Label>
				<Input
					id={`${id}-password_confirmation`}
					name='password_confirmation'
					type='password'
					defaultValue={state.values?.password_confirmation || ''}
					placeholder='Enter your password again'
					required
					aria-invalid={!!state.errors?.password_confirmation}
					disabled={isPending}
				/>
				<FieldError message={state.errors?.password_confirmation?.[0]} />
			</div>

			<Button type='submit' disabled={isPending} className='w-full'>
				{isPending ? 'Signing up...' : 'Sign up'}
			</Button>
		</form>
	);
}
