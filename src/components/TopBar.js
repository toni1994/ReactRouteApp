import React from 'react';
import style from '../styles/TopBar.scss';

import Bell from 'react-icons/lib/fa/bell'
import Folder from 'react-icons/lib/fa/folder'
import FaCaretDown from 'react-icons/lib/fa/caret-down'

const TopBar = () => (
    <div className={style.container}>
          <div className={style.wrapper}> 
            <div className={style.modulName}> Area prototyper</div>
            <div className={style.icon}> <Bell /> </div>
            <div className={style.icon}> <Folder /></div>
            <div className={style.profile}> <div className={style.imageProfile}> <img src="http://api.helius.proficodev.com/public/uploads/user/56a0e753aaf71500641642742/56a0e753aaf71500641642742.png" alt="profileImage" > 
            </img> </div> <div className={style.profilName}> Helius Profico </div> <FaCaretDown/> </div>
          </div>
    </div>
)

  export default TopBar;

