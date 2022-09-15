const express = require('express'); 
const path = require('path');
const cors = require('cors');
const app = require('');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const port = process.env.PORT || 3500; 

// connect to mongo database  
connectDB();