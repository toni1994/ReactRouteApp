import React from 'react';
import style from '../App.scss';
import MultiSearch from './MultiSearch'

import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

const PropertyArchitect = () => (
    <div>
         <MultiSearch />
        <div className={style.grid}>
            <div className={style.moduleBodyContainerArchitect}>   
                <div className={style.moduleBodyContentArchitect}>
                    <div className={style.moduleBodyContentImage}> <img src="https://images.trvl-media.com/media/content/expus/graphics/launch/hotel1320x742.jpg" alt="ImageHotel"></img> </div>
                    <div className={style.moduleBodyContentHotelName}>
                        <div className={style.aboutHotel}> 
                         <div className={style.hotelsName}> Hotel Lav</div>
                         <div className={style.hotelsOwner}> Marko Matić</div> 
                        </div>
                        <div className={style.aboutHotelButton}> <FaEllipsisV /> 
                        </div> 
                    </div>  
                </div>
            </div>

            <div className={style.moduleBodyContainerArchitect}>   
                <div className={style.moduleBodyContentArchitect}>
                    <div className={style.moduleBodyContentImage}> <img src="https://taj.tajhotels.com/content/dam/gateway/hotels/Beach-Road,Calicut/images/welcome/Calicut_Welcome-for-Web_4x3-01.jpg" alt="ImageHotel"></img> </div>
                    <div className={style.moduleBodyContentHotelName}>
                        <div className={style.aboutHotel}> 
                         <div className={style.hotelsName}> Helius Resort</div>
                         <div className={style.hotelsOwner}> Abdul Al Rahim</div> 
                        </div>
                        <div className={style.aboutHotelButton}> <FaEllipsisV /> 
                        </div> 
                    </div>  
                </div>
            </div>
        </div>     
    </div>
)

  export default PropertyArchitect;