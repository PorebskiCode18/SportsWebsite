import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DepthCharts = () => {
    const { homeTeamId, awayTeamId, currentWeek } = useParams();
    const [homeDepthChartOff, setHomeDepthChartOff] = useState([]);
    const [homeDepthChartDef, setHomeDepthChartDef] = useState([]);
    const [awayDepthChartOff, setAwayDepthChartOff] = useState([]);
    const [awayDepthChartDef, setAwayDepthChartDef] = useState([]);

    useEffect(() => {
        const fetchDepthCharts = async () => {
            try {
                const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/seasons/2024/REG/${currentWeek}/depth_charts.json?api_key=kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl`);
                const data = await response.json();

                const homeTeamChart = data.teams.find(team => team.id === homeTeamId);
                const awayTeamChart = data.teams.find(team => team.id === awayTeamId);

                console.log("Home Team Chart:", homeTeamChart);
                console.log("Away Team Chart:", awayTeamChart);

                setHomeDepthChartOff(homeTeamChart?.offense || []);
                setHomeDepthChartDef(homeTeamChart?.defense || []);
                setAwayDepthChartOff(awayTeamChart?.offense || []);
                setAwayDepthChartDef(awayTeamChart?.defense || []);
            } catch (error) {
                console.error("Error fetching depth charts:", error);
            }
        };

        fetchDepthCharts();
    }, [homeTeamId, awayTeamId, currentWeek]);

    return (
        <div className="flex justify-center items-center space-x-8 pt-40">
            {homeDepthChartOff.length > 0 && awayDepthChartOff.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {homeDepthChartOff.map((position, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <span>{position.position?.players && position.position.players[0]?.name ? position.position.players[0].name : "N/A"}</span>
                            <span className="font-bold">{position.position?.name || "N/A"}</span>
                            <span>{awayDepthChartOff[index]?.position?.players && awayDepthChartOff[index].position.players[0]?.name ? awayDepthChartOff[index].position.players[0].name : "N/A"}</span>
                        </div>
                    ))}
                    {homeDepthChartDef.map((position, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <span>{position.position?.players && position.position.players[0]?.name ? position.position.players[0].name : "N/A"}</span>
                            <span className="font-bold">{position.position?.name || "N/A"}</span>
                            <span>{awayDepthChartDef[index]?.position?.players && awayDepthChartDef[index].position.players[0]?.name ? awayDepthChartDef[index].position.players[0].name : "N/A"}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='pt-20'>Loading depth charts...</p>
            )}
        </div>
    );
};

export default DepthCharts;
