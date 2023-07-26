export const getEmptyArrObjStatus = (data) => {
    let checkStatus = false;
  
    let isArray = Array.isArray(data);
  
    let isObject = !isArray ? data?.constructor === Object : false;
  
    if (isArray && !isObject) {
      checkStatus =
        data !== undefined && data !== null && data !== [] && data?.length > 0;
    }
  
    if (isObject && !isArray) {
      checkStatus =
        data !== undefined && data !== null && Object.keys(data).length > 0;
    }
  
    return checkStatus;
  };
  