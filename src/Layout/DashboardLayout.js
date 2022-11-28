import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Pages/Dashboard/DashboardNav/DashboardNav';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default DashboardLayout;