import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">
          Roothub HRM
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <a href="/">
              <DashboardIcon className='icon'/>
              <span> Dashboard </span>
            </a>
          </li>
          <p className="title">LIST</p>
          <li>
            <a href="trainees">
              <PersonOutlineOutlinedIcon className='icon'/>
              <span> Trainees </span>
            </a>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Trainers </span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Alumni </span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> NYSC </span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Other Roles </span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Interns </span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsIcon className='icon'/>
            <span> Settings </span>
          </li>
          <p className="title"> USER </p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span> Profile </span>
          </li>
          <li>
            <ExitToAppIcon className='icon'/>
            <span> Logout </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar