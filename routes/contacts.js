const express = require('express');
const router = express.Router();

// Get all users contacts (read)
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// Add new contact (create)
router.post('/', (req, res) => {
  res.send('Add contact');
});

// Update a contact (update)
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// Delete a contact (delete)
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
