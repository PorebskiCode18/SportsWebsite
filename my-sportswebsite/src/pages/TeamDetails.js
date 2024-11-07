import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [teamData, setTeamData] = useState(null);
    const [teamStandingsData, setTeamStandingsData] = useState(null)
    
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/teams/${teamId}/profile.json?api_key=kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl`);
                const data = await response.json();
                console.log(data);
                setTeamData(data);
                const response2 = await fetch(`https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/seasons/2024/REG/standings/season.json?api_key=kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl`);
                const data2 = await response2.json();
                const team = findTeamById(data2, teamId);
                console.log(team)
                setTeamStandingsData(team); 
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        };

        fetchTeamData();
        const fetchTeamStandings = async () => {
            try {
                const response2 = await fetch(`https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/seasons/2024/REG/standings/season.json?api_key=kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl`);
                const data2 = await response2.json();
                const team = findTeamById(data2, teamId);
                console.log(team)
                setTeamStandingsData(team); 
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        };
        fetchTeamStandings()
        console.log(teamStandingsData)
        const findTeamById = (data, id) => {
            for (const conference of data.conferences) {
              for (const division of conference.divisions) {
                const team = division.teams.find((t) => t.id === id);
                if (team) return team;
              }
            }
            return null;
          };
    }, [teamId]);


    if (!teamData) return <p>Loading...</p>;

    return (
        <div className='pt-20'>
            <div className='text-center bg-gray-100 border-2 p-4'>
                <h1 className='pt-2 font-bold text-2xl underline'>{teamData.market} {teamData.name}</h1>
                <p>Founded in {teamData.founded}</p>
                <p>Owner: {teamData.owner}</p>
                <p>General Manager: {teamData.general_manager}</p>
                <p>President: {teamData.president}</p>
                <p>Mascot: {teamData.mascot}</p>
                <p>Nicknames: {teamData.nicknames}</p>
                <p>Championships Won: {teamData.championships_won}</p>
                <p>Championship Seasons: {teamData.championship_seasons}</p>
                <p>Conference Titles: {teamData.conference_titles}</p>
                <p>Division Titles: {teamData.division_titles}</p>
                <p>Playoff Appearances: {teamData.playoff_appearances}</p>

                <h2 className='pt-4 font-bold text-xl underline'>Venue</h2>
                <p>{teamData.venue.name}, {teamData.venue.city}, {teamData.venue.state}</p>
                <p>Address: {teamData.venue.address}, {teamData.venue.zip}</p>
                <p>Capacity: {teamData.venue.capacity}</p>
                <p>Surface: {teamData.venue.surface}</p>
                <p>Roof Type: {teamData.venue.roof_type}</p>
                <p>Location: Lat {teamData.venue.location.lat}, Lng {teamData.venue.location.lng}</p>

                <h2 className='pt-4 font-bold text-xl underline'>Division and Conference</h2>
                <p>Division: {teamData.division.name} ({teamData.division.alias})</p>
                <p>Conference: {teamData.conference.name} ({teamData.conference.alias})</p>

                <h2 className='pt-4 font-bold text-xl underline'>Coaches</h2>
                {teamData.coaches.map((coach) => (
                    <p key={coach.id}>{coach.position}: {coach.full_name}</p>
                ))}

                <h2 className='pt-4 font-bold text-xl underline'>Team Colors</h2>
                {teamData.team_colors.map((color, index) => (
                    <div key={index}>
                        <p>Type: {color.type}</p>
                        <p>Hex Color: {color.hex_color}</p>
                        <p>RGB: {`rgb(${color.rgb_color.red}, ${color.rgb_color.green}, ${color.rgb_color.blue})`}</p>
                    </div>
                ))}
                <h2 className='pt-4 font-bold text-xl underline'>Record</h2>
                <p>{teamStandingsData.wins} - {teamStandingsData.losses} - {teamStandingsData.ties}</p>
                <p>Win pct: {teamStandingsData.win_pct}</p>
                <p>Streak: {teamStandingsData.streak.desc} </p>
                <p>Points For: {teamStandingsData.points_for}</p>
                <p>Points Against: {teamStandingsData.points_against}</p>
            </div>
            <div className='pt-7'></div>
        </div>
    );
};

export default TeamDetails;
