function triContacts(contacts) {
    contacts.sort((a, b) => 
      a.nom.localeCompare(b.nom) ||
      a.prenom.localeCompare(b.prenom)
    );
  }