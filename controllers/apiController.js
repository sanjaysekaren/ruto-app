var bodyParser = require('body-parser');
var RutoAddress = require('../models/rutoAddressModel');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    
    app.get('/api/getAllDetails',function(req,res){
        RutoAddress.find({},function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.get('/api/getAllDetails/:pname',function(req,res){
        RutoAddress.find({ personName:req.params.pname },function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.post('/api/addNewAddress',function(req,res){
        if(req.body.id){
            RutoAddress.findByIdAndUpdate(req.body.id,{
                contactNo: req.body.contactNo,
                location:req.body.location,
                doorNo:req.body.doorNo,
                buliding:req.body.buliding,
                landmark:req.body.landmark,
                note:req.body.note},function(err,result){
                    if(err) throw err;
                    res.send('Success');
                });
        }
        else{
            var addAddres = RutoAddress({
                personName:req.body.personName,
                contactNo: req.body.contactNo,
                location:req.body.location,
                doorNo:req.body.doorNo,
                buliding:req.body.buliding,
                landmark:req.body.landmark,
                note:req.body.note
            });
            addAddres.save(function(err){
                if(err) throw err;
                res.send('Success');
            });
        }
    });

    app.delete('/api/deleteAddress',function(req,res){
        RutoAddress.findByIdAndDelete(req.body.id,function(err){
            if(err) throw err;
            res.send('Success');
        });
    });
}