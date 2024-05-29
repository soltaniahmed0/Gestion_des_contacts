function add_Contacts() {
    var civilite = document.getElementById("civilite").value;
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var telephone = document.getElementById("telephone").value;
  
    if (
      civilite.trim() === "" ||
      prenom.trim() === "" ||
      nom.trim() === "" ||
      telephone.trim() === ""
    ) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }
  
    var existingContacts = localStorage.getItem("contacts");
    var contacts = existingContacts ? JSON.parse(existingContacts) : [];
  
    var isDuplicate = contacts.some(function (contact) {
      return contact.telephone === telephone;
    });
  
    if (isDuplicate) {
      alert("Ce numéro de téléphone existe déjà dans les contacts.");
    } else {
      var contact = {
        civilite: civilite,
        prenom: prenom,
        nom: nom,
        telephone: telephone,
      };
  
      contacts.push(contact);
      localStorage.setItem("contacts", JSON.stringify(contacts));
  
      document.querySelector("form").reset();
      alert("Le contact a été ajouté avec succès.");
      location.reload();
    }
  }