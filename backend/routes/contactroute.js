const express = require("express");
const router = express.Router()
const contactData = require('../models/contactschema');
const { body, validationResult } = require('express-validator');





router.post('/contact',
    [
        body('email', "enter a valid email").isEmail(),
        body('phone', "enter a valid phone number").isLength({ min: 10 }),
        body('message', 'enter a valid message').isLength({ min: 5 }),

    ], async (req, res) => {

        let sucess = true;

        const { name, email, phone, message } = req.body;
        // console.log(name, email, phone, message);


        //if there are errpr , return bad request and thr error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {

            let client = await contactData.findOne({ email: email })
            // console.log(client)

            if (client) {
                sucess = false;
                return res.status(400).json({ sucess, err: "you have already contact " })
            }
            else {

                client = await contactData.create({

                    name, email, phone, message
                })

                const saveclient = await client.save()

                sucess = true;

                return res.status(200).json({ sucess, saveclient })
            }

        } catch (error) {

            return res.status(500).send({ error: "  server error" })

        }


    })


router.get('/getcontact', async (req, res) => {

    try {


        // const user = await contactData.findOne( {id: req.body._id} );
        const user = await contactData.find();
        res.status(200).json(user)


    } catch (e) {
        console.log(e);
        res.status(500).send("Interval server error ");
    }
}
)


module.exports = router


