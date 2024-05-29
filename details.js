contactsContainer.addEventListener("click", selectContact);
function selectContact(event) {
    var clickedContact = event.target.closest(".Contact");
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
    
    return contacts.find(function (contact) {
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