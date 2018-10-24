import * as React from 'react';

import 'app.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Tictime</h1>
        </header>
        <p className="app-description">
          A time tracking tool
        </p>
      </div>
    );
  }
}

export default App;
