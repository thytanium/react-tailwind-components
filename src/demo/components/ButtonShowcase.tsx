import * as React from 'react';
import { Box, Button, Container, Text4Xl, Text5Xl } from '../..';
import Text from '../../components/Text/Text';
import { Check, ChevronDown, Trash, Refresh } from './Icon';

export default function ButtonShowcase(): React.ReactElement {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <Container>
          <Box padding={Box.padding.Y}>
            <Text5Xl color={Text.color.WHITE} weight={Text.weight.BOLD}>
              Tailwind React Components
            </Text5Xl>
          </Box>
        </Container>
      </div>
      <Container>
        <Box padding={Box.padding.Y}>
          <Text4Xl color={Text.color.DARK}>Button</Text4Xl>
          <hr />
        </Box>
        <Box isHorizontallySpaced padding={Box.padding.Y}>
          <Button>Default</Button>
          <Button variant={Button.variant.PRIMARY}>Primary</Button>
          <Button variant={Button.variant.LIGHT}>Light</Button>
          <Button variant={Button.variant.DARK}>Dark</Button>
          <Button variant={Button.variant.SUCCESS}>Success</Button>
          <Button variant={Button.variant.WARNING}>Warning</Button>
          <Button variant={Button.variant.DANGER}>Danger</Button>
        </Box>
        <Box isHorizontallySpaced padding={Box.padding.Y}>
          <Button isDisabled>Default</Button>
          <Button isDisabled variant={Button.variant.PRIMARY}>
            Primary
          </Button>
          <Button isDisabled variant={Button.variant.LIGHT}>
            Light
          </Button>
          <Button isDisabled variant={Button.variant.DARK}>
            Dark
          </Button>
          <Button isDisabled variant={Button.variant.SUCCESS}>
            Success
          </Button>
          <Button isDisabled variant={Button.variant.WARNING}>
            Warning
          </Button>
          <Button isDisabled variant={Button.variant.DANGER}>
            Danger
          </Button>
        </Box>
        <Box isHorizontallySpaced padding={Box.padding.Y}>
          <Button leftComponent={Check}>
            <span>Default</span>
          </Button>
          <Button rightComponent={ChevronDown} variant={Button.variant.PRIMARY}>
            <span>Primary</span>
          </Button>
          <Button leftComponent={Trash} variant={Button.variant.DANGER}>
            <span>Danger</span>
          </Button>
          <Button leftComponent={Refresh} variant={Button.variant.WARNING} />
        </Box>
      </Container>
    </div>
  );
}
