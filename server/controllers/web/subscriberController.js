const newsletterModel = require('../../models/newsletter.model'); 
let subscriberInsert = (req, res) => {
  let { email, subscribed } = req.body;

  let subscriber = new newsletterModel({
    email,
    subscribed
  });

  subscriber.save()
    .then(() => {
      res.send({ status: 1, message: "Message saved successfully" });
    })
    .catch((err) => {
      res.send({ status: 0, message: "Error saving message", error: err.message });
    });
};

module.exports = { subscriberInsert };