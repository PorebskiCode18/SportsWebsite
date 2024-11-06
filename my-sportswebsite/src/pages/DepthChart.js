import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DepthChart = () => {
  const { week, homeTeam, awayTeam } = useParams();  // Assuming you have the teams and week in the URL params
  const [depthChartData, setDepthChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepthCharts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/seasons/2024/REG/${week}/depth_charts.json?api_key=kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl`
        );
        const data = await response.json();
        setDepthChartData(data);
      } catch (error) {
        console.error('Error fetching depth charts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepthCharts();
  }, [week]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!depthChartData) {
    return <div>No depth chart data available.</div>;
  }

  const homeTeamDepthChart = depthChartData[homeTeam];
  const awayTeamDepthChart = depthChartData[awayTeam];

  // Helper function to display the depth chart by position for a team
  const renderDepthChart = (teamDepthChart) => {
    return Object.keys(teamDepthChart).map((position) => {
      const positionData = teamDepthChart[position];

      // If there are no players listed for the position, skip it
      if (!positionData || !Array.isArray(positionData.players)) return null;

      return (
        <div key={position} className="mb-4 pt-15">
          <h2 className="font-bold text-lg text-center">{position}</h2>
          <div className="flex justify-between">
            {positionData.players.map((player, index) => (
              <div key={index} className="flex flex-col items-center">
                <p>{player.name}</p>
                <p>{player.number}</p>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex justify-around pt-15">
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold text-center mb-4">{homeTeam} Depth Chart</h1>
        {homeTeamDepthChart && renderDepthChart(homeTeamDepthChart)}
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold text-center mb-4">{awayTeam} Depth Chart</h1>
        {awayTeamDepthChart && renderDepthChart(awayTeamDepthChart)}
      </div>
    </div>
  );
};

export default DepthChart;