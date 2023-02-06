import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Data1() {
  return (
    <Box className="container">
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Quarter I (Core)</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <b> CS-101: Object-Oriented Programming using TypeScript</b>
            <br />
            Duration: 13 Weeks
            <br />
            <b style={{ float: "left" }}>Course Description: </b>
            <br />
            <Text>
              We will start the program by learning the fundamentals of
              Object-Oriented programming using JavaScript and TypeScript. We
              will also understand the latest Web trends i.e. Web 3.0 and
              Metaverse concepts and try to understand their working from the
              perspective of the users.
            </Text>
            <br />
            <b style={{ float: "left" }}>
              <mark>Course Outline: </mark>
            </b>
            <br />
            <br />
            <p>
              <b style={{ float: "left" }}>1. HTML and CSS (Homework) </b>
            </p>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Learn HTML by Hira Khan (Watch Recorded Videos)
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                }
              >
                https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Learn CSS Intro by Hira Khan (Watch Recorded Videos)
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                }
              >
                https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text>
              <b style={{ float: "left" }}>2. Web 3.0 and Metaverse Theory</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Introduction to panaverse DAO
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing "
                }
              >
                https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Web 3.0 User Guide
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                }
              >
                https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>
                3. Complete Web 3 Assignments included in the Web 3 User Guide
              </b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Virtual and Augmented Metaverse User Guide
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                }
              >
                https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text>
              <b style={{ float: "left" }}>4. Fundamentals of JavaScript</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                }
              >
                https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Chapters 2-6, 13 of JavaScript from Beginner to professional:
              Learn JavaScript quickly by building fun, interactive, and dynamic
              web apps, games, and pages
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.amazon.com/JavaScript-Beginner-professional-building-interactive/dp/1800562527/ref=sr_1_4"
                }
              >
                https://www.amazon.com/JavaScript-Beginner-professional-building-interactive/dp/1800562527/ref=sr_1_4
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              JavaScript Book Code
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://github.com/packtpublishing/JavaScript-from-Beginner-to-professional"
                }
              >
                https://github.com/packtpublishing/JavaScript-from-Beginner-to-professional
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Getting Started Exercises with JavaScript and Node.js
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                }
              >
                https://www.amazon.com/JavaScript-Beginner-professional-building-interactive/dp/1800562527/ref=sr_1_4
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text>
              <b>Topics Covered in the Quiz:</b>
            </Text>
            <br />
            <Text>
              <b>A. </b>Background of JavaScript and How to use JavaScript in
              Browser
            </Text>
            <Text>
              <b>B. </b>Variables, primitive data types Analyzing and modifying
              data types, and Operators (Chapter 2 of JavaScript from Beginner
              to professional)
            </Text>
            <Text>
              <b>C. </b>Intro to Node.js, .mjs files, Modules, NpM, import,
              export, and using external modules with npm:
            </Text>
            <Text>
              <b>D. </b>How to accept user input in your Node.js JavaScript
              programs, this will allow us to create interactive Node.js console
              programs using prompt-sync library. The last example in this
              presentation shows you how to use prompt-sync library in your
              Node.js programs:
            </Text>
            <Text>
              <b>E. </b>Using Arrays and Objects in Node.js programs (chapter 3
              of JavaScript from Beginner to professional)
            </Text>
            <Text>
              <b>F. </b>Using if and if else statements, else if statements,
              Conditional ternary operators, and switch statements in Node.js
              programs (chapter 4 of JavaScript from Beginner to professional)
            </Text>
            <Text>
              <b>G. </b>Using while loop, do while loop, for loop, for in, and
              for of loop in Node.js (chapter 5 of JavaScript from Beginner to
              professional)
            </Text>
            <Text>
              <b>H. </b>Using Basic functions, Function arguments, Return,
              Variable scope in functions, Recursive functions, Nested
              functions, Anonymous functions, and Function callbacks in Node.js
              (chapter 6 of JavaScript from Beginner to professional)
            </Text>
            <Text>
              <b>I. </b>Using Concurrency, Callbacks, promises, async / await,
              and Event loop (chapter 13 of JavaScript from Beginner to
              professional)
            </Text>
            <Text>
              <b>J. </b>JavaScript promises, mastering the asynchronous
            </Text>
            <Text>
              <b>K. </b>New JavaScript Features in ECMAScript 2022 and 2021
            </Text>
            <br />
            <br />
            <Text>
              <b style={{ float: "left" }}>
                5. Object-Oriented programming with TypeScript
              </b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
              Skills Using Type-Safe JavaScript
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
                }
              >
                https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Learning Repository
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://github.com/panaverse/learn-typescript"}
              >
                https://github.com/panaverse/learn-typescript
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              In Class Companion projects and articles for Learning TypeScript
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://www.learningtypescript.com/"}
              >
                https://www.learningtypescript.com/
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Homework project
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={"https://github.com/panaverse/typescript-node-projects"}
              >
                https://github.com/panaverse/typescript-node-projects
              </Link>
            </Text>
            <br />
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>6. Quarter Break Assignments and Quizzes</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left", lineHeight: "1" }}>
              During the Quarter Break, we do the following Assignments:
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge"
                }
              >
                <b>1. </b>
                https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge
              </Link>
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"
                }
              >
                <b>2. </b>
                https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app
              </Link>
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui"
                }
              >
                <b>3. </b>
                https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
              </Link>
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              <b>4. </b>Build a panaverse DAO Syllabus Website using Next.js 13
              given the content from the following document:
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                }
              >
                https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
              </Link>
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              <b>5. </b>Build a new pIAIC Website using Next.js 13 given the
              content from the current pIAIC Website and from the following
              document:
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                }
              >
                https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
              </Link>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <i>
                <mark>
                  After completing the above Five Assignments everyone will
                  appear in the following two Quizzes covering Github and
                  TypeScript:
                </mark>
              </i>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              <b>1 . Fundamentals of Version Control with Git Quiz</b>
            </Text>
            <br />
            <br />
            <Text style={{ float: "left" }}>
              Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
              Recorded Videos)
              <br />
              <Link
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
                href={
                  "https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
                }
              >
                https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF
              </Link>
            </Text>
            <br />
            <Text style={{ float: "left" }}>
              Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
              step-by-step course for the complete beginner by Tobias Günther
            </Text>
            <br />
            <br />
            <br />
            <Text>
              <b>Git Quiz</b>
            </Text>
            <Text>Total Questions: 60, Total Time: 75 minutes</Text>
            <br />
            <Text>
              <b>2 .TypeScript proficiency Quiz</b>
            </Text>
            <Text>Total Questions: 63 Duration: 120 minutes</Text>
            <br />
            <Text>
              <b>Study Material:</b>
              <Link
                href={"https://github.com/panaverse/learn-typescript"}
                style={{ color: "red" }}
                target={"_blank"}
                title="click to visit"
              >
                <br />
                https://github.com/panaverse/learn-typescript
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
