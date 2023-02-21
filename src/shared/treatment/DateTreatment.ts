import { addDays, format } from 'date-fns';

const dateTreatment = (date: Date): string => {
  return  format(addDays(date, 1), 'yyyy-MM-dd');
};

export default dateTreatment;
