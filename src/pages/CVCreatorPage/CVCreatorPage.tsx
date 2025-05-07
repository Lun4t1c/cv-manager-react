import type { CSSProperties } from 'react';
import './CVCreatorPage.css';
import './SplitPane.css';
import { SplitPane } from '@rexxars/react-split-pane';

function CVCreatorPage() {
  //https://www.npmjs.com/package/@rexxars/react-split-pane
  const cssProps: CSSProperties = {
    display: 'flex',
    height: '100%',
    backgroundColor: 'purple',
    boxSizing: 'border-box'
  }
  return <>
    <SplitPane split="vertical" minSize={150} maxSize={-150} defaultSize={500} style={cssProps}>
      <form className='form-container'>
        <input></input>
      </form>

      <div className='preview-container'>
        preview
      </div>
    </SplitPane>
  </>;
}

export default CVCreatorPage;
