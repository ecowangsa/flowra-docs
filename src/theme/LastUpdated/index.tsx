import React from 'react';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';

type LastUpdatedProps = {
  lastUpdatedAt?: number | null;
  lastUpdatedBy?: string | null;
};

export default function LastUpdated({lastUpdatedAt}: LastUpdatedProps): JSX.Element | null {
  if (!lastUpdatedAt) {
    return null;
  }

  const atDate = new Date(lastUpdatedAt);
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formattedLastUpdatedAt = dateTimeFormat.format(atDate);

  return (
    <span className={ThemeClassNames.common.lastUpdated}>
      Last updated on{' '}
      <b>
        <time dateTime={atDate.toISOString()} itemProp="dateModified">
          {formattedLastUpdatedAt}
        </time>
      </b>{' '}
      by Flowra team
    </span>
  );
}
