const Message = require('../Models/ContactMeg');

const ContactControl = async (req, res) => {
  const { username, email, phone, subject, message } = req.body;
  try {
    const result = await Message.create({
      username,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({ result, message: 'Message added successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const getmsg = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const deleteMsg = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedMessage = await Message.findOneAndDelete({ _id: id });
    if (!deletedMessage) {
      return res.status(404).json('Message not found');
    }
    res.status(200).json('Message deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

module.exports = { ContactControl, getmsg, deleteMsg };
