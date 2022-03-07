import { useState, useEffect} from "react";
import axios from "axios";

export const usePeopleFetch = (pageNumber) => {
  const [countries, setCountries] = useState([])
  const [genders, setGenders] = useState([])
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    axios({
      methos: 'get',
      url: `https://randomuser.me/api/`,
      params: {
        results: 25,
        page: pageNumber,
        nat: countries.join(','),
        gender: genders.join(',')
      }
    }).then(response => {
      setIsLoading(true);
      setUsers([...response.data.results]);
      setIsLoading(false);
      setHasMore(response.data.results.length > users.length);
    })

  }, [pageNumber, countries, genders]);

  return { users, setUsers, isLoading, hasMore, countries, setCountries, genders, setGenders };
};