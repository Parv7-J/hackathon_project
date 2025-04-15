// import { auth, currentUser } from "@clerk/nextjs/server";

// async function ProfileInfo() {
//   const { userId } = await auth();
//   if (!userId) return <div>Login mate</div>;
//   const user = await currentUser();
//   console.log(user);
//   return <div>Hello</div>;
// }

// export default ProfileInfo;

import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => <UserProfile />;

export default UserProfilePage;
