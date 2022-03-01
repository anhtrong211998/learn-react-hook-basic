import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
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
      fetchData();
    }
    catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [url]);
  return {
    datas, isLoading, isError
  }

}
export default useFetch;
