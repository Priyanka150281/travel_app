const nodemailer = require('nodemailer');
/*const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL/TLS
  
  auth: {
    user: 'p20469888@gmail.com',
    pass: 'lyybrubxxrjehsas'
  }
});

transporter.sendMail({
  from: 'p20469888@gmail.com',
  to: 'priyanka150281@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer.'
}, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
module.exports = transporter;*/
function sendAppointmentNotification(appointmentData) {
  const transporter = nodemailer.createTransport({
    // Configure the transporter options if not already done
     host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Use SSL/TLS
  
  auth: {
    user: 'p20469888@gmail.com',
    pass: 'lyybrubxxrjehsas'
  }
  });

  transporter.sendMail({from: 'p20469888@gmail.com',
  to: appointmentData.email,
  subject: 'Travel Agency Appointment',
  text: `Dear ${appointmentData.name},\n\nThis is a reminder for your appointment on ${appointmentData.date} at ${appointmentData.timeSlot}. Please be punctual.\n\nBest regards,\nYour Travel Agency`}, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
module.exports =sendAppointmentNotification;