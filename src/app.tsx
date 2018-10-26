import * as React from 'react';

import {subHours} from 'date-fns';

import 'app.scss';
import LogEntry from 'components/log_entry';

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

        <LogEntry
          title="Did something good"
          category={2}
          startAt={subHours(new Date(), 1)}
          endAt={new Date(new Date())}
        />
      </div>
    );
  }
}

export default App;
