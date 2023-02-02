import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './component/dashboard';
import PostsManagement from './component/postsManagement';
import Settings from './component/settings';

function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
