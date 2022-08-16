window.addEventListener("DOMContentLoaded", (event) => {
<<<<<<< HEAD
<<<<<<< HEAD
  
=======

>>>>>>> Address_Book_Application_UC6
=======
  validateName();
  validatePhoneNumber();
  validateAddress();
  validateZipcode();
});

const validateName = () => {
>>>>>>> Address_Book_Application_UC7
  const name = document.querySelector("#name");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue(".name-error", "");
      return;
    }
    try {
      new Contact().name = name.value;
      setTextValue(".name-error", "");
    } catch (error) {
      setTextValue(".name-error", error);
    }
  });
<<<<<<< HEAD

=======
};

const validatePhoneNumber = () => {
>>>>>>> Address_Book_Application_UC7
  const phoneNumber = document.querySelector("#phoneNumber");
  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      setTextValue(".tel-error", "");
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      setTextValue(".tel-error", "");
    } catch (error) {
      setTextValue(".tel-error", error);
    }
  });
<<<<<<< HEAD

=======
};

const validateAddress = () => {
>>>>>>> Address_Book_Application_UC7
  const address = document.querySelector("#address");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      setTextValue(".address-error", "");
      return;
    }
    try {
      new Contact().address = address.value;
      setTextValue(".address-error", "");
    } catch (error) {
      setTextValue(".address-error", error);
    }
  });
<<<<<<< HEAD

=======
};

const validateZipcode = () => {
>>>>>>> Address_Book_Application_UC7
  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue(".zip-error", "");
      return;
    }
    try {
      new Contact().zip = zip.value;
      setTextValue(".zip-error", "");
    } catch (error) {
      setTextValue(".zip-error", error);
    }
  });
<<<<<<< HEAD

});

<<<<<<< HEAD
const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};
=======
function save() {
=======
};

const save = () => {
>>>>>>> Address_Book_Application_UC7
  let contact = new Contact();
  contact.id = new Date().getTime();

  try {
    contact.name = getInputValueById("#name");
  } catch (error) {
    setTextValue(".name-error", error);
    throw error;
  }

  try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
  } catch (error) {
    setTextValue(".tel-error", error);
    throw error;
  }

  try {
    contact.address = getInputValueById("#address");
  } catch (error) {
    setTextValue(".address-error", error);
    throw error;
  }
  
  let city = getInputValueById("#city");
  if (city != "Select City") {
    contact.city = city;
  } else {
    throw "Please select city";
  }

  let state = getInputValueById("#state");
  if (state != "Select State") {
    contact.state = state;
  } else {
    throw "Please select state";
  }

  try {
    contact.zip = getInputValueById("#zip");
  } catch (error) {
    setTextValue(".zip-error", error);
    throw error;
  }

<<<<<<< HEAD
  console.log(contact.toString());
}
=======
  alert(contact.toString());
};
>>>>>>> Address_Book_Application_UC7

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

<<<<<<< HEAD
function getInputValueById(property) {
  let value = document.querySelector(property).value;
  return value;
}
>>>>>>> Address_Book_Application_UC6
=======
const getInputValueById = (property) => {
  let value = document.querySelector(property).value;
  return value;
};
>>>>>>> Address_Book_Application_UC7
