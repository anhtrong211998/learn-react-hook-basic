import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //// clean up hook
    //// first step cancel token
    const ourRequest = axios.CancelToken.source();

    async function fetchData(){
      try{
        //// second step
        let res = await axios.get(url, {
          cancelToken: ourRequest.token
        });

        let data = (res && res.data) ? res.data : [];

        if(data && data.length > 0){
          data.map(item => {
            item.Date = moment(item.Date).format('DD/MM/YYYY');
            return item;
          });

          data = data.reverse();
        }

        setDatas(data);
        setIsLoading(false);
        setIsError(false);
      }
      catch(err){
        if(axios.isCancel(err)){
          console.log('Request canceled', err.message);
        }else{
          setIsError(true);
          setIsLoading(true);
        }
      }
    }

    setTimeout(() => {
      fetchData();
    }, 3000);

    return () => {
      //// third step return message if cancel
      ourRequest.cancel('Operation cancled by the user.');
    }
  }, [url]);

  return {
    datas, isLoading, isError
  }
}

export default useFetch;
