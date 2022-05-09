import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

const users = Meteor.users; //Stores the Meteor Users Collection in a single Variable.

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});


Meteor.methods({
  "authenticateUser": function authenticateUser(user_email,password){

    var user = Accounts.findUserByEmail(user_email);
    if(user == undefined){
        throw new Meteor.Error("Invalid credentials / user does not exist.");
    }

    console.log("User found by email.");
    
    //Verificar ambiguidade dos Hashes, Hash nao inserido manualmente em registo.
    var result = Accounts._checkPassword(user,{digest:password,algorithm:"sha-256"});
    return result;
}

,
  "registerUser": function registerUser(user_name,user_email,user_password,password_repeat){
      if(user_password != password_repeat)
         throw new Meteor.Error("Passwords do not match."); 
      console.log("Passwords match. User registered.");
    return Accounts.createUser({username:user_name,email:user_email,password:user_password},null);
  }
});
