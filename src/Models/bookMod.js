// Assuming you have already connected to your MongoDB database

// Import the mongoose library
const mongoose = require('mongoose');

// Define the schema for the booking
const QuerySchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming you're using ObjectId for IDs
        ref: 'Student', // Reference to the Student model
        required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher', // Reference to the Teacher model
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'canceled'], // Possible booking statuses
        default: 'pending' // Default status when a booking is created
    }
});

// Create a model based on the schema
const Booking = mongoose.model('Booking', QuerySchema);

// Export the model
module.exports = Booking;
