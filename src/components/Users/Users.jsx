import React from 'react';
import s from './Users.module.css'
import Button from "@mui/material/Button";
import userPhoto from '../../assets/images/defaultUserAvatar.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  let curPage = props.currentPage;
  let curPageF = ((curPage - 5) < 0) ? 0 : curPage - 5;
  let curPL = curPage + 5;
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i)
  }
  let slicedPages = pages.slice(curPageF, curPL);
  return (
    <div className={s.users_content}>
      <div className={s.pages}>
        {slicedPages.map(page => {
          return <span onClick={(e) => {
            props.onPageChanged(page)
          }} className={props.currentPage === page && s.selectedPage}>{page}</span>
        })}
      </div>
      <div className={s.select}>

      </div>
      <div className={s.userCards_container}>
        {
          props.users.map(user =>
            <div key={user.id} className={s.userCard}>
              <div className={s.card_content}>
                <div className={s.card_content_block1}>
                  <div className={s.photo_avatar}>
                    <NavLink to={'/profile/' + user.id}>
                      <img src={user.photos.small ?? userPhoto} alt=""/>
                    </NavLink>
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
                    <NavLink to={'/profile/' + user.id} style={{textDecoration: 'none', color: 'black'}}>
                      <div className={s.userFullName}>{user.name}</div>
                    </NavLink>
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
};

export default Users;
