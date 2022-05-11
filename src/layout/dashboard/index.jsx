import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/NavBar';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="pageContainer">
      <NavigationBar />
      <main className="mainSection">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;