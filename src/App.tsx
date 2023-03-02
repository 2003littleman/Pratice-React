import './App.css';
import React from 'react';
import { Text } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";
import Props from './types';


function App(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <ChakraProvider>
          <Text>{props.canal}</Text>
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;