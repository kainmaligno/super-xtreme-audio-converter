const prompt = require(`prompt`);

(async () => {
  prompt.start();
  console.log("Estas en el convertidor de audios de powerbyBquate 💀 💀 💀");

  prompt.get([ 'user', 'email' ], async (error, {user,email}) => {
    console.log('Command-line input received:');
    console.log(user)
    console.log(email)
    
   
  });
})();
