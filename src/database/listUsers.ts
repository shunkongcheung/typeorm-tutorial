import { UserEntity } from "../entities";

type OrderBy = "id" | "username" | "emailVerified" | "emailVerifiedAt";

interface ListUsersProps {
  orderBy: OrderBy;
  asc: boolean;
  page: number;
  pageSize: number;
}

const listUsers = async (
  props?: ListUsersProps
): Promise<Array<UserEntity>> => {
  return [];
};

export default listUsers;
