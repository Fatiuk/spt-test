let userGender;
let userAge;
let userAllergy;

$("#order_form").submit(function () {
  let formData = {
    name: $("#input-name").val(),
    phone: $("#input-phone").val(),
    gender: userGender,
    age: userAge,
    allergy: userAllergy,
  };

  // відправка форми ajax-ом з даними

  return false;
});
