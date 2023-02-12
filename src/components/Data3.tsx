import { Box, Container, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Data3() {
  return (
    <Container>
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text>
                  <b>Quarter III (Core)</b>
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <b>
              $-101: Dollar Making Bootcamp - Full-Stack Template and ApI
              product Development
            </b>
            <br />
            <Text>Duration: 13 Weeks</Text>
            <br />
            <br />
            <Text>
              <mark>
                <b>Earn While You Learn projects</b>
              </mark>
            </Text>
            <br />
            <Text>
              <b>A. Build Full-Stack Next.js 13 Jamstack Templates</b>
              <br />
              You will be assigned to build a template which we will sell on
              Theme Forest and panaverse DAO marketplace. The panaverse DAO will
              receive 25% share on the sale of the template which will be used
              to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the panaverse DAO in the form of panaverse
              tokens.
            </Text>
            <br />
            <Text>
              <b>B. Build QraphQL ApIs</b>
              <br />
              You will be assigned to build ApIs for which you will sell
              subscriptions on the panaverse DAO Marketplace. The panaverse DAO
              will receive 25% share on the sale of the template which will be
              used to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the panaverse DAO in the form of panaverse
              tokens.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
