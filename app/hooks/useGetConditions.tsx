import { useEffect, useState } from 'react';
import { getCondition } from '../Utilities/utils';
interface TempData {
  id: number;
  hivenumber: number;
  time_stamp: string;
  humidity_with_unit: string;
  temperature_with_unit: string;
}
const useGetConditions = () => {
  const [temp, setTemp] = useState<TempData[]>([]);
  useEffect(() => {
    (async () => {
      const tempData = await getCondition();
      console.log({temps:tempData})
      setTemp(tempData);
    })();
  }, []);
  return { temp };
};
export default useGetConditions;