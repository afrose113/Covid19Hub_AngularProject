const Covid =require('../../models/covid')


module.exports=function(router)
{
//get 
router.get('/covid',function(req,res)
{
 
    Covid.find({},(err,covid)=>
    
    {
       
        if(err)
        {
            res.json({success:false,message:err});
        }
        else{
            if(!covid)
            {
                res.json({success:false,message:'No covid found.'});

            }
            else{
                res.json({success:true,covid:covid});
            }
        }
    })
})

//put
// router.put('/updatecovid',(req,res)=>
// {
//     if(!req.body._id)
//     {
//         res.json({success:false,message:'No  covid id provided'});
//     }
//     else
//     {
//         //check id exists in database
//         Covid.findOne({_id: req.body._id},(err, covid)=>
//         {
//             if(err)
//             {
//                 res.json({success:false,message:'Not a valid covid id'});
//             }
//             else{
//                 covid.covidID=req.body.covidID;
//                 covid.EmployeeName=req.body.EmployeeName;
//                 employee.Salary=req.body.Salary;
//                 employee.Address=req.body.Address;
//                 employee.Location=req.body.Location;
//                 employee.PhNumber=req.body.PhNumber;
//                 employee.save((err)=>
//                 {
//                     if(err)
//                     {
//                         res.json({success:false,message:err});
//                     }
//                     else
//                     {
//                         res.json({success:true,message:'employee Update!'});
//                     }
//                 });
//             }
//         });
//     }
// });
// //delete
// router.delete('/deleteEmployee/:id',(req,res)=>
// {
//     if(!req.params.id)
//     {
//         res.json({success:false,message:'No id provided'});
//     }
//     else{
//         Employee.findOne({_id:req.params.id},(err,employee)=>
//         {
//             if(err)
//             {
//                 res.json({success:false,message:'Invalid id'});
//             }
//             else
//             {
//                 employee.remove((err)=>
//                 {
//                     if(err)
//                     {
//                         res.json({success:false,message:err});
//                     }
//                     else{
//                         res.json({success:true,message:'employee deleted!'});
//                     }
//                 });
//             }
//         });
//     }
// });


    //post:get new meeting note 
    router.post('/covid',function(req,res)
    {
       
        let note=new Covid(req.body)
        note.save(function(err,note)
        {
            // if (Employee.length === 0) {
            //     return res.send('<p>No employee found for "' + req.query.employee + '"</p>');
            //   }
            if(err)
            {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}