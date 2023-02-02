import 'antd/dist/reset.css';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard';
import PostsManagement from '../postsManagement';
import Settings from '../settings';
import { Subcription } from '../dashboard/subcription';
import { Revenue } from '../dashboard/revenue';
import Home from '../home';
import NotFound from '../notFound';
const { Sider, Content } = Layout;
const Sidebar = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} style={{ minHeight: '100vh' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    items={[
                        {
                            key: '1',
                            label: (
                                <Link to='/dashboard'>Dashboard</Link>
                            ),
                        },
                        {
                            key: '2',
                            label: (
                                <Link to='/posts-management'>Posts Managerment</Link>
                            ),
                        },
                        {
                            key: '3',
                            label: (
                                <Link to='/settings'>Settings</Link>
                            ),
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/dashboard' element={<Dashboard />} >
                            <Route path='subcription' element={<Subcription />} />
                            <Route path='revenue' element={<Revenue />} />
                        </Route>
                        <Route path='/posts-management' element={<PostsManagement />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Sidebar;