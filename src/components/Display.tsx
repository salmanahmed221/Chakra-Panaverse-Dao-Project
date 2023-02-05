"use client";
import Image from "next/image";
import Link from "next/link";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";

export default function Display() {
  return (
    <Box textAlign={"center"}>
      <Image
        src={"/download (1).svg"}
        alt="panverse logo"
        width={300}
        height={300}
        priority
      ></Image>
      <hr style={{ border: "2px dashed red" }} />
      <br />
      <Heading>Certified Web 3.0 and Metaverse Developer</Heading>
      <br />
      <Text fontWeight={"bold"}>
        A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting
        Ready for the Next Generation of the Internet Consolidating Web 3.0,
        Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient
        Computing/IoT, Network Automation, and Bioinformatics Technologies The
        Panaverse Community and Syllabus:
        <Link
          style={{ color: "red" }}
          href={"https://www.panaverse.co "}
          target={"_blank"}
          title="Click to visit"
        >
          https://www.panaverse.co
        </Link>
      </Text>
      <br />
      <Heading>Version 6.0.0 - March 2023</Heading>
      <br />
      <Text fontWeight={"bold"}>
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
        <br />
        2030.
        <Link
          style={{ color: "red" }}
          href={"https://www.citivelocity.com/citigps/metaverse-and-money/ "}
          target={"_blank"}
          title="Click to visit"
        >
          https://www.citivelocity.com/citigps/metaverse-and-money/
        </Link>
      </Text>
      <br />
      <Heading>The Program in a Nutshell: Earn While You Learn</Heading>
      <br />
      <Text fontWeight={"bold"}>
        In this brand-new type of curriculum, students will learn how to make
        money and boost exports in the classroom and will begin doing so within
        six months of the program's beginning. It resembles a cross between a
        corporate venture and an educational project.
      </Text>
      <br />
      <Heading>Program of Studies</Heading>
      <br />
      <Text fontWeight={"bold"}>
        This curriculum is intended for beginners who want to learn software
        development from the ground up. The first three quarters are shared by
        all specialties and are dedicated to studying Object-Oriented
        Programming and cutting-edge Full-Stack Web 2.0 development. It is going
        to be a fifteen-month-long hybrid program that includes both onsite and
        online classes and is divided into five quarters of 13 weeks each. The
        emphasis will be on hands-on learning by educating students to produce
        projects. To accommodate everyone, courses will be held primarily on
        weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
        hybrid teaching format, with core onsite classes complemented by online
        Zoom laboratories and recorded videos
      </Text>
      <br />
      <Flex justify={"center"}>
        <Image
          src={"/download.svg"}
          alt="Metaverse"
          width={500}
          height={500}
          priority
        ></Image>
      </Flex>
      <br />
      <Heading>Core Courses (Common in All Specializations):</Heading>
      <br />
      <Text fontWeight={"bold"}>
        Every participant of the program will start by completing the following
        three core courses:
      </Text>
      <br />
    </Box>
  );
}
