import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DepthCharts = () => {
    const { homeTeamId, awayTeamId, currentWeek,currentYear } = useParams();
    const [homeDepthChartOff, setHomeDepthChartOff] = useState([]);
    const [homeDepthChartDef, setHomeDepthChartDef] = useState([]);
    const [awayDepthChartOff, setAwayDepthChartOff] = useState([]);
    const [awayDepthChartDef, setAwayDepthChartDef] = useState([]);
    const [homeTeamName,setHomeTeamName] = useState([])
    const [awayTeamName,setAwayTeamName] = useState([])
    const [year, setYear] = useState()

    const navigate = useNavigate();

    const handlePlayerClick = (playerId) => {
        // Navigate to the player's details page with the player ID
        navigate(`/player/${playerId}/${year}`);
    };
    useEffect(() => {
        const fetchDepthCharts = async () => {
            try {
                const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://api.sportradar.com/nfl/official/trial/v7/en/seasons/${currentYear}/REG/${currentWeek}/depth_charts.json?api_key=kE90jbXWDcpL4cOC4ii17FqzijjTGVpfpSDxq6sl`);
                const data = await response.json();

                const homeTeamChart = data.teams.find(team => team.id === homeTeamId);
                const awayTeamChart = data.teams.find(team => team.id === awayTeamId);

                console.log("Home Team Chart:", homeTeamChart);
                console.log("Away Team Chart:", awayTeamChart);
                setYear(data.season.year)
                setHomeTeamName(homeTeamChart.name)
                setAwayTeamName(awayTeamChart.name)
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
                
                <div className="flex flex-row space-x-8">
                <div className="flex flex-col items-center space-y-4 bg-gray-100 border-black border-2 p-3">
                <h1 className='font-bold text-[30px]'>{homeTeamName} - {awayTeamName}</h1>
                    <h2 className="text-xl font-bold">Offense</h2>
                    <div key="QB" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "QB")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "QB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "QB")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "QB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">QB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "QB")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "QB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="LWR" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "LWR")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "LWR")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "LWR")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "LWR")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LWR</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "LWR")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "LWR")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="WR" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "WR")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "WR")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "WR")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "WR")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">WR</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "WR")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "WR")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RWR" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "RWR")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "RWR")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "RWR")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "RWR")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RWR</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "RWR")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "RWR")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RB1" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RB1</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RB2" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[1]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[1]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[1]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[1]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RB2</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[1]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "RB")?.position?.players[1]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="FB" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "FB")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "FB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "FB")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "FB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">FB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "FB")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "FB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="TE1" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">TE1</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="TE2" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[1]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[1]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[1]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[1]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">TE2</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[1]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "TE")?.position?.players[1]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="LT" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "LT")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "LT")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "LT")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "LT")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LT</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "LT")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "LT")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="LG" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "LG")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "LG")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "LG")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "LG")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LG</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "LG")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "LG")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="C" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "C")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "C")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "C")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "C")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">C</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "C")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "C")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RT" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "RT")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "RT")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "RT")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "RT")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RT</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "RT")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "RT")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RG" className="flex justify-between items-center">
                        {(homeDepthChartOff.find(pos => pos.position?.name === "RG")?.position?.players[0]?.name || 
                        awayDepthChartOff.find(pos => pos.position?.name === "RG")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartOff.find(pos => pos.position?.name === "RG")?.position?.players[0]?.id)}>{homeDepthChartOff.find(pos => pos.position?.name === "RG")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RG</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartOff.find(pos => pos.position?.name === "RG")?.position?.players[0]?.id)}>{awayDepthChartOff.find(pos => pos.position?.name === "RG")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>
        
                </div>

                <div className='pt-5'></div>

                <div className="flex flex-col items-center space-y-4 bg-gray-100 border-black border-2 p-3 ">
                    <h1 className='font-bold text-[30px]'>{homeTeamName} - {awayTeamName}</h1>
                    <h2 className="text-xl font-bold">Defense</h2>
                    <div key="LDE" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "LDE")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "LDE")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "LDE")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "LDE")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LDE</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "LDE")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "LDE")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="LDT" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "LDT")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "LDT")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "LDT")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "LDT")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LDT</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "LDT")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "LDT")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="DT" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "DT")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "DT")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "DT")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "DT")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">DT</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "DT")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "DT")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="NT" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "NT")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "NT")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "NT")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "NT")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">NT</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "NT")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "NT")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RDT" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "RDT")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "RDT")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "RDT")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "RDT")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RDT</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "RDT")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "RDT")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="DE" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "DE")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "DE")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "DE")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "DE")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">DE</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "DE")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "DE")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RDE" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "RDE")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "RDE")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "RDE")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "RDE")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RDE</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "RDE")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "RDE")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="LOLB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "LOLB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "LOLB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "LOLB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "LOLB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LOLB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "LOLB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "LOLB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="LILB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "LILB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "LILB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "LILB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "LILB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LILB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "LILB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "LILB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="MLB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "MLB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "MLB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "MLB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "MLB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">MLB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "MLB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "MLB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="WLB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "WLB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "WLB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "WLB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "WLB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">WLB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "WLB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "WLB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RILB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "RILB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "RILB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "RILB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "RILB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RILB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "RILB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "RILB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="ROLB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "ROLB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "ROLB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "ROLB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "ROLB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">ROLB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "ROLB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "ROLB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="LCB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "LCB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "LCB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "LCB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "LCB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">LCB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "LCB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "LCB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="NB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "NB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "NB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "NB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "NB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">NB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "NB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "NB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="RCB" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "RCB")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "RCB")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "RCB")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "RCB")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">RCB</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "RCB")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "RCB")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="FS" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "FS")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "FS")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "FS")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "FS")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">FS</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "FS")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "FS")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                    <div key="SS" className="flex justify-between items-center">
                        {(homeDepthChartDef.find(pos => pos.position?.name === "SS")?.position?.players[0]?.name || 
                        awayDepthChartDef.find(pos => pos.position?.name === "SS")?.position?.players[0]?.name) ? (
                            <>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(homeDepthChartDef.find(pos => pos.position?.name === "SS")?.position?.players[0]?.id)}>{homeDepthChartDef.find(pos => pos.position?.name === "SS")?.position?.players[0]?.name || "N/A"}</span>
                                <span className="font-bold pl-5 pr-5">SS</span>
                                <span className="cursor-pointer text-blue-500" 
            onClick={() => handlePlayerClick(awayDepthChartDef.find(pos => pos.position?.name === "SS")?.position?.players[0]?.id)}>{awayDepthChartDef.find(pos => pos.position?.name === "SS")?.position?.players[0]?.name || "N/A"}</span>
                            </>
                        ) : null}
                    </div>

                </div>
                <div className='pt-10'>

                </div>

                </div>
            ) : (
                <p className='pt-10'>Loading depth charts...</p>
            )}
        </div>
    );
};

export default DepthCharts;
