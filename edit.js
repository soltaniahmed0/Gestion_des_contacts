
function editContact() {
    var civiliteSpan = document.querySelector(".civilite");
    var nomSpan = document.querySelector(".nom");
    var prenomSpan = document.querySelector(".prenom");
    var telephoneSpan = document.querySelector(".telephone");

    var civilite = civiliteSpan.textContent.trim();
    var nom = nomSpan.textContent.trim();
    var prenom = prenomSpan.textContent.trim();
    var telephone = telephoneSpan.textContent.trim();
    
    form.style.display = "block";
    detailContact.style.display = "none";
    saveButton.removeEventListener("click", add_Contacts);
    var civiliteInput = document.querySelector("#civilite");
    var nomInput = document.querySelector("#nom");
    var prenomInput = document.querySelector("#prenom");
    var telephoneInput = document.querySelector("#telephone");

    civiliteInput.value = civilite;
    nomInput.value = nom;
    prenomInput.value = prenom;
    telephoneInput.value = telephone;
    saveButton.setAttribute("oldTel", telephone);
  }

  
