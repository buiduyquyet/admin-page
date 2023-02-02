import { Button, Space } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => (
    <>
        <Space>
            <Button><Link to='/dashboard/subcription'>Subcription</Link></Button>
            <Button><Link to='/dashboard/revenue'>Revenue</Link></Button>
        </Space>
        <Outlet />
    </>
)
export default Dashboard;