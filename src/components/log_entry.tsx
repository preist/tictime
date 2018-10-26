import * as React from 'react';

import { differenceInMinutes, format } from 'date-fns';

export interface ILogEntryProps {
  title: string;
  category: number;
  startAt: Date;
  endAt: Date;
}

export default class LogEntry extends React.Component<ILogEntryProps> {
  constructor(props: ILogEntryProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const {title, category, startAt, endAt} = this.props;

    return (
      <div className="log-entry">
        <span className="log-entry--title">{title}</span>
        <span className="log-entry--category">{category}</span>
        <span className="log-entry--start-at">{format(startAt, "hh:mm a")}</span>
        <span className="log-entry--end-at">{format(endAt, "hh:mm a")}</span>
        <span className="log-entry--duration">{differenceInMinutes(endAt, startAt)} minutes</span>
      </div>
    );
  }
}
