import React from 'react'
import './appDownload.css'
import appStore from './app_store.png'
import playStore from './play_store.png'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br />NRS APP</p>
      <div className='app-download-platforms'>
      <img src={appStore} alt="" />
      <img src={playStore} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
