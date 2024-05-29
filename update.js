function saveContact(event) {
    event.preventDefault();
    let oldTel = event.currentTarget.getAttribute("oldTel");
    var civilite = document.querySelector("#civilite").value;
    var nom = document.querySelector("#nom").value;
    var prenom = document.querySelector("#prenom").value;
    var telephone = document.querySelector("#telephone").value;

    var contactToUpdate = contacts.find(function (contact) {
      return contact.telephone === oldTel;
    });
    console.log(telephone.length);
    if(!validatePhoneNumber(telephone,contacts,contactToUpdate.telephone)){
        return ;
    }
    else if (contactToUpdate) {
      contactToUpdate.civilite = civilite;
      contactToUpdate.nom = nom;
      contactToUpdate.prenom = prenom;
      contactToUpdate.telephone = telephone;
      localStorage.setItem("contacts", JSON.stringify(contacts));
      document.querySelector(".Form").reset();
      alert("Les informations du contact ont été mises à jour avec succès.");
      window.location.reload();
    }
  }
function validatePhoneNumber(telephone, contacts, oldTel = null) {
    if (!/^\d{8}$/.test(telephone)) {
        alert("Le numéro de téléphone doit comporter exactement 8 chiffres.");
        return false;
    }
    /* Check if the phone number is exactly 8 digits and numeric
    if (telephone.length !== 8 || isNaN(telephone)) {
        alert("Le numéro de téléphone doit comporter exactement 8 chiffres.");
        return false;
    }*/

    // Check for duplicate phone number
    var isDuplicate = contacts.some(function (contact) {
        return contact.telephone === telephone && contact.telephone !== oldTel;
    });

    if (isDuplicate) {
        alert("Ce numéro de téléphone existe déjà dans les contacts.");
        return false;
    }

    return true;
}