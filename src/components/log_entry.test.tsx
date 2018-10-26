import * as React from 'react';

import { format, subHours } from 'date-fns';
import { shallow } from 'enzyme';
import * as Faker from 'faker';

import LogEntry from 'components/log_entry';

describe('rendering', () => {
  const title = Faker.lorem.sentence();
  const startAt = subHours(new Date(), 2);
  const endAt = new Date();
  const wrapper = shallow(
    <LogEntry
        title={title}
        category={2}
        startAt={startAt}
        endAt={endAt}
      />
  );

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('renders the correct title', () => {
    expect(wrapper.find('.log-entry--title--value').first().text()).toBe(title)
  });

  it('renders the correct start time', () => {
    expect(wrapper.find('.log-entry--start-at--value').first().text()).toBe(format(startAt, 'hh:mm a'))
  });

  it('renders the correct start time', () => {
    expect(wrapper.find('.log-entry--end-at--value').first().text()).toBe(format(endAt, 'hh:mm a'))
  });

  it('renders the correct duration', () => {
    expect(wrapper.find('.log-entry--duration--value').first().text()).toBe('120 min');
  });
})