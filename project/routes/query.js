/**
 * Connects to the Microsoft Access JARVIS database and allows for the pulling and manipulation of data. 
 * The data is then transformed into JSON objects and returned to the client JavaScript.
 */

"use strict";

var express = require('express');
var router = express.Router();
var path = require('path');

/**
 * The function is set up to handleerrors upon failure to connect to the database. 
 * If connection is successful, the queried data is returned as an array of JSON objects.
 * The function takes in a string representing a sql command, as well as a callback function
 * to be completed upon successful retrieval of data.
 */
module.exports = function (sqlStatement, callback) {
var jsonData;

// Node package used to facilitate database connection and manipulation.
var ADODB = require('node-adodb');

//Connects to the Microsoft Access database
var connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=./extraFiles/FilingTracker - Copy.accdb');

process.env.DEBUG = 'ADODB';
	
	connection.query(sqlStatement)
	    .on('done', function(data){
			this.jsonData = JSON.stringify(data, null, ' ');
			callback(this.jsonData);
	    })
	    .on('fail', function(error){
		    console.log('did not work');
	    });


}	
