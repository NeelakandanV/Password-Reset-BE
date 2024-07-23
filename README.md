# Password Reset Flow

### This documentaion provides details about the Password Reset workflow, implemented using Node.js and Express. This API allows you to manage  user SignUp , Login , Forgot Password , Reset Password and Delete calls.

## URL - https://passwordreset-bb6e.onrender.com ##

### Note: Since I'm deployed the apis in render's free tier, The initial request is taking time, Please wait little longer for initial request


# API Endpoints:-

## Login
### https://passwordreset-bb6e.onrender.com/  - POST method<br/>
Description : This method check whether the user with given EmailId and Password exists.If exists means it will allow the users to Login,else not.

## Signup
### https://passwordreset-bb6e.onrender.com/Signup - POST method<br/>
Description : This method will allow new users to register if Email Id not registered already.

## Displays Users
### https://passwordreset-bb6e.onrender.com/Dashboard - GET method<br/>
Description : This method displays users list to users who are logged in.Users will be logged out after a certain Time.<br/>
              This will be done with the help of **JsonWebToken**

## Delete User
### https://passwordreset-bb6e.onrender.com/delete/:id  - DELETE method<br/>
Description : This method enables users to delete their account  (**give Email as id**)

## Forgot Password
### https://passwordreset-bb6e.onrender.com/ForgotPassword - PUT method<br/>
Description : This method generates a random string and stores in database for later verification,if the user exists<br/>
             It allows sends email with reset link(Using ***Nodemailer***) for the verified user

## Reset Password link
### https://passwordreset-bb6e.onrender.com/:id/:pin/:token - GET method<br/>
Description : This method verifies the random string in database and the link are same.Also verifies the **JsonWebToken** for the link validity.
              This link is valid for 5mins which will allow users to reset password only in that stipulated time.<br/>
              **( id - user Id , pin - randomly generated , token - JWT)**

## Reset Password 
### https://passwordreset-bb6e.onrender.com/:id/:pin/:token - PUT method<br/>
Description : After the verification is done in GET method.It will allow users to reset their Pasword and the same will be uploaded in database after deleting the randomly generated string which is used for verification purpose.
 **( id - user Id , pin - randomly generated , token - JWT)**





