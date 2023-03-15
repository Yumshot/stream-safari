import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const PokeballAnimation = () => {
  const pokeballVariants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: [0, -45, 0, 45, 0],
      transition: {
        duration: 3,
        ease: "linear",
      },
    },
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <motion.div
        variants={pokeballVariants}
        initial="start"
        animate="end"
        style={{ display: "inline-block", originX: "50%", originY: "50%" }}
      >
        <Box
          bg="white"
          w="100px"
          h="100px"
          borderRadius="50%"
          border="10px solid black"
          position="relative"
        >
          <Box
            bg="red"
            w="100%"
            h="50%"
            position="absolute"
            top="0"
            borderRadius="50% 50% 0 0"
          />
          <Box
            bg="white"
            w="100%"
            h="50%"
            position="absolute"
            bottom="0"
            borderRadius="0 0 50% 50%"
          />
          <Box
            bg="black"
            w="20px"
            h="20px"
            borderRadius="50%"
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default PokeballAnimation;
