import classes from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./posts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main className={classes.mainContent}>
      <img src="#" alt="#" />
      <ProfileInfo />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
