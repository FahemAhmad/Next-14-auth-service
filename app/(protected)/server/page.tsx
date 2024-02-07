import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();
  return <UserInfo label="💻 Server component" user={user} role={user?.role} />;
};

export default ServerPage;
