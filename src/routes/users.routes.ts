import multer from "multer";
import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarControler } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../config/upload"
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarControler();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar",
    ensureAuthenticate,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle);


export { usersRoutes };

