import React from 'react'
import s from './Profile.module.css'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 25843;
    }
    // this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        // this.props.toggleIsFetching(false)
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props} profile={this.props.profile}/>  {/* передаём все пропсы в "раскукоженном" виде*/}
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));