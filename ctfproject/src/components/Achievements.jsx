import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/achievements'); // Replace with your API endpoint
                setAchievements(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Achievements</h1>
            <table>
                <thead>
                    <tr>
                        <th>CTF Name</th>
                        <th>Rank</th>
                        <th>Points</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {achievements.map((achievement) => (
                        <tr key={achievement._id}>
                            <td>{achievement.ctfname}</td>
                            <td>{achievement.rank}</td>
                            <td>{achievement.ctfpoints}</td>
                            <td>{achievement.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Achievements;