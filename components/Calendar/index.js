import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import './styles.scss';

const Calendar = ({ events }) => (
  <FullCalendar
    defaultView='listWeek'
    plugins={[listPlugin, dayGridPlugin, timeGridPlugin, bootstrapPlugin]}
    themeSystem='bootstrap'
    header={{
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    }}
    bootstrapFontAwesome={{
      prev: 'fa-chevron-left',
      next: 'fa-chevron-right'
    }}
    eventLimit={true}
    events={events}
  />
);

export default Calendar;
