import { useState, type CSSProperties } from 'react';
import './CVCreatorPage.css';
import './SplitPane.css';
import { SplitPane } from '@rexxars/react-split-pane';
import Editor from './Editor/Editor';

function CVCreatorPage() {

  //https://www.npmjs.com/package/@rexxars/react-split-pane
  const cssProps: CSSProperties = {
    height: '88%'
  };

  return (
    <>
      <SplitPane split="vertical" minSize={150} maxSize={-150} defaultSize={500} style={cssProps}>
        <Editor></Editor>

        
      </SplitPane>
    </>
  );
}

export default CVCreatorPage;
