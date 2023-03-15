import {
  Box,
  Button,
  Card,
  CardFooter,
  Flex,
   Spacer,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { HOMEPAGE_LOCALES } from "../locales/home";
import { motion } from "framer-motion";
import PokeballAnimation from "./PokeballAnimationComponent";
import { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const AppDescription = (props: any) => {
  const [flag, setFlag] = useBoolean(false);
  const [textOpacity, setTextOpacity] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState("block");
  const toggleText = () => {
    setFlag.toggle();
  };

  useEffect(() => {
    if (flag) {
      setTextOpacity(1);
      setHeaderOpacity("none");
    } else {
      setTextOpacity(0);
      setHeaderOpacity("block");
    }
  }, [flag]);

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <Box textAlign="center">
      <div style={{ display: headerOpacity }}>
        <PokeballAnimation />
      </div>

      {flag ? (
        <>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={flag ? "visible" : "hidden"}
          >
            <Card variant={"outline"} p={7} m={2}>
              <Text fontSize="md" p={5} style={{ opacity: textOpacity }}>
                {HOMEPAGE_LOCALES.en.body}
                <CardFooter style={{ minWidth: "100%" }}>
                  <Flex>
                    <Button variant="ghost" onClick={toggleText}>
                      <ArrowBackIcon w={4} h={4} />
                    </Button>
                    <Spacer />
                    <Button
                      variant={"link"}
                      colorScheme="purple"
                      rightIcon={<ArrowForwardIcon />}

                    >
                      Get Started
                    </Button>
                  </Flex>
                </CardFooter>
              </Text>
            </Card>
          </motion.div>
        </>
      ) : (
        <>
          <Text fontSize="sm" p={5}>
            {props.title}
          </Text>
          <Button variant="outline" onClick={toggleText}>
            Read More
          </Button>
        </>
      )}
    </Box>
  );
};

export default AppDescription;
