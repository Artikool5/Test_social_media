import classes from "./profile.module.css";
import MyPosts from "./posts/myPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={classes.mainContent}>
      <img src="#" alt="#" />
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        newPostText={props.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </main>
  );
};

export default Profile;
