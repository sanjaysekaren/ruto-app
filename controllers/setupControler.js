var mongoose = require('mongoose');
var rutoAddress = require('../models/rutoAddressModel');

module.exports = function(app){
    

    // app.get('/api/insertseedvaluesindb', function(req,res){
    //     var addressQuery=[
    //         {
    //             personName:'Sample1',
    //             contactNo:1234567890,
    //             location:'location1',
    //             doorNo:'doorno1',
    //             buliding: 'buliding1',
    //             landmark:'landmark1',
    //             note:'note1'
    //         },
    //         {
    //             personName:'Sample2',
    //             contactNo:1234967890,
    //             location:'location2',
    //             doorNo:'doorno2',
    //             buliding: 'buliding2',
    //             landmark:'landmark2',
    //             note:'note2'
    //         },
    //         {
    //             personName:'Sample3',
    //             contactNo:1934567890,
    //             location:'location3',
    //             doorNo:'doorno3',
    //             buliding: 'buliding3',
    //             landmark:'landmark3',
    //             note:'note3'
    //         },
    //         {
    //             personName:'Sample4',
    //             contactNo:1234568890,
    //             location:'location4',
    //             doorNo:'doorno4',
    //             buliding: 'buliding4',
    //             landmark:'landmark4',
    //             note:'note4'
    //         }
    //     ];
    //     rutoAddress.create(addressQuery, function(err,results){
    //         if(err) throw err;
    //         res.send(results);
    //     });
    // });


}