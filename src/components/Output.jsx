// src/components/Output.jsx

import { Box, Button, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { LANGUAGE_VERSIONS } from '../constants'

const Output = ({ editorRef, language }) => {
  const [stdinValue, setStdinValue] = useState(`1\n2`)   // Holds user-supplied stdin 
  const [output, setOutput]       = useState('')
  const [loading, setLoading]     = useState(false)
  const toast = useToast()

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue()
    if (!sourceCode) return

    setLoading(true)
    setOutput("")

    const payload = {
      language,
      version: LANGUAGE_VERSIONS[language],          // Matches an entry in /runtimes :contentReference[oaicite:12]{index=12}
      files: [{ content: sourceCode }],               // Single “file” containing the editor code :contentReference[oaicite:13]{index=13}
      stdin: stdinValue,                              // Pass user input to Piston :contentReference[oaicite:14]{index=14}
      args: [],
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1,
    }

    try {
      const res = await axios.post(
        'https://emkc.org/api/v2/piston/execute', 
        payload
      )
      setOutput(res.data?.run?.output || "No output.")
    } catch (err) {
      console.error(err)
      toast({
        title: "Execution Error",
        description: "Something went wrong while running the code.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box  w={{ base: "100%", md: "50%" }}>
      <Text mb={2} fontSize="lg">Enter Your Input Here:</Text>
      <Textarea
        placeholder="Type your stdin here..."
        value={stdinValue}
        onChange={(e) => setStdinValue(e.target.value)}
        size="sm"
        resize="vertical"
        rows={4}
        mb={4}
      />

      <Text mb={2} fontSize="lg">Output:</Text>
      <Button
        onClick={runCode}
        isLoading={loading}
        variant="outline"
        colorScheme="green"
        mb={4}
      >
        Run Code
      </Button>

      <Box
        mt={4}
        height="60vh"
        p={4}
        borderRadius={4}
        border="1px solid"
        borderColor="#333"
        fontFamily="mono"
        whiteSpace="pre-wrap"
        overflowY="auto"
        bg="blackAlpha.100"
        color="whiteAlpha.900"
      >
        {output || "Output will appear here."}
      </Box>
    </Box>
  )
}

export default Output
