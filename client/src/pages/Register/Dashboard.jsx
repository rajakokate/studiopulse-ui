import { useSelector } from "react-redux";


const Dashboard = () => {

  const user = useSelector(state => state.auth.user)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return <div>This is dashboard
    <div>
      {isAuthenticated && <p>Welcome, {user?.name}</p>}
    </div>

  </div>;
};
export default Dashboard;
