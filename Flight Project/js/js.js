function checkNameSurname() {


  var name = document.getElementById('surname');
  var sname = document.getElementById('name2');
  var regExpName = /^[A-Z][a-z]{2,19}$/;

  if (!regExpName.test(name.value)) {
    sname.style.color = "red"
    sname.innerHTML = " Invalid";
  } else {
    sname.style.color = "green";
    sname.innerHTML = " Valid";
  }
}

function checkNameSurname2() {


  var name = document.getElementById('name3');
  var sname = document.getElementById('name4');
  var regExpName = /^[A-Z][a-z]{2,19}$/;

  if (!regExpName.test(name.value)) {
    sname.style.color = "red"
    sname.innerHTML = " Invalid";
  } else {
    sname.style.color = "green";
    sname.innerHTML = " Valid";
  }
}

function checkPassport() {


  var name = document.getElementById('passport');
  var sname = document.getElementById('pasoh');
  var regExpName = /^[0-9]{4,12}$/;

  if (!regExpName.test(name.value)) {
    sname.style.color = "red"
    sname.innerHTML = " Invalid";
  } else {
    sname.style.color = "green";
    sname.innerHTML = " Valid";
  }
}

function checkEmail() {
  var name = document.getElementById('email');
  var sname = document.getElementById('email2');
  var regExpName = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

  if (!regExpName.test(name.value)) {
    sname.style.color = "red"
    sname.innerHTML = " Invalid";
  } else {
    sname.style.color = "green";
    sname.innerHTML = " Valid";
  }
}

function getData()
{
    //gettting the values
    var departure = document.getElementById("departure").value;
    var destination = document.getElementById("destination").value; 
    var datato = document.getElementById('datato').value;
    //saving the values in local storage
    localStorage.setItem("txtValue", departure);
    localStorage.setItem("txtValue1", destination); 
    localStorage.setItem("txtValue2", datato);  
}



function copy() {
  /* Get the text field */
  var copyText = document.getElementById('copy-button');

  copyText.addEventListener('click', (event) => {
    const content = document.getElementById('phone-text').textContent;
    navigator.clipboard.writeText(content);
    alert("Copied the text: " + content);
  })
 
  navigator.clipboard.readText()
    .then((copied) => {
      console.log(copied);
    });


}

function copy2() {
  /* Get the text field */
  var copyText = document.getElementById('copy-button2');

  copyText.addEventListener('click', (event) => {
    const content = document.getElementById('email-text').textContent;
    navigator.clipboard.writeText(content);
    alert("Copied the text: " + content);
  })
 
  navigator.clipboard.readText()
    .then((copied) => {
      console.log(copied);
    });


}



