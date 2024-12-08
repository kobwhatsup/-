import { format, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function formatDate(date: string | Date) {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'yyyy年MM月dd日', { locale: zhCN });
}