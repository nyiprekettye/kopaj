if (Meteor.isClient) {
  // counter starts at 0

  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }


  Template.register.events({
    'submit form': function(event,template){
      event.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value;
      if (validateEmail(emailVar)){
          console.log('Register.');
          Accounts.createUser({
          email: emailVar,
          password: passwordVar
        })
      } else {
        alert('Invalid e-mail');
        console.log('Invalid e-mail.');
      }


      
    }
  });

  Template.login.events({
    'submit form': function(event,template){
      event.preventDefault();
      var emailVar = template.find('#login-email').value;
      var passwordVar = template.find('#login-password').value; 
      Meteor.loginWithPassword(emailVar, passwordVar);
      console.log('Logged in.');

   
    }
  });

  Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });
  Template.dashboard.helpers({

    getAddress: function() {
      var user = null;
      user= Meteor.user().emails[0].address;
      if (user != null){
        return user;
      }else {
        return 'A ghost...';
      }
    }
  });
}