const accountSid = "ACeea72c8a2a38126939b0fe00eda7542c";
const authToken = "7d8f07902ebee2ed7c57428d0e66b09e";
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
    	from: '+15075800772', 
		body: 'Hi there', 
		to: '+15075800772'
      })
      .then(message => console.log(message.sid));