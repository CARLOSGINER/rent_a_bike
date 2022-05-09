import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavBar';

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