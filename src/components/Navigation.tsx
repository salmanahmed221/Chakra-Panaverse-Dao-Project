"use client";

import { Avatar, Box, Button, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <Box w="full" bg="#ebffff">
      <HStack justify="space-between" mx="2 ">
        <Image src={"/fulllogo.png"} alt="/" height={120} width={120} />

        <HStack
          spacing="16"
          fontSize={["14px", "14px", "18px", "18px"]}
          fontWeight="medium"
        >
          <Link
            href={"https://portal.piaic.org/"}
            target="_blank"
            title="Click to Visit"
          >
            <Button
              px={{ base: "6", lg: "10" }}
              borderRadius="20"
              variant="unstyled"
              bg="blue"
            >
              Apply
            </Button>
          </Link>
          <Box>
            <Avatar
              name="Dan Abrahmov"
              src="/businessman-character-avatar-isolated_24877-60111.avif"
            />
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navigation;
