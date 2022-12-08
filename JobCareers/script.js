var check_pass = function() {
    if (document.getElementById('password').value != document.getElementById('confirm_password').value) {
      document.getElementById('confirm_password').style.backgroundColor = "#f67c89";
    } else {
      document.getElementById('confirm_password').style.backgroundColor = 'white';
    }
  }