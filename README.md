## SugarBear
#SugarBear is a website that helps people buy SugarBear Hair products. 

#Software Architecture
Frontend is build using HTML, CSS and mostly JavaScript.
Frontend is responsive for for mobile devices.
It uses JavaScript to save some data first in cookies, then it stores the data in the database using PHP.
For database I used MySQL.

#Landing Page
It has a nav bar that scrolles in the right side, then it has a carousel that shows 4 images. Then it has the products, some information about the product, client's reviews and in the end it is placed a map where you can see where out product's store is.

#Product Shipping Page
After you click on the section for buying our product you will be sent to the product shipping page where you will have to put your shipping information.  Each input is validated using JavaScript, it shows an error if you put wrong data in the inputs. When you submit the information you have put in the inputs will be saved in cookies. And then you will be taken to the checkout page.

#Checkout Page
The Checkout Page is kind of similar to the Product Shipping Page, you will have to enter some information about your payment. But in the left side you will se shipping data that we retrieved from cookies using AJAX. Inputs are also validated client side and server side. After we fill the data and submit them the information will be stored in the database using PHP. 

#Thankyou Page
After submiting the data in the Checkout Page you will be sent in Thank you page. You will see that your order has been done succesfuly, and there is a button that when you click it send you back home.
