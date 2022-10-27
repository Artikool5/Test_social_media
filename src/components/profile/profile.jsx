import classes from "./profile.module.css";
import MyPosts from "./posts/myPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/redux-store";

const Profile = (props) => {
  console.log(`Posts props:`);
  console.log(props);
  return (
    <main className={classes.mainContent}>
      <img src="#" alt="#" />
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        newPostText={props.newPostText}
        dispatch={store.dispatch.bind(store)}
      />
    </main>
  );
};

export default Profile;
