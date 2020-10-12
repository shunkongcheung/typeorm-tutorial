import { UserEntity } from "../entities";

interface User {
  username: string;
  emailVerified: boolean;
  emailVerifiedAt?: Date;
}

const insertUsers = async (users: Array<User>): Promise<Array<UserEntity>> => {
  return [];
};

export default insertUsers;
