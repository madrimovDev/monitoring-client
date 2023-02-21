import React, { memo, useState } from 'react'
import { Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react'

const FormPassord = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false)

	return (
		<>
			<FormControl isRequired>
				<FormLabel>Password</FormLabel>
				<Input
					name='password'
					type={showPassword ? 'text' : 'password'}
				/>
			</FormControl>
			<Checkbox
				onChange={() => setShowPassword(!showPassword)}
				size='sm'>
				Show Password
			</Checkbox>
		</>
	)
}

export default memo(FormPassord)
