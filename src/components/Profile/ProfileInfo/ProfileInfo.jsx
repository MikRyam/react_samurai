import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div>
        <img src='https://thumbs.dreamstime.com/b/lovatnet-lake-beautiful-nature-norway-natural-landscape-78504185.jpg' alt='hero-img'/>
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <img className={s.avatar} src="https://images.freeimages.com/images/previews/714/happy-1432508.jpg" alt="avatar" />
          ava + description
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo