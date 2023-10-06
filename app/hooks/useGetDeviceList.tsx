// useGetDeviceList.tsx
import { useEffect, useState } from 'react';
import { getDeviceList } from '../Utilities/utils';

type Device = {
  id: number;
  serial_number: string;
  date_of_installation: string;
  beehive: number;
};

const useGetDeviceList = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const tempData = await getDeviceList();
      setDevices(tempData);
      setLoading(false);
    })()

  }, []);

  return { devices, loading, error };
};

export default useGetDeviceList;
