// server/routes/events.js
const express = require('express');
const router = express.Router();
const Event = require('../Model/event');

// Get all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new event
router.post('/events', async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an existing event
router.put('/events/:id', async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        
        // Update the event with new data
        event.title = req.body.title || event.title;
        event.date = req.body.date || event.date;
        event.time = req.body.time || event.time;
        event.description = req.body.description || event.description;

        await event.save();
        res.json(event); // Respond with the updated event
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete an event
router.delete('/events/:id', async (req, res) => {
    try {
        const deleted = await Event.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
    