## SugarBear
# SugarBear is a website that helps people buy SugarBear Hair products. 

# Software Architecture
Frontend is build using HTML, CSS and mostly JavaScript.
Frontend is responsive for for mobile devices.
It uses JavaScript to save some data first in cookies, then it stores the data in the database using PHP.
For database I used MySQL.

# Landing Page
It has a nav bar that scrolles in the right side, then it has a carousel that shows 4 images. Then it has the products, some information about the product, client's reviews and in the end it is placed a map where you can see where out product's store is.
<img width="1439" alt="landing_page1" src="https://user-images.githubusercontent.com/74629111/227905158-d00737d7-6a7d-4c99-82c2-063118e88cad.png">
<img width="1436" alt="landing_page2" src="https://user-images.githubusercontent.com/74629111/227905223-815f403f-dbf2-458c-8e3a-7a23e1f14a11.png">
<img width="1440" alt="landing_page3" src="https://user-images.githubusercontent.com/74629111/227905248-38f5a129-50d9-4550-a39b-5778a4b081d2.png">
<img width="1440" alt="landing_page4" src="https://user-images.githubusercontent.com/74629111/227905282-24ac9353-e155-428d-a0ba-666b771cd4c5.png">

# Product Shipping Page
After you click on the section for buying our product you will be sent to the product shipping page where you will have to put your shipping information.  Each input is validated using JavaScript, it shows an error if you put wrong data in the inputs. When you submit the information you have put in the inputs will be saved in cookies. And then you will be taken to the checkout page.

# Checkout Page
The Checkout Page is kind of similar to the Product Shipping Page, you will have to enter some information about your payment. But in the left side you will se shipping data that we retrieved from cookies using JavaScript. Inputs are also validated client side and server side. After we fill the data and submit them the information will be sent in a PHP script using AJAX. Then the data from the Product Shipping Page together with Checkout Pages's data will stored in the database using PHP. 

# Thankyou Page
After submiting the data in the Checkout Page you will be sent in Thank you page. You will see that your order has been done succesfuly, and there is a button that when you click it send you back home.
