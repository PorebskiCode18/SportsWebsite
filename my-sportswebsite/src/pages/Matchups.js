// src/components/Matchups.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Matchups = () => {
  const [matchups, setMatchups] = useState([]);
  const [byes, setByes] = useState([])
  const [loading, setLoading] = useState(true);
  const apiKey = 'kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl';
  const apiUrl = `https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/games/current_week/schedule.json?api_key=${apiKey}`;
  const [error, setError] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatchups = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch matchups');
        const data = await response.json();
        setMatchups(data.week.games);
        setByes(data.week.bye_week || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMatchups();
    const fetchCurrentWeek = async () => {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch matchups');
      const data = await response.json();
      setCurrentWeek(data.week.sequence)
    };

    fetchCurrentWeek();
  }, [apiUrl]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  

  const handleDepthChartsClick = (homeTeamId, awayTeamId) => {
    if (currentWeek) {
        navigate(`/depth-charts/${homeTeamId}/${awayTeamId}/${currentWeek}`);
    } else {
        console.warn("Current week not available yet.");
    }
  };
  return (
    <div className='bg-[#fff3bf]'>
      <div className="container mx-auto p-4 ">
        <h1 className="text-2xl font-bold mb-4 pt-20">NFL Matchups for Week {matchups.length > 0 ? matchups[0].game_number : ''}</h1>
        <div className="grid grid-cols-1 gap-4">
          {matchups.map((game) => (
            <div key={game.id} className="p-4 border bg-white border-gray-300 rounded shadow-md">
              <h2 className="text-xl font-semibold">
                {game.title
                  ? `${game.title}` 
                  : ' Regular'
                }</h2>
              <p>{game.home.name} vs {game.away.name}</p>
              <p>Scheduled: {new Date(game.scheduled).toLocaleString()}</p>
              <p>Status: {game.status}</p>
              <p>City: {game.venue.city} , {game.venue.state}</p>
              <p>Stadium: {game.venue.name}</p>
              <p>Attendance: {game.attendance}</p>

              <p>Broadcast: {game.broadcast.network}</p>
              <p className="mt-2">
                Final Score: 
                {game.scoring 
                  ? `${game.home.name}: ${game.scoring.home_points} - ${game.away.name}: ${game.scoring.away_points}` 
                  : ' Not Available'}
              </p>
              
              <button className='bg-green-300 rounded-md border-black p-2 border-2' onClick={() => handleDepthChartsClick(game.home.id, game.away.id)}>View Depth Charts</button>
            </div>
          ))}
          {byes.map((week) => (
            <div key={week.team.id} className="bg-white p-4 border border-gray-300 rounded shadow-md">
              <h3 className="text-xl font-semibold">Bye Week</h3>
              <p>{week.team.name} {week.team.alias}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matchups;
