import { UserEntity } from "../entities";

/*
 * Lesson:
 * learn about how to retrieve data with Entity that inherit from BaseEntity
 */

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
