import {useState, useEffect} from 'react';
import axios from 'axios';
import type {Match} from './types';

export const useMatches = () => {
  const [matchResult, setMatchResults] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchMatches = async () => {
    setLoading(true);
    await axios
      .get('http://localhost:8080/match')
      .then((res) => {
        setMatchResults(res.data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchMatches();
  }, []);

  return {refetch: fetchMatches, matchResult, loading};
};

export const useGetPlayersStandings = () => {
  const [players, setPlayers] = useState([]);

  const fetchPlayersStandings = async () => {
    await axios
      .get('http://localhost:8080/standings/players')
      .then((res) => {
        setPlayers(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchPlayersStandings();
  }, []);

  return players;
};

export const useGetStandings = () => {
  const [standings, setStandings] = useState([]);

  const fetchStandings = async () => {
    await axios
      .get('http://localhost:8080/standings/teams')
      .then((res) => {
        setStandings(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchStandings();
  }, []);

  return standings;
};
