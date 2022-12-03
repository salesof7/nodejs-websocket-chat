import { injectable } from "tsyringe";
import { IUser, User } from "../schemas/User";

@injectable()
class GetAllUsersService {
  async execute(): Promise<IUser[]> {
    const users = await User.find();
    return users;
  }
}

export { GetAllUsersService };
