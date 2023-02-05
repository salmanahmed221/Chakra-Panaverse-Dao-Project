"use client";

import { Data1, Data2, Data3, Display } from "@/components";
import { VStack } from "@chakra-ui/react";

export default function page() {
  return (
    <VStack spacing="10" style={{ backgroundColor: "#dcdde1", margin: "1px" }}>
      <Display />
      <Data1 />
      <Data2 />
      <Data3 />
    </VStack>
  );
}


