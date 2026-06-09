const year = 2026;
const monthNames = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];
const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const termClasses = [
  { start: '2026-01-07', end: '2026-04-15', cls: 'winter' },
  { start: '2026-04-28', end: '2026-06-15', cls: 'spring' },
  { start: '2026-06-22', end: '2026-08-10', cls: 'summer' },
  { start: '2026-09-02', end: '2026-12-10', cls: 'fall' }
];

const specialDays = {
  '2026-01-01': { type: 'holiday' },
  '2026-01-05': { type: 'nso' },
  '2026-01-06': { type: 'nso' },
  '2026-01-07': { marker: 'S' },
  '2026-01-14': { marker: 'A' },
  '2026-01-19': { type: 'holiday' },
  '2026-02-16': { type: 'holiday' },
  '2026-02-11': { marker: 'W<sub>1</sub>' },
  '2026-02-17': { marker: 'M<sub>1</sub>' },
  '2026-02-25': { marker: 'T<sub>1</sub>' },
  '2026-02-26': { marker: 'T<sub>2</sub>' },
  '2026-03-05': { marker: 'A<sub>2</sub>' },
  '2026-03-20': { marker: 'N<sub>C</sub>' },
  '2026-04-01': { marker: 'W<sub>2</sub> W' },
  '2026-04-15': { marker: 'L' },
  '2026-04-16': { type: 'exam' },
  '2026-04-17': { type: 'exam' },
  '2026-04-18': { type: 'exam' },
  '2026-04-20': { type: 'final' },
  '2026-04-21': { type: 'final' },
  '2026-04-22': { type: 'final', marker: 'C<sub>M</sub> C<sub>V</sub>' },
  '2026-04-23': { type: 'final', marker: 'C<sub>V</sub>' },
  '2026-04-27': { type: 'nso' },
  '2026-04-28': { type: 'education', marker: 'G<sub>S</sub>' },
  '2026-04-30': { type: 'education', marker: 'G<sub>O</sub>' },

  '2026-05-05': { marker: 'A' },
  '2026-05-25': { type: 'holiday' },

  '2026-06-02': { marker: 'W<sub>1</sub>' },
  '2026-06-15': { marker: 'LW' },
  '2026-06-16': { type: 'exam' },
  '2026-06-17': { type: 'exam' },
  '2026-06-18': { type: 'exam' },
  '2026-06-19': { type: 'holiday' },
  '2026-06-20': { type: 'nso' },
  '2026-06-22': { marker: 'S' },
  '2026-06-25': { marker: 'G<sub>S</sub>' },
  '2026-06-29': { marker: 'AG<sub>O</sub>' },
  '2026-07-03': { type: 'holiday' },
'2026-07-24': { type: 'holiday' },
'2026-07-28': { marker: 'W<sub>2</sub>' },

'2026-08-10': { marker: 'L' },
'2026-08-11': { type: 'exam' },
'2026-08-12': { type: 'exam' },
'2026-08-13': { type: 'exam' },
'2026-08-14': { type: 'exam' },
'2026-08-17': { type: 'final' },
'2026-08-18': { type: 'final' },
'2026-08-19': { type: 'final', marker: 'G<sub>S</sub>' },
'2026-08-20': { type: 'final' },
'2026-08-21': { type: 'final', marker: 'G<sub>O</sub>' },
'2026-08-24': { type: 'conference' },
'2026-08-25': { type: 'conference' },
'2026-08-26': { type: 'conference' },
'2026-08-27': { type: 'conference' },
'2026-08-28': { type: 'nso' },
'2026-08-29': { type: 'nso' },
'2026-08-31': { type: 'nso' },

'2026-09-02': { marker: 'S' },
'2026-09-07': { type: 'holiday' },
'2026-09-10': { marker: 'A' },

'2026-10-07': { marker: 'W<sub>1</sub>' },
'2026-10-20': { marker: 'T<sub>1</sub>' },
'2026-10-21': { marker: 'T<sub>2</sub>' },
'2026-10-28': { marker: 'A<sub>2</sub>' },

'2026-11-24': { marker: 'W<sub>2</sub> W' },
'2026-11-25': { marker: 'N<sub>C</sub>' },
'2026-11-26': { type: 'holiday' },
'2026-11-27': { type: 'holiday' },

'2026-12-10': { marker: 'L' },
'2026-12-11': { type: 'exam' },
'2026-12-12': { type: 'exam' },
'2026-12-14': { type: 'final' },
'2026-12-15': { type: 'final' },
'2026-12-16': { type: 'final' },
'2026-12-17': { type: 'final' },
'2026-12-23': { marker: 'G<sub>S</sub>' },
'2026-12-24': { type: 'holiday' },
'2026-12-25': { type: 'holiday' },
'2026-12-30': { marker: 'G<sub>O</sub>' },
'2026-12-31': { type: 'holiday' }
};

function dateKey(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function inRange(key, start, end) {
  return key >= start && key <= end;
}

function termClassFor(key) {
  const term = termClasses.find(item => inRange(key, item.start, item.end));
  return term ? term.cls : '';
}

function makeMonth(monthIndex) {
  const month = document.createElement('article');
  month.className = 'month';

  const title = document.createElement('div');
  title.className = 'month-title';
  title.textContent = monthNames[monthIndex];
  month.appendChild(title);

  const weekHead = document.createElement('div');
  weekHead.className = 'weekdays';

  weekdays.forEach(day => {
    const span = document.createElement('span');
    span.textContent = day;
    weekHead.appendChild(span);
  });

  month.appendChild(weekHead);

  const days = document.createElement('div');
  days.className = 'days';

  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'day empty';
    days.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const key = dateKey(year, monthIndex, d);
    const info = specialDays[key] || {};
    const cell = document.createElement('div');
    const classes = ['day'];
    const term = termClassFor(key);

    if (term) classes.push(term);
    if (info.type) classes.push(info.type);

    cell.className = classes.join(' ');

    if (info.marker) {
        const marker = document.createElement('span');
        marker.className = 'marker marker-only';
        marker.innerHTML = info.marker;
        cell.appendChild(marker);
    } else {
        const number = document.createElement('span');
        number.textContent = d;
        cell.appendChild(number);
    }

    days.appendChild(cell);
  }

  month.appendChild(days);
  return month;
}

const calendarGrid = document.getElementById('calendarGrid');

for (let month = 0; month < 12; month++) {
  calendarGrid.appendChild(makeMonth(month));
}