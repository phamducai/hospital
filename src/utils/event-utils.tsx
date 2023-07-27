import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'test1',
    start: todayStr,
    end: todayStr + 'T15:00:00'
  },
  {
    id: createEventId(),
    title: 'test2',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T15:00:00'
  },
  {
    id: createEventId(),
    title: 'test3',
    start: todayStr,
    end: todayStr + 'T16:00:00'
  },
  // {
  //   id: createEventId(),
  //   title: 'test1',
  //   start: todayStr,
  //   end: todayStr + 'T13:00:00'
  // },
  // {
  //   id: createEventId(),
  //   title: 'test2',
  //   start: todayStr + 'T12:00:00',
  //   end: todayStr + 'T15:00:00'
  // },
  // {
  //   id: createEventId(),
  //   title: 'test3',
  //   start: todayStr,
  //   end: todayStr + 'T16:00:00'
  // }
]

export function createEventId() {
  return String(eventGuid++)
}
