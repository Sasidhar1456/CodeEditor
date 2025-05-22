import { Box, HStack } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import React, { useEffect, useRef, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './Output';

const CodeEditor = () => {
  const [value, setValue] = useState(CODE_SNIPPETS["python"]);
  const editorRef = useRef();
  const [language, setLanguage] = useState("python");
  const [editorHeight, setEditorHeight] = useState("90vh");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage]);
  };

  // Responsive height logic
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        setEditorHeight("45vh");
      } else {
        setEditorHeight("75vh");
      }
    };

    updateHeight(); // Set on mount
    window.addEventListener("resize", updateHeight); // Listen to window resize

    return () => window.removeEventListener("resize", updateHeight); // Cleanup
  }, []);

  return (
    <Box>
      <HStack spacing={4} flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "50%" }}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height={editorHeight}
            theme="vs-dark"
            defaultLanguage="python"
            value={value}
            onMount={onMount}
            onChange={(newValue) => setValue(newValue)}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
            }}
          />
        </Box>

        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
