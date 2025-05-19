// src/App.jsx

import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor'

function App() {
  return (
    <ChakraProvider>
      <Box
        minH="100vh"
        bg="#0f0a19"
        color="gray.500"
        px={6}
        py={8}
      >
        <CodeEditor />
      </Box>
    </ChakraProvider>
  )
}

export default App
