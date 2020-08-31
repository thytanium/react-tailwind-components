import * as React from 'react';
import { Box, Container, UncontrolledModal, Text4Xl } from '../..';
import Text from '../../components/Text/Text';

export default function ModalShowcase(): React.ReactElement {
  return (
    <Container>
      <Box padding={Box.padding.Y}>
        <Text4Xl color={Text.color.DARK}>Modal</Text4Xl>
        <hr />
      </Box>
      <Box padding={Box.padding.Y}>
        <UncontrolledModal>
          <p>This is my modal!</p>
        </UncontrolledModal>
      </Box>
    </Container>
  );
}
