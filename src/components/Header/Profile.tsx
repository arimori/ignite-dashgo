import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Naoshi Arimori</Text>
          <Text color="gray.300" fontSize="small">naoshiarimori@gmail.com</Text>
        </Box>
      )}


      <Avatar size="md" name="Naoshi Arimori" src="https://github.com/arimori.png" />
    </Flex>
  );
}