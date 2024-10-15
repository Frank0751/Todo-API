import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({dest:'uploads/' }); //creates a storage engine. Don't really use it but to test that your upload is working

export const todoIconUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/todo-api/todos/*'
    }),
    preservePath: true
})

//create a new one for different files
    export const userAvatarUpload = multer({
        storage: multerSaveFilesOrg({
            apiAccessToken: process.env.SAVEFILESORG_API_KEY,
            relativePath: '/todo-api/users/*'
        }),
        preservePath: true
})
