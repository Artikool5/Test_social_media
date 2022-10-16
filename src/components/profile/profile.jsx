import classes from "./profile.module.css";
import MyPosts from "./posts/myPosts";

const Profile = () => {
  return (
    <main>
      <img src="#" alt="#" />
      <section className="user-about">
        <img src="#" alt="#" />
        <p>Name:</p>
        <p>Birthday:</p>
        <p>Education:</p>
        <p>Web Site:</p>
      </section>
      <MyPosts />
    </main>
  );
};

export default Profile;