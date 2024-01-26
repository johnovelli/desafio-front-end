import { differenceInDays, parse } from 'date-fns';

export function newsDate(news: string) {
  const atualDate = new Date();
  const publiDate = parse(news, 'dd/MM/yyyy HH:mm:ss', new Date());
  const daysAgo = differenceInDays(atualDate, publiDate);
  return daysAgo;
}
