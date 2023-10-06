// useGetUsers.ts
import { useEffect, useState } from 'react';
import { getUser } from '../Utilities/utils';

type User = {
  id: string;
  username: string;
  email: string;
  num_hives: number; 
  staff: boolean;
};

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    (async () => {
      const tempData = await getUser();
      setUsers(tempData);
      setLoading(false); 
    })()
  
  }, []);

  return { users, loading }; 
};

export default useGetUsers;
