import React from 'react'
import "./widgets.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Widgets = () => {
  return (
    <div className='widget'>
        <div className="wid1">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>50</span>
            </div>
            <div className="info">
                <span> Interns </span>
                <span> Uyo Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Interns  <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid2">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>50</span>
            </div>
            <div className="info">
                <span> Trainees </span>
                <span> Uyo Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Trainees <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid3">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>10</span>
            </div>
            <div className="info">
                <span> Trainers </span>
                <span> Uyo Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Trainers <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid4">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>100</span>
            </div>
            <div className="info">
                <span> Alumni </span>
                <span> Uyo Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Alumni <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid5">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>20</span>
            </div>
            <div className="info">
                <span> NYSC</span>
                <span> Uyo Branch </span>
            </div>
            <div className="link">
                <a href="#" > View NYSC <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid6">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>10</span>
            </div>
            <div className="info">
                <span> Other Roles </span>
                <span> Uyo Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Other Roles <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
    </div>
  )
}

export default Widgets