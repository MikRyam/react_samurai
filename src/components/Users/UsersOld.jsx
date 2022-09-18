import React from 'react';
import s from './Users.module.css'
import Button from "@mui/material/Button";
import axios from "axios";
import userPhoto from '../../assets/images/defaultUserAvatar.png'

const UsersOld = (props) => {

  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

return (
  <div className={s.users_content}>
    <div className={s.userCards_container}>
      {
        props.users.map(user =>
          <div key={user.id} className={s.userCard}>
            <div className={s.card_content}>
              <div className={s.card_content_block1}>
                <div className={s.photo_avatar}>
                  <img src={user.photos.small ?? userPhoto} alt=""/>
                </div>
                <div className={s.userCard_action}>
                  {user.followed
                    ?
                    <Button onClick={() => {
                      props.unfollow(user.id)
                    }} variant="outlined" size="small">
                      Unfollow
                    </Button>
                    :
                    <Button onClick={() => {
                      props.follow(user.id)
                    }} variant="outlined" size="small">
                      Follow
                    </Button>
                  }
                  {/*<button>Follow</button>*/}
                </div>

              </div>
              <div className={s.card_content_block2}>
                <div className={s.userInfo}>
                  <div className={s.userFullName}>{user.name}</div>
                  <div className={s.userStatus}>{user.status}</div>
                </div>

                <div className={s.location}>
                  <div className="city">{'user.location.city'}</div>
                  <div className="country">{'user.location.country'}</div>
                </div>
              </div>
            </div>

          </div>)
      }
    </div>
  </div>
);
}
;

export default UsersOld;