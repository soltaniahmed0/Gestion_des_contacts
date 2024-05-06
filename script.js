var addButton = document.getElementById("Add");
var detailContact = document.querySelector(".detailContact");
var saveButton = document.querySelector(".Enregistrer");
var editButton = document.querySelector(".edit");
var deleteButton = document.querySelector(".Delete");
var contactsContainer = document.querySelector(".contactsContainer");
var saveList = document.querySelector(".SaveList");
var noContacts = saveList.querySelector(".noContacts");
document.addEventListener("DOMContentLoaded",init );
contactsContainer.addEventListener("click", select);
var form = document.querySelector(".Form");
function init() {
    editButton.addEventListener("click", editContact);
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
        document.querySelector(".Form").reset();
        alert("Les informations du contact ont été mises à jour avec succès.");
        window.location.reload();
      }
    }
    showContacts();
  saveButton.addEventListener("click", add_Contacts);

  addButton.onclick = function () {
    form.style.display = "block";
    detailContact.style.display = "none";
  };
  deleteButton.addEventListener("click", function () {
    localStorage.removeItem("contacts");

    var contactList = document.querySelectorAll(".Contact");

    contactList.forEach(function (contact) {
      contact.remove();
    });

    if (document.querySelectorAll(".Contact").length === 0) {
      var noContacts = document.querySelector(".noContacts");
      noContacts.style.display = "block";
    }
  });

  if (document.querySelectorAll(".Contact").length === 0) {
    var noContacts = document.querySelector(".noContacts");
    noContacts.style.display = "block";
  }
  }
function select(event) {
    var clickedContact = event.target.closest(".Contact");
    selectContact(clickedContact);
  }
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
function selectContact(clickedContact) {
  document.querySelectorAll(".Contact.selected").forEach(function (contact) {
    contact.classList.remove("selected");
  });

  if (clickedContact) {
    clickedContact.classList.add("selected");

    var telephone = clickedContact.getAttribute("data-telephone");
    var foundContact = findContact(telephone);

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
function findContact(telephone) {
  var contactsList = JSON.parse(localStorage.getItem("contacts")) || [];
  return contactsList.find(function (contact) {
    return contact.telephone === telephone;
  });
  }
function showDetailContact(civilite, nom, prenom, telephone) {
  form.style.display = "none";

  if (detailContact) {
    var civilitePara = detailContact.querySelector(".civilite");
    var nomPara = detailContact.querySelector(".nom");
    var prenomPara = detailContact.querySelector(".prenom");
    var telephonePara = detailContact.querySelector(".telephone");

    if (civilitePara && nomPara && prenomPara && telephonePara) {
      civilitePara.textContent = civilite || "";
      nomPara.textContent = nom || "";
      prenomPara.textContent = prenom || "";
      telephonePara.textContent = telephone || "";
    }

    detailContact.style.display = "block";
  }
  }
function getContacts() {
    const savedContactsJSON = localStorage.getItem("contacts");
    return savedContactsJSON ? JSON.parse(savedContactsJSON) : [];
  }
function showContacts() {
    
  
    const contacts = getContacts();
  
    if (contacts.length === 0) {
      noContacts.style.display = "block";
    } else {
      triContacts(contacts);
  
      noContacts.style.display = "none";
  
      contacts.forEach((contact) => {
        const contactElement = document.createElement("div");
        contactElement.classList.add("Contact");
        contactElement.setAttribute("data-telephone", contact.telephone);
        contactElement.innerHTML = `
                <h5><img src="images/contact-icon.png" alt="Profil"> ${ contact.nom} ${contact.prenom}</h5>
            `;
        contactsContainer.appendChild(contactElement);
      });
    }
  }
function triContacts(contacts) {
    contacts.sort((a, b) => {
      if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
      }
      return a.nom.localeCompare(b.nom);
    });
  }