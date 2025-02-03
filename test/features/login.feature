Feature: Login functionality

        Scenario Outline: Login with different user types
            Given I am on the login page
             When I login with "<userType>" user credentials
             Then I should see "<expectedResult>"

        Examples:
                  | userType        | expectedResult                                              |
                                                     
                  | LOCKED          | Provided credentials do not match any user in this service. |
                  | NO_MATCH        | Provided credentials do not match any user in this service.                                               |
                  | NO_USER_DETAILS | Username is required |
                  | NO_PASSWORD | Password is required |