import React from 'react'
import s from './ProfileInfo.module.css'
import userPhoto2 from "../../../assets/images/happyAvatar.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={s.profileInfo}>
      <div>
        <img src='https://thumbs.dreamstime.com/b/lovatnet-lake-beautiful-nature-norway-natural-landscape-78504185.jpg'
             alt='hero-img'/>
      </div>
      <div className={s.profileBlock}>
        <div className={s.profileMain}>
          <div>
            <img className={s.avatar} src={props.profile.photos.large ?? userPhoto2} alt="avatar"/>
          </div>
          <div className={s.descriptionBlock}>
            <div className={s.fullName}>
              <h2>{props.profile.fullName}</h2>
            </div>
            <div className={s.aboutMe}>
              {props.profile.aboutMe}
            </div>
            <div className={s.job}>
              <span>{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</span>
              <span>{props.profile.lookingForAJobDescription}</span>
            </div>
          </div>
        </div>
        <div className={s.contacts}>
          <span style={{fontWeight: 'bold'}}>My contacts: </span>
          <span>{props.profile.contacts.mainLink}</span>
          <span>{props.profile.contacts.website}</span>
          <span>{props.profile.contacts.youtube}</span>
          <span>{props.profile.contacts.github}</span>
          <span>{props.profile.contacts.facebook}</span>
          <span>{props.profile.contacts.twitter}</span>
          <span>{props.profile.contacts.vk}</span>
        </div>

      </div>
    </div>
  )
}

export default ProfileInfo