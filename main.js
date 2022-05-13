function SendMail() {
    var params = {
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_zvo5llq', 'template_c4ztmzd', params).then(function (res) {
        alert('Email was sent successfully, status code: ' + res.status).catch(function(res) {alert(res.status)});
    } )
}
