import { Box, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";
export default function Footer() {
  return (
    <SimpleGrid
      templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
      bg="#ebffff"
      maxW={1400}
      columnGap="30px"
      textColor="black"
      rowGap="30px"
      py="20px"
      textAlign="center"
    >
      <Box px="30px">
        <Heading>About us</Heading>
        <Text pt="30px" fontWeight="bold">
          The Future of the Web is Web 3.0,Metaverse, and Edge computing.
          Panaverse DAO is a movement to spread these technologies globally.
        </Text>
      </Box>
      <Box>
        <Heading>Useful Links</Heading>
        <Grid pt="30px" fontWeight="bold">
          <Text>Home</Text>
          <Text>Syallbus</Text>
          <Text>Explore</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </Grid>
      </Box>
      <Box pl="20px">
        <Heading>Follow Us</Heading>
        <Grid pt="30px" fontWeight="bold">
          <Text>Facebook</Text>
          <Text>Youtube</Text>
          <Text>Twitter</Text>
          <Text>Linkedin</Text>
          <Text>Github</Text>
        </Grid>
      </Box>
    </SimpleGrid>
  );
};