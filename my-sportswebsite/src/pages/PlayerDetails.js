import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlayerProfile() {
  const { playerId, year } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(
          `https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/players/${playerId}/profile.json?api_key=kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl`
        );
        const data = await response.json();

        setPlayer(data);

        // Filter to find the specified year's regular season statistics
        const selectedSeason = data.seasons.find(
          (season) => season.year === parseInt(year) && season.type === 'REG'
        );

        if (selectedSeason && selectedSeason.teams.length > 0) {
          setPlayerStats(selectedSeason.teams[0].statistics);
        } else {
          setPlayerStats(null); // No regular season data found for that year
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to load player data.");
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [playerId, year]);

  if (loading) {
    return <div>Loading player data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='pt-20 '>
      <div className='text-center bg-gray-100 border-2 p-2'>
        <h1 className='font-bold text-[20px]'>{player.name}</h1>
        <p><strong>Position:</strong> {player.position}</p>
        <p><strong>Team:</strong> {player.team.market} {player.team.name}</p>
        <p><strong>Jersey Number:</strong> {player.jersey}</p>
        <p><strong>Experience:</strong> {player.experience} years</p>
        <p><strong>College:</strong> {player.college}</p>
        <p><strong>College Conference:</strong> {player.college_conf}</p>
        <p><strong>Birth Date:</strong> {player.birth_date}</p>
        <p><strong>Birth Place:</strong> {player.birth_place}</p>
        <p><strong>Height:</strong> {player.height} inches</p>
        <p><strong>Weight:</strong> {player.weight} lbs</p>
        <p><strong>High School:</strong> {player.high_school}</p>
        <p><strong>Rookie Year:</strong> {player.rookie_year}</p>
        <p><strong>Status:</strong> {player.status}</p>
        <p><strong>Drafted by:</strong> {player.draft.team.name} in {player.draft.year}, Round {player.draft.round}, Pick {player.draft.number}</p>
      </div>
      <div className='pt-5'>

      </div>
      <div>
        <div className='bg-gray-100 p-4 text-center pt-3 pb-3'>
        <h2 className='text-center font-bold text-[18px]'>Stats for {year || "Current Season"}</h2>
            <p><strong>Games Played:</strong> {playerStats?.games_played}</p>

            {playerStats?.passing && (
                <>
                    <p className='pt-2 font-bold text-[25px] underline'>Passing</p>
                    <p><strong>Attempts:</strong> {playerStats?.passing?.attempts}</p>
                    <p><strong>Completions:</strong> {playerStats?.passing?.completions}</p>
                    <p><strong>Completion:</strong> {playerStats?.passing?.cmp_pct}%</p>
                    <p><strong>Yards:</strong> {playerStats?.passing?.yards}</p>
                    <p><strong>Average Yards:</strong> {playerStats?.passing?.avg_yards}</p>
                    <p><strong>Touchdowns:</strong> {playerStats?.passing?.touchdowns}</p>
                    <p><strong>Interceptions:</strong> {playerStats?.passing?.interceptions}</p>
                    <p><strong>Rating:</strong> {playerStats?.passing?.rating}</p>
                    <p><strong>Sacks:</strong> {playerStats?.passing?.sacks}</p>
                    <p><strong>Longest:</strong> {playerStats?.passing?.longest}</p>
                    <p><strong>Longest TD:</strong> {playerStats?.passing?.longest_touchdown}</p>
                </>
            )}
            {playerStats?.receiving && (
                <>
                    <p className='pt-2 font-bold text-[25px] underline'>Recieving</p>
                    <p><strong>Receptions:</strong> {playerStats.receiving.receptions}</p>
                    <p><strong>Targets:</strong> {playerStats.receiving.targets}</p>
                    <p><strong>Yards:</strong> {playerStats.receiving.yards}</p>
                    <p><strong>Average Yards per Reception:</strong> {playerStats.receiving.avg_yards}</p>
                    <p><strong>Longest Reception:</strong> {playerStats.receiving.longest}</p>
                    <p><strong>Touchdowns:</strong> {playerStats.receiving.touchdowns}</p>
                    <p><strong>Longest Touchdown:</strong> {playerStats.receiving.longest_touchdown}</p>
                </>
            )}
            {playerStats?.rushing && (
                <>
                    <p className='pt-2 font-bold text-[25px] underline'>Rushing</p>
                    <p><strong>Attempts:</strong> {playerStats.rushing.attempts}</p>
                    <p><strong>Yards:</strong> {playerStats.rushing.yards}</p>
                    <p><strong>Average Yards per Attempt:</strong> {playerStats.rushing.avg_yards}</p>
                    <p><strong>Longest Rush:</strong> {playerStats.rushing.longest}</p>
                    <p><strong>Touchdowns:</strong> {playerStats.rushing.touchdowns}</p>
                    <p><strong>Longest Touchdown Run:</strong> {playerStats.rushing.longest_touchdown}</p>
                </>
            )}
            {playerStats?.fumbles && (
                <>
                    <p className='pt-2 font-bold text-[25px] underline'>Fumbles</p>
                    <p><strong>Total Fumbles:</strong> {playerStats.fumbles.fumbles}</p>
                    <p><strong>Lost Fumbles:</strong> {playerStats.fumbles.lost_fumbles}</p>
                </>
            )}
            {playerStats?.defense && (
  <>
                <p className='pt-2 font-bold text-[25px] underline'>Defense</p>
                <p><strong>Tackles:</strong> {playerStats.defense.tackles}</p>
                <p><strong>Assists:</strong> {playerStats.defense.assists}</p>
                <p><strong>Combined Tackles:</strong> {playerStats.defense.combined}</p>
                <p><strong>Sacks:</strong> {playerStats.defense.sacks}</p>
                <p><strong>Sack Yards:</strong> {playerStats.defense.sack_yards}</p>
                <p><strong>Interceptions:</strong> {playerStats.defense.interceptions}</p>
                <p><strong>Passes Defended:</strong> {playerStats.defense.passes_defended}</p>
                <p><strong>Forced Fumbles:</strong> {playerStats.defense.forced_fumbles}</p>
                <p><strong>Fumble Recoveries:</strong> {playerStats.defense.fumble_recoveries}</p>
                <p><strong>QB Hits:</strong> {playerStats.defense.qb_hits}</p>
                <p><strong>Safties:</strong> {playerStats.safties}</p>
                {playerStats?.int_returns && (
                    <>
                        <p><strong>Returns:</strong> {playerStats.int_returns.returns}</p>
                        <p><strong>Yards:</strong> {playerStats.int_returns.yards}</p>
                        <p><strong>Avg Yards:</strong> {playerStats.int_returns.avg_yards}</p>
                        <p><strong>Touchdowns:</strong> {playerStats.int_returns.touchdowns}</p>
                        <p><strong>Longest Return:</strong> {playerStats.int_returns.longest}</p>
                        <p><strong>Longest Touchdown:</strong> {playerStats.int_returns.longest_touchdown}</p>
                    </>
                )}
            </>
            )}
          {/* Add more stats as required */}
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
