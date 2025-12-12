const express = require('express');
const router = express.Router();
const Book = require('../model/Book');

router.post('/add-book', async (req, res, next) => {
  try {
    const book = await Book.create(req.body); // ไม่มี callback แล้ว
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.get('/read-book/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    next(error);
  }
});

router.put('/update-book/:id', async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
  } catch (error) {
    next(error);
  }
});

router.delete('/delete-book/:id', async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

