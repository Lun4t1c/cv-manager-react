import type { CSSProperties } from 'react';
import './CVCreatorPage.css';
import './SplitPane.css';
import { SplitPane } from '@rexxars/react-split-pane';

function CVCreatorPage() {
  //https://www.npmjs.com/package/@rexxars/react-split-pane
  const cssProps: CSSProperties = {
    height: '88%'
  };

  return (
    <>
      <SplitPane split="vertical" minSize={150} maxSize={-150} defaultSize={500} style={cssProps}>
        <form className="form-container">
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="E-mail address" required />
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              pattern="[0-9\-]+"
              required
            />
          </div>

          <div className="form-group">
            <input type="url" id="url" name="url" placeholder="LinkedIn profile" required />
          </div>
        </form>

        <div className="preview-container">preview</div>
      </SplitPane>
    </>
  );
}

export default CVCreatorPage;
