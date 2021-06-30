public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        try {
            return [
                SELECT FirstName, LastName, Email 
                FROM Contact
                WITH SECURITY_ENFORCED
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
