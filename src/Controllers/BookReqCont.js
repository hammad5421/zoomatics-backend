const Booking = require('../Models/bookMod');

// Controller function to handle booking requests
const bookTeacher = async (req, res) => {
    try {
        // Extract required data from request body
        const { studentId, teacherId } = req.body;

        // Create a new booking instance
        const booking = new Booking({
            studentId,
            teacherId
        });

        // Save the booking to the database
        await booking.save();

        // Send a success response
        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        // Handle errors
        console.error('Error booking teacher:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { bookTeacher };
