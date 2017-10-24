function validateForm() {
  var id_value = document.forms["myform"]["userid"].value;
  var fname_value = document.forms["myform"]["fname"].value;
  var lname_value = document.forms["myform"]["lname"].value;
  var UserID = "UserID:" + " " + id_value;
  var FirstName = "First Name:" + " " + fname_value;
  var LastName = "Last Name:" + " " + lname_value;
  document.getElementById("id_msg").innerHTML = "";
  document.getElementById("fname_msg").innerHTML = "";
  document.getElementById("lname_msg").innerHTML = "";

  if (id_value == "" && fname_value == "" && lname_value == "") {

    document.getElementById("id_msg").innerHTML = "Please Enter an ID ";
    document.getElementById("fname_msg").innerHTML = "Please Enter a First Name ";
    document.getElementById("lname_msg").innerHTML = "Please Enter a Last Name ";
    alert("you forgot to fill in the following detail(s) ID, First Name and Last Name");

    return false;
  } else {
    if (fname_value == "" && lname_value == "") {
      document.getElementById("fname_msg").innerHTML = "Please Enter a First Name ";
      document.getElementById("lname_msg").innerHTML = "Please Enter a Last Name ";
      alert("you forgot to fill in the following detail(s) First Name and Last Name");

      return false;
    } else if (id_value == "" && fname_value == "") {
      document.getElementById("id_msg").innerHTML = "Please Enter an ID ";
      document.getElementById("fname_msg").innerHTML = "Please Enter a First Name ";
      alert("you forgot to fill in the following detail(s) ID and First Name");

      return false;
    } else if (id_value == "" && lname_value == "") {
      document.getElementById("id_msg").innerHTML = "Please Enter an ID ";
      document.getElementById("lname_msg").innerHTML = "Please Enter a Last Name ";
      alert("you forgot to fill in the following detail(s) ID and Last Name");

      return false;
    } else if (id_value == "" || id_value == null) {
      document.getElementById("id_msg").innerHTML = "Please Enter an ID";
      alert("you forgot to fill in the following detail(s) ID");

      return false;
    } else if (fname_value == "" || fname_value == null) {
      document.getElementById("fname_msg").innerHTML = "Please Enter a First Name ";
      alert("you forgot to fill in the following detail(s) First Name");

      return false;
    } else if (lname_value == "" || lname_value == null) {
      document.getElementById("lname_msg").innerHTML = "Please Enter a Last Name ";
      alert("you forgot to fill in the following detail(s) Last Name");

      return false;
    } else {
      document.getElementById("id_input").innerHTML = UserID;
      document.getElementById("id_fname").innerHTML = FirstName;
      document.getElementById("id_lname").innerHTML = LastName;
      document.getElementById("myform").reset();
    }
  }
  return true;

}
