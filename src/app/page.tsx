"use client";

import { Data1, Data2, Data3, Display, Navigation } from "@/components";
import { VStack } from "@chakra-ui/react";

export default function page() {
  return (
    <VStack spacing="32" textColor='white'  bg='black'>
      <Navigation/> 
      <Display />
      <Data1 />
      <Data2 />
      <Data3 />
    </VStack>
  );
}


