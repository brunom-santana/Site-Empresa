function mudarCor() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var body = document.querySelector('body');
  
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        switch (checkbox.id) {
          case 'checkbox1':
            body.style.backgroundColor = 'rgb(235, 166, 166)';
            body.style.color = 'white';
            break;
          case 'checkbox2':
            body.style.backgroundColor = 'rgb(135, 135, 240)';
            body.style.color = 'white';
            break;
          case 'checkbox3':
            body.style.backgroundColor = 'rgb(228, 228, 172)';
            body.style.color = 'black';
            break;
          case 'checkbox4':
            body.style.backgroundColor = 'rgb(180, 248, 180)';
            body.style.color = 'white';
            break;
          case 'checkbox5':
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            break;
        }
      }
    });
  }