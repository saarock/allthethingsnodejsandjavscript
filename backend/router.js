const express = require('express');
const router = express.Router();
// const User = require('./database/sechma');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const mongoose = require('mongoose');
const {UserModel, Profile, userChat } = require('./database/sechma');
const fs = require('fs')
// const fs = require('fs');
// const { base } = require('./database/sechma');
// const Grid = require('gridfs-stream');
// const { Client } = require('socket.io/dist/client');

console.log('Starting')
console.log(Profile)
router.post('/', async (req, res) => {
try {
   
    const allUsers = await UserModel.find({});
  const d =  res.send(allUsers);

} catch (error) {
    await res.send('err')
    console.log(error)
}
   
});






router.post('/singup', async (req, res) => {
    try {
   const {firstname, lastname,  email,   gender,   password,   repassword,favriouteProgrammingLanguage,  bio, } = await req.body;
//    const {profile_picture, cover_picture, uploadPic} = await req.file;
   const data =  new UserModel({
    firstname: firstname,
    lastname: lastname,
    email: email,
    gender: gender,
    password: password,
    repassword: repassword,
    favriouteProgrammingLanguage: favriouteProgrammingLanguage,
    // profile_picture: profile_picture,
    // cover_picture,

    // uploadPic: uploadPic,
    bio: bio,

   });
  

//    this is for jsonwebtoken static method of the mongoose;

   const json = await data.jwt();
res.send(json)

console.log("ended")

    } catch(error) {
        res.status(404)
        console.log(error)
    }

})






  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });
  
// const upload = multer({ dest: 'uploads/' })
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   });
//   const upload = multer({ storage, 
//     limits: { fileSize: 1024 * 1024 * 5 },
//     });

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
    }
  };
  
  router.post("/uploadImage", upload.single("profile_picture"), async(req, res) => {
    // handle uploaded file
    try {
        let  profile_picture = req.file;
        let { name, caste} = req.body
        let realUser = req.body
        // console.log(realUser)
        console.log('Uploadername', name)
        // console.log(realUser.realuser)
        // console.log(profile_picture)

      let verifyFast =  jwt.verify(realUser.realuser, process.env.SECRET_KEY)//it return the playload
   if(verifyFast){
console.log(verifyFast, "This is your veryfyy")
    let prof = await new Profile( {
      real_user: verifyFast._id,
      name: name,
      caste: caste,
      // Profile_photos: [req.file.originalname]
      Profile_photos: [req.file.originalname]
    });
   await  prof.save().then(() => {
    console.log("saved")
   }).catch((er) => {
console.log(er)
   })


    


   } else {
    console.log(false)
   } 

   
   let chechForTheImage = await UserModel.findById({_id: verifyFast._id})
   //  console.log(chechForTheImage, "This find by id")
   //  let allThePhotos = Profile.find()
    let alltheImageOfOnePerson = await Profile.find({real_user: verifyFast._id})
    console.log('Starting from here')
   //  console.log(alltheImageOfOnePerson)
    console.log(chechForTheImage._id)
  

    let allThedata = {
      image : {
        alltheImageOfOnePerson
      },
      author: {
        chechForTheImage
      }
    }

 await res.status(200).json({datas: allThedata})
 

   //  let allThedataTogether = {
   //   allPhoto: allThePhotos,
   //   user
   //  }


    
  
  
      // const pp = mongoose.model('Profile_photos', req.file);
      // pp.bulkSave()

    }
    catch(err) {
        console.log(err, 'This is your multer err')
    }
 
  });
  
  
  
  
  
  
  
  







// router.post('/uploadprofile', upload.single('profile_picture'), (req,res) => {

//     try {
//    console.log(req.file)
        
//         console.log('Imgae uplpoad sucessfull')

   
//     } catch(err) {
//         console.log(err + "This is your multer error")
//     }

// })


router.post('/singin', async (req,res) => {
    try {
        const {email, password, repassword} = await  req.body;
        const login = await UserModel.findOne({email: email});
        await login.jwt();
        console.log(login, "This isaf;asdfk")
        const pass = await bcrypt.compare(password, login.password);
        const repass = await bcrypt.compare(repassword, login.repassword);
        console.log('Singin is also completed')
        // if(pass && repass) {
         if(pass && repass && pass == repass) {
            res.send(login)
         } else {
            console.log('Your passord doesnot matched')
         }
        // } 
console.log('Done');
    } catch(error) {
        console.log(error)          
    }
})





router.post('/sendcook', async (req, res) => {
    try {
const myCookie = await req.body;

console.log('Your cookies');
console.log(myCookie)
const orginalCookie = myCookie.cookie;
const veriFy = await jwt.verify(orginalCookie, process.env.SECRET_KEY );
console.log('My verify')
console.log(veriFy)
const findData = await UserModel.findOne({_id: veriFy._id}); 


if(!findData) {
    console.log('failed auth');
} else {
    res.send(findData)
}
console.log("autherization process");
// console.log(auth)

    } catch(er) {
        console.log(er + "Authentation error");
    }
})



router.post('/takeallthedata', async(req,res) => {
  let alltheDatasofThedatabase = await Profile.find({})
  console.log(alltheDatasofThedatabase.real_user)

  res.status(200).json({alltheDatasofThedatabase})
})




router.post('/getMessages', (req, res) => {
let datas = req.body;
console.log(datas, 'messages data');
console.log(datas.setm)
})






module.exports = router;