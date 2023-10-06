export const createPost = async ( postData: any): Promise<any> => {
  const url = '/api/create-posts';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  } catch (error:any) {
    throw new Error(`Network error: ${error.message}`);
  }
};

// login intergration
interface LoginData {
  email: string;
  password: string;
}
export const loginUser = async (loginData: LoginData) => {
  const url = '/api/create-login';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};
  
 // conditions intergrations
 export const getCondition = async () => {
  const url = '/api/get-conditions';
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error:any) {
    return error.message;
  }
};

// user list
export const getUser = async () => {
    const url = '/api/get-users';
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error:any) {
      return error.message;
    }
  };

  // Devicelist intergration

  export const getDeviceList = async () => {
    const url = '/api/get-device';
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error:any) {
      return error.message;
    }
  };







  
  
