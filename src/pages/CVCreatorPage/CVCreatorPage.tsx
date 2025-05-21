import { useState, type CSSProperties } from 'react';
import './CVCreatorPage.css';
import './SplitPane.css';
import { SplitPane } from '@rexxars/react-split-pane';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';
import { Provider } from 'react-redux';
import { cvStore } from './cvStore';

function CVCreatorPage() {

  //https://www.npmjs.com/package/@rexxars/react-split-pane
  const cssProps: CSSProperties = {
    height: '88%'
  };

  return (
    <>
      <Provider store={cvStore}>
        <SplitPane split="vertical" minSize={150} maxSize={-150} defaultSize={500} style={cssProps}>
          <Editor></Editor>

          <Preview></Preview>
        </SplitPane>
      </Provider>

    </>
  );
}

export default CVCreatorPage;
