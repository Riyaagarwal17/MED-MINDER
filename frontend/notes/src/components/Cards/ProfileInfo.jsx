import React from 'react'
import { getInitals } from '../../utils/helper'

const ProfileInfo = ({userInfo, onLogout}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font font-medium bg-slate-100'>
            {getInitals(userInfo?.fullName)}
        </div>
        <div>
            <p className='text-sm font font-medium'>{userInfo?.fullName}</p>
            <button className='text-sm text-slate-700 underline' onClick={onLogout}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo