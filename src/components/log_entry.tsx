import * as React from 'react';

import { differenceInMinutes, format } from 'date-fns';

import { CATEGORIES } from 'components/category';
import 'components/log_entry.scss';

export interface ILogEntryProps {
  title: string;
  category: number;
  startAt: Date;
  endAt: Date;
}

export default class LogEntry extends React.Component<ILogEntryProps> {
  public render(): JSX.Element {
    const {title, startAt, endAt} = this.props;

    return (
      <div className="log-entry">
        <div className="log-entry--title">
          <h3 className="log-entry--title--value">{title}</h3>
        </div>
        <div className="log-entry--category">
          {this.renderCategory()}
        </div>
        <div className="log-entry--time">
          <div className="log-entry--time--range">
            <span className="log-entry--start-at--value">{this.renderTime(startAt)}</span> –&nbsp;
            <span className="log-entry--end-at--value">{this.renderTime(endAt)}</span>
          </div>
          <div className="log-entry--time--duration">
            {this.renderDuration()}
          </div>
        </div>
      </div>
    );
  }

  private renderDuration(): JSX.Element {
    const {startAt, endAt} = this.props;

    return (
      <span className="log-entry--duration">{differenceInMinutes(endAt, startAt)} min</span>
    )
  }

  private renderCategory(): JSX.Element {
    const logCategory = CATEGORIES[this.props.category];

    return (
      <span className="log-entry--category--value" color={logCategory.color}>{logCategory.title}</span>
    )
  }

  private renderTime(t: Date): JSX.Element {
    return (
      <time dateTime={format(t, "YYYY-MM-DD HH:mm")}>
        {format(t, "hh:mm a")}
      </time>
    )
  }
}
