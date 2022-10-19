import classes from "./profile.module.css";
import MyPosts from "./posts/myPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main>
      <img src="#" alt="#" />
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </main>
  );
};

export default Profile;
