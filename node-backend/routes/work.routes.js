const { error } = require('console');
const express = require('express');
const app = express(); // เรียกใช้ express

const workRoute = express.Router();
let Work = require('../model/Work');  // เรียกใช้ Model mongoose



// เชื่อมข้อมูลระหว่าง Express และ MongoDB

// add work route

workRoute.route('/add-work').post((req, res, next) => {

  Work.create(req.body, (error, data) => {

    if(error) {
      return next(error);
    }else{
      res.json(data);
    }

  })

})

// Get all Work


workRoute.route('/').get((req, res) => {

  Work.find((error, data) => {

    if(error) {
      return next(error);
    }else{
      res.json(data);
    }

  })
})

// Get one Work

workRoute.route('/open-work/:id').get((req, res) => {

  Work.findById(req.params.id,(error, data) => {

    if(error) {
      return next(error);
    }else{
      res.json(data);
    }

  })

})

// Update Work

workRoute.route('/update-work/:id').put((req, res, next) => {

    Work.findByIdAndUpdate(req.params.id,{

      $set: req.body

    },(error, data) => {

      if(error) {
        return next(error);
        console.log(error);

      }else{

        res.json(data);
        console.log('Work Updated Successfully');

      }

    })
})

// Delete Work API

workRoute.route('/delete-work/:id').delete((req, res, next) => {

  Work.findByIdAndRemove(req.params.id,(error, data) => {

    if(error) {
      return next(error);
    }else{
      res.status(200).json({
        msg: data
      });
    }

  })

})

module.exports = workRoute;
