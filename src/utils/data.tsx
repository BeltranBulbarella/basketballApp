import {useState, useEffect} from 'react';
import axios from 'axios';

export const useMatches = () => {
  const [matchResult, setMatchResults] = useState([]);

  const fetchMatches = async () => {
    await axios
      .get('http://localhost:8080/match')
      .then((res) => {
        setMatchResults(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchMatches();
  }, []);

  return matchResult;
};
