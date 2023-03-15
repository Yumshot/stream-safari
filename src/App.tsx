import { Box, Button, Text, Heading, Center } from "@chakra-ui/react";
import AppDescription from "./components/ReadMoreHomeComponent";
function App() {
  return (
    <div className="App">
      <Center h="100vh">
        <Box p={4} textAlign="center">
          <Heading
            size="xl"
            fontWeight={400}
            lineHeight="tall"
            letterSpacing="tight"
          >
            Welcome to Stream Safari
          </Heading>
          <AppDescription
            title={"Join the ultimate Pokemon adventure with StreamSafari!"}
          />
        </Box>
      </Center>
    </div>
  );
}

export default App;
