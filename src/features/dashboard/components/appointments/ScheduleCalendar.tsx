import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import './calendar.css';
import { Box, Text } from '@chakra-ui/react';

export default function ScheduleCalendar() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const nextTomorrow = new Date(today);
  nextTomorrow.setDate(today.getDate() + 2);

  const events = [
    {
      title: 'Morning Meeting',
      start: new Date(today.setHours(9, 0, 0)), // Today at 9:00 AM
      end: new Date(today.setHours(10, 0, 0)), // Today at 10:00 AM
    },
    {
      title: 'Project Discussion',
      start: new Date(tomorrow.setHours(14, 0, 0)), // Tomorrow at 2:00 PM
      end: new Date(tomorrow.setHours(15, 0, 0)), // Tomorrow at 3:00 PM
    },
    {
      title: 'Team Catchup',
      start: new Date(nextTomorrow.setHours(11, 0, 0)), // Day after tomorrow at 11:00 AM
      end: new Date(nextTomorrow.setHours(12, 0, 0)), // Day after tomorrow at 12:00 PM
    },
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="timeGridWeek" // Starts with the day view, you can change to "timeGridWeek" for week view
      events={events}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      slotMinTime="07:00:00"
      slotMaxTime="18:00:00"
      allDaySlot={false}
      height="auto"
      dayMaxEventRows={2}
      dayHeaderContent={(args) => {
        const date = args.date.getDate();
        const day = args.date.toLocaleDateString('en-US', { weekday: 'long' }); // Get day as 'Sun', 'Mon', etc.
        return (
          <Box>
            <Text fontWeight={600}>{date}</Text>
            <Text color={'#9F9F9F'} fontSize={'.5rem'}>
              {day}
            </Text>
          </Box>
        );
      }}
    />
  );
}
