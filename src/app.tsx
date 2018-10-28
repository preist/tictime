import * as React from 'react';

import {subMinutes} from 'date-fns';

import 'app.scss';
import LogEntry from 'components/log_entry';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Tictime</h1>
        </header>
        
        <div className="log-entries">
          <LogEntry
            title="Coffee in hand, wrote some code"
            category={1}
            startAt={subMinutes(new Date(), 30)}
            endAt={new Date(new Date())}
          />
          <LogEntry
            title="Took subway to work"
            category={3}
            startAt={subMinutes(new Date(), 125)}
            endAt={subMinutes(new Date(), 30)}
          />
        </div>
      </div>
    );
  }
}

export default App;
