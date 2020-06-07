import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Backdrop', () => {
	it('renders properly', () => {
		const { getByText } = render(<Modal />);

		expect(getByText('Hola')).toBeInTheDocument();
	});
});
