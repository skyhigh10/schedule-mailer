const nodemailer = require('nodemailer');
const { userInfo } = require('os');
const cron = require('node-cron');


//email message option
const mailOptions ={
    from: 'ezekielalokwu99@gmail.com',
    to: 'vendstreetonline@gmail.com',
    subject: 'Email from Node mail: A testing email message',
    Text: 'Hello from Node'
};

//email transport configuration

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ezekielalokwu99@gmail.com',
        pass: 'qxxbqodfmumiohug'
    }
    
});

//send Email

cron.schedule('*****', () =>{

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('email send:' + info.response);
        }
})

});