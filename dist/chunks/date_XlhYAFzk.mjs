import { parseISO, format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

function formatDate(date) {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return format(parsedDate, "yyyy年MM月dd日", { locale: zhCN });
}

export { formatDate as f };
