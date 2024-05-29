var addButton = document.getElementById("Add");
var detailContact = document.querySelector(".detailContact");
var saveButton = document.querySelector(".save");
var editButton = document.querySelector(".edit");
var deleteButton = document.querySelector(".Delete");
var contactsContainer = document.querySelector(".contactsContainer");
var saveList = document.querySelector(".SaveList");
var noContacts = saveList.querySelector(".noContacts");
var form = document.querySelector(".Form");
document.addEventListener("DOMContentLoaded",init );


function init() {
    editButton.addEventListener("click", editContact);
    //saveButton.removeEventListener("click", add_Contacts);
    saveButton.addEventListener("click", saveContact);
    
    showContacts();
    saveButton.addEventListener("click", add_Contacts);

  addButton.onclick = function () {
    form.style.display = "block";
    detailContact.style.display = "none";
  };
  deleteButton.addEventListener("click", function () {
    localStorage.removeItem("contacts");
    var contactsContainer = document.querySelector(".contactsContainer");
    contactsContainer.innerHTML = '';
    showContacts();
  
  });

  if (document.querySelectorAll(".Contact").length === 0) {
    var noContacts = document.querySelector(".noContacts");
    noContacts.style.display = "block";
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
  

  