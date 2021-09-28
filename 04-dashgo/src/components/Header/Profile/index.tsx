import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { IProfileProps } from './@interfaces';

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thales Sousa</Text>
          <Text color="gray.300" fontSize="small">
            thalesousa@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Thales Sousa"
        src="https://github.com/thalesousa.png"
      />
    </Flex>
  );
}
