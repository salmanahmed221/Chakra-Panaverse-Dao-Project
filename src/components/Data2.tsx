import Link from "next/link";
import { Box, Container, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Data2() {
  return (
    <Container>
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text>
                  <b>Quarter II (Core)</b>
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <b>
                W2-201: Developing planet-Scale Web 2.0 Serverless Cloud Apps
                and ApIs using Next.js 13 and Cloud Development Kit (CDK) for
                Terraform
              </b>
            </Text>
            <Text>Duration: 13 Weeks</Text>
            <Text mt="10px" style={{ float: "left" }}>
              <b> Course Description: </b>
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              The objective of this course is to teach participants to develop
              customer-facing planet-scale Websites, Full-Stack Apps and
              templates, Dashboards, and Muti-Cloud Serverless ApIs. By the end
              of the quarter, the participants will be able to develop and
              deploy web platforms like Facebook, Shopify, etc. The technologies
              covered in this course will include Next.js 13, Figma, Tailwind
              CSS, Chakra UI, tRpC, QraphQL, prisma, Cockroachdb Serverless
              (postgreSQL Compatible), AWS Serverless Technologies, and Cloud
              Development Kit for Terraform (CDKTF).
            </Text>
            <Text mt="15px" style={{ float: "left" }}>
              <b>1. Next.js 13 Web Development</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Next 13 Official Documentation
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://beta.nextjs.org/docs"}
              >
                https://beta.nextjs.org/docs
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Latest Learn React Official Website
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://beta.reactjs.org/learn"}
              >
                https://beta.reactjs.org/learn
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Learn Next.js 13 Learning Repo
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://github.com/panaverse/learn-nextjs"}
              >
                https://github.com/panaverse/learn-nextjs
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>2. Next.js 13 using Chakra UI (Remote Zoom Class)</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              CSS Flexbox Explained – Complete Guide to Flexible Containers and
              Flex Items
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
                }
              >
                https://www.freecodecamp.org/news/css-flexbox-complete-guide/
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Chakra UI Docs
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://chakra-ui.com/getting-started"}
              >
                https://chakra-ui.com/getting-started
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>
                3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                Zoom Class)
              </b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Designing and prototyping Interfaces with Figma: Learn essential
              UX/UI design principles by creating interactive prototypes for
              mobile, tablet, and desktop by Fabio Staiano
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.amazon.com/Designing-prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
                }
              >
                https://www.amazon.com/Designing-prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Figma Design Kit for TailwindCSS
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.figma.com/community/file/768809027799962739"}
              >
                https://www.figma.com/community/file/768809027799962739
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Chakra UI Figma Kit
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.figma.com/community/file/971408767069651759"}
              >
                https://www.figma.com/community/file/971408767069651759
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>4. ApI Routes with Next.js (Remote Zoom Class)</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              ApI Routes
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://nextjs.org/docs/api-routes/introduction"}
              >
                https://nextjs.org/docs/api-routes/introduction
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>5. ApIs with Next.js and tRpC (Remote Zoom Class)</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Build a tRpC CRUD ApI Example with Next.js
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
                }
              >
                https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Stop building REST ApIs for your Next.js apps, use tRpC instead
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
                }
              >
                https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>6. SQL and prisma</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Start from scratch with relational databases
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
                }
              >
                https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              SQL For Beginners Video Tutorial
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.youtube.com/watch?v=5hzZtqCNQKk"}
              >
                https://www.youtube.com/watch?v=5hzZtqCNQKk
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Database Management Systems and SQL – Tutorial for Beginners
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.freecodecamp.org/news/dbms-and-sql-basics/"}
              >
                https://www.freecodecamp.org/news/dbms-and-sql-basics/
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>7. Next.js 13 using TailwindCSS (Remote Zoom Class)</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Modern CSS with Tailwind, Second Edition by Noel Rappin
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
                }
              >
                https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>8. AWS Application Composer (Remote Zoom Class)</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              What is AWS Application Composer?
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.youtube.com/watch?v=BujE_tik5r8"}
              >
                https://www.youtube.com/watch?v=BujE_tik5r8
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Event-driven apps with AWS Application Composer
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.youtube.com/watch?v=p411uh363jQ"}
              >
                https://www.youtube.com/watch?v=p411uh363jQ
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Visually design and build serverless applications quickly
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://aws.amazon.com/application-composer/"}
              >
                https://aws.amazon.com/application-composer/
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text>
              <b>Must Have: Create Free AWS Account</b>
            </Text>
            <Text>
              AWS Free Tier
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://aws.amazon.com/free/"}
              >
                https://aws.amazon.com/free/
              </Link>
            </Text>
            <Text>
              <b>Note:</b> For AWS Free Tier you will need a credit or debit
              card. The easiest way for pakistani students is to open a bank
              account with Meezan Bank. Open a Meezan Aasan Account if you have
              no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit
              Card and there is a requirement of Rs. 100 minimum deposit. The
              card will be delivered in a few weeks. Our students have reported
              that this Debit card works with AWS.
            </Text>
            <br />
            <Text>
              <mark>
                <b>Web 2.0 projects</b>
              </mark>
            </Text>
            <br />
            <Text>
              Next.js projects
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://github.com/panaverse/nextjs-projects"}
              >
                https://github.com/panaverse/nextjs-projects
              </Link>
            </Text>
            <br />
            <Text>
              Styling Next.js projects using TailwindCSS and Chakra UI
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://github.com/panaverse/styling-nextjs-projects"}
              >
                https://github.com/panaverse/styling-nextjs-projects
              </Link>
            </Text>
            <br />
            <Text>
              Todo Full-Stack App
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://github.com/ogzhanolguncu/min-todo"}
              >
                https://github.com/ogzhanolguncu/min-todo
              </Link>
            </Text>
            <br />
            <Text>
              Build a Twitter Clone
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.youtube.com/watch?v=nzJsYJPCc80"}
              >
                https://www.youtube.com/watch?v=nzJsYJPCc80
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
