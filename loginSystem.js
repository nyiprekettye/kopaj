if (Meteor.isClient) {
  // counter starts at 0
  Template.register.events({
    'submit form': function(event,template){
      event.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value; 
      console.log('Register.');
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      })
    }
  });

  Template.login.events({
    'submit form': function(event,template){
      event.preventDefault();
      var emailVar = template.find('#login-email').value;
      var passwordVar = template.find('#login-password').value; 
      Meteor.loginWithPassword(emailVar, passwordVar);
      console.log('Loged in.');
    }
  });

  Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  })
}