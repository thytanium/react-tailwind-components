import * as React from 'react';
import { render } from '@testing-library/react';
import Stack from './Stack';

describe('Stack component and context', () => {
  it('passes correct zIndex to children', () => {
    const Layers = (): React.ReactElement => (
      <Stack>
        {zIndex0 => (
          <>
            <span>{`zIndex0 = ${zIndex0}`}</span>
            <Stack>{zIndex1 => <span>{`zIndex1 = ${zIndex1}`}</span>}</Stack>
          </>
        )}
      </Stack>
    );

    const { getByText } = render(<Layers />);

    expect(getByText('zIndex0 = 1')).toBeInTheDocument();
    expect(getByText('zIndex1 = 2')).toBeInTheDocument();
  });
});
