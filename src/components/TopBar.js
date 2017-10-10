import React from 'react';
import style from '../App.scss';

import Bell from 'react-icons/lib/fa/bell'
import Folder from 'react-icons/lib/fa/folder'
import FaCaretDown from 'react-icons/lib/fa/caret-down'

const TopBar = () => (
    <div className={style.topBar}>
          <div className={style.topBarWrapper}> 
            <div className={style.modulName}> Area prototyper</div>
            <div className={style.topBarIcon}> <Bell /> </div>
            <div className={style.topBarIcon}> <Folder /></div>
            <div className={style.topBarProfile}> <div className={style.imageProfile}> <img src="http://api.helius.proficodev.com/public/uploads/user/56a0e753aaf71500641642742/56a0e753aaf71500641642742.png" alt="profileImage" > 
            </img> </div> <div className={style.profilName}> Helius Profico </div> <FaCaretDown/> </div>
          </div>
    </div>
)

  export default TopBar;

