import { useState } from 'react';

export function useFormInput(initialState) {
	const [value, setValue] = useState(initialState);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return {
		value,
		onChange: handleChange,
	};
}
