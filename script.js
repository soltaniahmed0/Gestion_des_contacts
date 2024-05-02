
var addButton = document.getElementById("btnAdd");
var formulaire = document.querySelector(".Formulaire");
var detailContact = document.querySelector(".detail_contact");

addButton.onclick = function () {
  formulaire.style.display = "block";
  detailContact.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  var saveButton = document.querySelector(".Enregistrer");

  saveButton.addEventListener("click", add_Contacts);

  var addButton = document.getElementById("btnAdd");
  var formulaire = document.querySelector(".Formulaire");
  var detailContact = document.querySelector(".detail_contact");

  addButton.onclick = function () {
    formulaire.style.display = "block";
    detailContact.style.display = "none";
  };
});

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
document.addEventListener("DOMContentLoaded", function () {
    var deleteButton = document.querySelector(".btnDelete");
  
    deleteButton.addEventListener("click", function () {
      localStorage.removeItem("contacts");
  
      var contactList = document.querySelectorAll(".Contact");
  
      contactList.forEach(function (contact) {
        contact.remove();
      });
  
      if (document.querySelectorAll(".Contact").length === 0) {
        var noContactsMessage = document.querySelector(".noContactsMessage");
        noContactsMessage.style.display = "block";
      }
    });
  
    if (document.querySelectorAll(".Contact").length === 0) {
      var noContactsMessage = document.querySelector(".noContactsMessage");
      noContactsMessage.style.display = "block";
    }
  });
  
var contactsContainer = document.querySelector(".contactsContainer");
document.addEventListener("DOMContentLoaded", function () {
    var editButton = document.querySelector(".edit-button");
    editButton.addEventListener("click", editContact);
  
    var saveButton = document.querySelector(".Enregistrer");
    saveButton.removeEventListener("click", add_Contacts);
    saveButton.addEventListener("click", saveContact);
  
    function editContact() {
      var civiliteSpan = document.querySelector(".civilite");
      var nomSpan = document.querySelector(".nom");
      var prenomSpan = document.querySelector(".prenom");
      var telephoneSpan = document.querySelector(".telephone");
  
      var civilite = civiliteSpan.textContent.trim();
      var nom = nomSpan.textContent.trim();
      var prenom = prenomSpan.textContent.trim();
      var telephone = telephoneSpan.textContent.trim();
      var form = document.querySelector(".Formulaire");
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
  
    function saveContact(event) {
      event.preventDefault();
      let oldTel = event.currentTarget.getAttribute("oldTel");
      var civilite = document.querySelector("#civilite").value;
      var nom = document.querySelector("#nom").value;
      var prenom = document.querySelector("#prenom").value;
      var telephone = document.querySelector("#telephone").value;
      var existingContacts = localStorage.getItem("contacts");
      var contacts = existingContacts ? JSON.parse(existingContacts) : [];
      var contactToUpdate = contacts.find(function (contact) {
        return contact.telephone === oldTel;
      });
  
      if (contactToUpdate) {
        contactToUpdate.civilite = civilite;
        contactToUpdate.nom = nom;
        contactToUpdate.prenom = prenom;
        contactToUpdate.telephone = telephone;
        localStorage.setItem("contacts", JSON.stringify(contacts));
        document.querySelector(".Formulaire").reset();
        alert("Les informations du contact ont été mises à jour avec succès.");
        window.location.reload();
      }
    }
  });
contactsContainer.addEventListener("click", function (event) {
  var clickedContact = event.target.closest(".Contact");
  selectContact(clickedContact);
});

function selectContact(clickedContact) {
  document.querySelectorAll(".Contact.selected").forEach(function (contact) {
    contact.classList.remove("selected");
  });

  if (clickedContact) {
    clickedContact.classList.add("selected");

    var telephone = clickedContact.getAttribute("data-telephone");
    var foundContact = find_contact(telephone);

    if (foundContact) {
      var civilite = foundContact.civilite;
      var nom = foundContact.nom;
      var prenom = foundContact.prenom;
      var telephone = foundContact.telephone;
      showDetailContact(civilite, nom, prenom, telephone);
    } else {
      showDetailContact();
    }
  }
}

function find_contact(telephone) {
  var contactsList = JSON.parse(localStorage.getItem("contacts")) || [];
  return contactsList.find(function (contact) {
    return contact.telephone === telephone;
  });
}

function showDetailContact(civilite, nom, prenom, telephone) {
  var form = document.querySelector(".Formulaire");
  form.style.display = "none";

  var detailContactDiv = document.querySelector(".detail_contact");

  if (detailContactDiv) {
    var civilitePara = detailContactDiv.querySelector(".civilite");
    var nomPara = detailContactDiv.querySelector(".nom");
    var prenomPara = detailContactDiv.querySelector(".prenom");
    var telephonePara = detailContactDiv.querySelector(".telephone");

    if (civilitePara && nomPara && prenomPara && telephonePara) {
      civilitePara.textContent = civilite || "";
      nomPara.textContent = nom || "";
      prenomPara.textContent = prenom || "";
      telephonePara.textContent = telephone || "";
    }

    detailContactDiv.style.display = "block";
  }
}

var addButton = document.getElementById("btnAdd");
var formulaire = document.querySelector(".Formulaire");
var detailContact = document.querySelector(".detail_contact");

addButton.onclick = function () {
  formulaire.style.display = "block";
  detailContact.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  var saveButton = document.querySelector(".Enregistrer");

  saveButton.addEventListener("click", add_Contacts);

  var addButton = document.getElementById("btnAdd");
  var formulaire = document.querySelector(".Formulaire");
  var detailContact = document.querySelector(".detail_contact");

  addButton.onclick = function () {
    formulaire.style.display = "block";
    detailContact.style.display = "none";
  };
});

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


function getContacts() {
    const savedContactsJSON = localStorage.getItem("contacts");
    return savedContactsJSON ? JSON.parse(savedContactsJSON) : [];
  }
  
  function showContacts() {
    const saveList = document.querySelector(".SaveList");
    const contactsContainer = saveList.querySelector(".contactsContainer");
    const noContactsMessage = saveList.querySelector(".noContactsMessage");
  
    const contacts = getContacts();
  
    if (contacts.length === 0) {
      noContactsMessage.style.display = "block";
    } else {
      tri_contacts(contacts);
  
      noContactsMessage.style.display = "none";
  
      contacts.forEach((contact) => {
        const contactElement = document.createElement("div");
        contactElement.classList.add("Contact");
        contactElement.setAttribute("data-telephone", contact.telephone);
        contactElement.innerHTML = `
                <h5><img src="contact-icon.png" alt="Profil">${contact.nom} ${contact.prenom}</h5>
            `;
        contactsContainer.appendChild(contactElement);
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showContacts();
  });
  
  function tri_contacts(contacts) {
    contacts.sort((a, b) => {
      if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
      }
      return a.nom.localeCompare(b.nom);
    });
  }
  