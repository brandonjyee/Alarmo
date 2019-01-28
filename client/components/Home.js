import React, { useState } from 'react';

import CreateAlarm from './CreateAlarm'
import AlarmList from './AlarmList'

export default function Home() {
  return (
    <div>
      <CreateAlarm />
      {/* AlarmList (w/ newest alarms first) */}
      <AlarmList />
      {/* Can upvote alarms */}
    </div>
  );
}

