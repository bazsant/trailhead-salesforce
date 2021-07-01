public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getRelatedContacts(Id accountId) {
        return [
            SELECT Name, Title, Email, Phone 
            FROM Contact
            WHERE AccountId = :accountId
            WITH SECURITY_ENFORCED
        ];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){

        throw new AuraHandledException('Forced error');
    }
}
