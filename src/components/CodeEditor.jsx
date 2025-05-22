  import { Box, HStack } from '@chakra-ui/react'
  import { Editor } from '@monaco-editor/react'
  import React, { useRef, useState } from 'react'
  import LanguageSelector from './LanguageSelector'
  import { CODE_SNIPPETS } from '../constants'
  import Output from './Output'

  const CodeEditor = () => {

    const [value, setValue] = useState(CODE_SNIPPETS["python"]);
    const editorRef = useRef();
    const [language, setLanguage] = useState("python")

    const onMount = (editor) => {
      editorRef.current = editor;
      editor.focus();
    }

    const onSelect = (language) => {
      setLanguage(language)
      setValue(CODE_SNIPPETS[language]);
    }



    return (
      <Box>
        

        <HStack spacing={4} flexDirection={{ base: "column", md: "row" }}>
          <Box  w={{ base: "100%", md: "50%" }}>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor

              height="75vh"
              theme="vs-dark"
              defaultLanguage="python"
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}

            />

            
          </Box>

          <Output editorRef={editorRef} language={language}/>
        </HStack>

      </Box>
    )
  }

  export default CodeEditor