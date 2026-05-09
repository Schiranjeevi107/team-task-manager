import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        fetchTasks();

    }, []);

    const fetchTasks = async () => {

        try {

            const res = await axios.get(
                'https://team-task-manager-production-f165.up.railway.app/api/auth/register',
            );

            setTasks(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="dashboard-container">

            <div className="dashboard-header">

                <h1>Team Task Manager</h1>

               

            </div>

            <div className="welcome-box">

                <h2>Welcome Back 👋</h2>

                <p>
                    Manage your projects and tasks efficiently.
                </p>

            </div>


            <h2 className="task-heading">
                Recent Tasks
            </h2>

            {
                tasks.map((task) => (

                    <div
                        key={task.id}
                        className="task-card"
                    >

                        <h3>{task.title}</h3>

                        <p>{task.description}</p>

                        <p>
                            <strong>Project:</strong> {task.project.name}
                        </p>

                    </div>

                ))
            }
<button
    className="logout-btn"
    onClick={() => {

        localStorage.removeItem('token');

        window.location.reload();

    }}
>
    Logout
</button>
        </div>
        

    );

}

export default Dashboard;