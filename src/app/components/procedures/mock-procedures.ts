import { Procedure } from './procedure';

function formatDate(date: Date): string {
  const day: number = date.getDate();
  const formatDay: string = day < 10 ? `0${day}` : `${day}`;

  const month: number = date.getMonth() + 1;
  const formatMonth: string = month < 10 ? `0${month}` : `${month}`;

  const year: number = date.getFullYear();
  const formatYear: string = year < 10 ? `0${year}` : `${year}`;

  const hours: number = date.getHours();
  const formatHours: string = hours < 10 ? `0${hours}` : `${hours}`;

  const minutes: number = date.getMinutes();
  const formatMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formatDay}.${formatMonth}.${formatYear}, ${formatHours}:${formatMinutes}`;
}

export let procedures: Procedure[] = [];

for (let i = 1; i < 111; i++) {
    procedures.push(
      {
        title: `Test procedure ${i}`,
        id: `23rwq-32dd32-dwq23-ef${(10 * Math.random()).toFixed(2)}`,
        status: `Черновик`,
        author: `Roma`,
        lastChange: formatDate(new Date),
      }
    );
}
