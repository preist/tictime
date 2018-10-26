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
          title="Made some coffee and started work"
          category={1}
          startAt={subHours(new Date(), 1)}
          endAt={new Date(new Date())}
        />
        <LogEntry
          title="Took subway work"
          category={3}
          startAt={subHours(new Date(), 2)}
          endAt={subHours(new Date(), 1)}
        />
      </div>
    );
  }
}

export default App;
