// JSON data
// I coudnt define a variable in a .json file, because my linter complains that a .json file cant have variables.
let tasks = `[{
    "taskName": "shopping", 
    "image": "./images/shop.jpg", 
    "deadline": "04.10.2023",
    "description": "Shop for weekly groceries at Billa and Hofer.", 
    "importance": 0    
  }, {
    "taskName": "reading", 
    "image": "./images/read.jpg", 
    "deadline": "04.10.2023",
    "description": "Read the book till the end.", 
    "importance": 0  
  }, {
    "taskName": "working", 
    "image": "./images/work.jpg", 
    "deadline": "04.10.2023",
    "description": "Manage to organise all tasks.", 
    "importance": 0   
  }, {
    "taskName": "studing", 
    "image": "./images/learn.jpg", 
    "deadline": "04.10.2023",
    "description": "Repeat everything for PIL exam.", 
    "importance": 0   
  }, {
    "taskName": "playing with dog", 
    "image": "./images/play.jpg", 
    "deadline": "04.10.2023",
    "description": "Teach Pablo new tricks.", 
    "importance": 0   
  },{
    "taskName": "cooking", 
    "image": "./images/cook.jpg", 
   "deadline": "04.10.2023",
    "description": "Make pasta Carbonara.", 
    "importance": 0  
  }, {
    "taskName": "training", 
    "image": "./images/sport.jpg", 
    "deadline": "04.10.2023",
    "description": "Full Body Workout!", 
    "importance": 0   
  }, {
    "taskName": "walking with dog", 
    "image": "./images/walk.jpeg", 
    "deadline": "04.10.2023",
    "description": "Take a walk with Pablo.", 
    "importance": 0   
  }, {
    "taskName": "painting", 
    "image": "./images/paint.jpg", 
    "deadline": "04.10.2023",
    "description": "Finish the painting.", 
    "importance": 0   
  }]`;
let data = JSON.parse(tasks);
