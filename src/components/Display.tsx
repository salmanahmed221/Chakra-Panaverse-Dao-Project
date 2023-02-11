"use client";
import Image from "next/image";
import Link from "next/link";
import { Heading, Box, Text, Flex, HStack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const line1 = " Certified Web 3.0 and Metaverse Developer  ";
const line2 = " Version 6.0.0 - March 2023 ";
const line3 = " The Program in a Nutshell: Earn While You Learn ";
const line4 = " Program of Studies ";
const line5 = " Core Courses (Common in All Specializations): ";

export default function Display() {
  return (
    <Box
      w="full"
      textAlign="center"
      as={motion.div}
      viewport={{ once: false, amount: 0.25 }}
      initial="hidden"
      whileInView="show"
    >
      <Text
        mb="8"
        as={motion.div}
        initial="hidden"
        animate="visible"
        fontSize={["22px", "20px", "46px", "46px"]}
        textColor=" white"
        mx="2"
      >
        {line1.split("").map((char, index) => (
          <motion.span key={index}>{char}</motion.span>
        ))}
      </Text>

      <Flex
        justify="center"
        direction={["column", "column", "column", "column", "row"]}
      >
        <VStack mx="10" maxW={["90%", "70%", "70%", "70%", "40%"]} my="20">
          <Text
            as={motion.div}
            textAlign="start"
            fontSize={["16px", "24px", "24px", "32px", "32px"]}
          >
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet Consolidating
            Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
            Ambient Computing/IoT, Network Automation, and Bioinformatics
            Technologies The Panaverse Community and Syllabus
            <Link
              href={"https://www.panaverse.co "}
              target={"_blank"}
              title="Click to visit"
            >
              <Text my="10" textColor="whiteAlpha.600">
                https://www.panaverse.com
              </Text>
            </Link>
          </Text>
        </VStack>

        <HStack
          as={motion.div}
          animate={{
            scale: [1, 1, 0, 1],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image src={"/without.png"} alt="/" height={500} width={600} />
        </HStack>
      </Flex>

      <Text
        mt="40"
        mb="8"
        as={motion.div}
        initial="hidden"
        animate="visible"
        fontSize={["22px", "20px", "46px", "46px"]}
        textColor=" white"
      >
        {line2.split("").map((char, index) => (
          <motion.span key={index}>{char}</motion.span>
        ))}
      </Text>
      <Text
        as={motion.div}
        fontSize={["16px", "24px", "24px", "32px", "32px"]}
        mx="auto"
        maxW={["90%", "90%", "90%", "70%", "50%"]}
      >
        The internet is without a doubt the most important technological
        development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
        Edge technologies expand the internet as we know it by introducing novel
        features and advancements. Metaverse will make use of all aspects of
        modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge
        computing, voice computing, ambient computing, and more. Citi is the
        latest Wall Street business to give a positive prognosis for Web 3.0 and
        the Metaverse, terms used to depict a future internet vision centered on
        decentralized technologies and virtual worlds. Citi stated in a March
        2022 research paper that the metaverse economy might have a total
        addressable market of up to $13 trillion and five billion people by
        2030.
        <Link
          href={"https://www.citivelocity.com/citigps/metaverse-and-money/ "}
          target={"_blank"}
          title="Click to visit"
        >
          <Text my="10" textColor="whiteAlpha.600">
            https://www.citivelocity.com/citigps/metaverse-and-money/
          </Text>
        </Link>
      </Text>

      <Text
        mt="40"
        mb="8"
        as={motion.div}
        initial="hidden"
        animate="visible"
        fontSize={["22px", "20px", "46px", "46px"]}
        textColor=" white"
      >
        {line3.split("").map((char, index) => (
          <motion.span key={index}>{char}</motion.span>
        ))}
      </Text>

      <Text
        as={motion.div}
        fontSize={["16px", "24px", "24px", "32px", "32px"]}
        mx="auto"
        maxW={["90%", "90%", "90%", "70%", "50%"]}
      >
        In this brand-new type of curriculum, students will learn how to make
        money and boost exports in the classroom and will begin doing so within
        six months of the program's beginning. It resembles a cross between a
        corporate venture and an educational project.
      </Text>

      <Text
        mt="40"
        as={motion.div}
        initial="hidden"
        animate="visible"
        fontSize={["22px", "20px", "46px", "46px"]}
        textColor=" white"
      >
        {line4.split("").map((char, index) => (
          <motion.span key={index}>{char}</motion.span>
        ))}
      </Text>

      <Flex
        justify="center"
        maxW="90%"
        mx="auto"
        direction={["column", "column", "column", "column", "row"]}
      >
        <VStack mx="auto" maxW={["90%", "70%", "70%", "70%", "40%"]} my="20">
          <Text
            as={motion.div}
            textAlign="center"
            fontSize={["16px", "24px", "24px", "30px", "24px"]}
          >
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded videos
          </Text>
        </VStack>

        <HStack justify="center">
          <Image src={"/download.svg"} alt="/" height={500} width={600} />
        </HStack>
      </Flex>

      <Text
        mt="40"
        mb="8"
        as={motion.div}
        initial="hidden"
        animate="visible"
        fontSize={["22px", "20px", "46px", "46px"]}
        textColor=" white"
      >
        {line5.split("").map((char, index) => (
          <motion.span key={index}>{char}</motion.span>
        ))}
      </Text>

      <Text
        as={motion.div}
        textAlign="center"
        fontSize={["16px", "24px", "24px", "30px", "24px"]}
      >
        Every participant of the program will start by completing the following
        three core courses:
      </Text>
    </Box>
  );
}
