const express = require('express');
const router = express.Router();
const {
    getAllJob,
    createJob,
    getJob,
    updateJob,
    deleteJob
} = require('../controllers/jobs');

router.get('/', getAllJob);
router.post('/', createJob);
router.get('/:id', getJob);
router.patch('/:id', updateJob);
router.delete('/:id', deleteJob);


module.exports = router;