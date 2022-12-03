import { injectable } from "tsyringe";
import { IUser, User } from "../schemas/User";

@injectable()
class GetUserBySocketIdService {
  async execute(socketId: string): Promise<IUser> {
    const user = await User.findOne({
      socketId,
    });
    return user as IUser;
  }
}

export { GetUserBySocketIdService };
