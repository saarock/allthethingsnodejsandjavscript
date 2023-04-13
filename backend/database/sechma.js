const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;
const Users = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  

  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    required: true
  },

  repassword: {
    type: String,
    required: true
  },

  favriouteProgrammingLanguage: {
    type: String,
    // required: true
  },



  bio: {
   
      type: String,
    
   
    // require: true

  },

  cover_picture: {    
    File : {
      type: String,
    }
   
    }
     
  
  ,

  bio: {
    type: String
  },


 




tokens :
  {
    // token:{
    type: String,
    required: true,
  
  // }
}



});



// for jsonwebtoken
Users.methods.jwt = async function() {

  try {
    const token = jwt.sign({_id: this._id}, 'asdfadfvbasjfaesfwuefs.bajsfhj');
 this.tokens = await token
    await this.save();
    // console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU')
    
return this
    
  } catch (error) {
    console.log(error + "sechma error")
    
  }
 
}




// For hash passsword
Users.pre('save', async function(next) {
 if(this.isModified('password')) {
  this.password = await bcrypt.hash(this.password, salt);
 }
  if(this.isModified('repassword')) {
  this.repassword = await bcrypt.hash(this.repassword, salt);
 }
 next()
})



let  Profile_photos = new mongoose.Schema({

real_user : {
  type: String
  
},
name: {
  type:String
},
caste: {
  type: String
}
  ,
  Profile_photos : [
{
 type: String,
//  contentType: 'image/png'
}, 

{
  likes: {
    type: Number
  },
  comments: {
    type: String
  }
}
    
  ]
})






const userChat = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('Message', userChat);






const UserModel = mongoose.model('CODER USERS', Users);
const Profile = mongoose.model('Pictures', Profile_photos);
module.exports = {UserModel, Profile, Message};
// module.exports = UserModel