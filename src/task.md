Challenge 3 of 4: Reset state without Effects
This EditContact component receives a contact object shaped like { id, name, email } as the savedContact prop. Try editing the name and email input fields. When you press Save, the contact’s button above the form updates to the edited name. When you press Reset, any pending changes in the form are discarded. Play around with this UI to get a feel for it.

When you select a contact with the buttons at the top, the form resets to reflect that contact’s details. This is done with an Effect inside EditContact.js. Remove this Effect. Find another way to reset the form when savedContact.id changes.
