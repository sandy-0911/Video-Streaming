import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {// req ke andar file ka path milega, file ke andar file ka naam milega
    cb(null, "./public/temp") // ye public folder gitkeep mai hai
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //achi practice nahi hai ye, kya pata user same naam ke 10 files upload karde , but bohot thode samay ke liye hi local storage pe saved hoti hai files so it doesn't matter much
  }
})

export const upload = multer({
    storage,
})