import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const Appdownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download<br />  2nd Wife App</p>
            <div className='app-down-platforms'>
                <img src={assets.play_store} alt='' />
                <img src={assets.app_store} alt='' />

            </div>

        </div>
    )
}

export default Appdownload
