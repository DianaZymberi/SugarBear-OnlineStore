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
<img width="1438" alt="Screen Shot 2023-03-27 at 12 03 05" src="https://user-images.githubusercontent.com/74629111/227910515-1b9d9290-215c-4047-9ae0-3bae681748e3.png">

# Product Shipping Page
After you click on the section for buying our product you will be sent to the product shipping page where you will have to put your shipping information.  Each input is validated using JavaScript, it shows an error if you put wrong data in the inputs. When you submit the information you have put in the inputs will be saved in cookies. And then you will be taken to the checkout page.
<img width="1437" alt="shipping_page1" src="https://user-images.githubusercontent.com/74629111/227905553-6a7ea56a-e083-4582-83d3-48c2bf52d558.png">
<img width="1305" alt="Screen Shot 2023-03-27 at 12 02 49" src="https://user-images.githubusercontent.com/74629111/227910590-17c7fe1e-6699-433f-9b0a-f137a6b1ab0a.png">

# Checkout Page
The Checkout Page is kind of similar to the Product Shipping Page, you will have to enter some information about your payment. But in the left side you will se shipping data that we retrieved from cookies using JavaScript. Inputs are also validated client side and server side. After we fill the data and submit them the information will be sent in a PHP script using AJAX. Then the data from the Product Shipping Page together with Checkout Pages's data will stored in the database using PHP.
 <img width="1405" alt="checkout_page" src="https://user-images.githubusercontent.com/74629111/227905588-69865321-b1f2-4c3f-abb9-629b0303bfc0.png">
<img width="1244" alt="Screen Shot 2023-03-27 at 12 03 30" src="https://user-images.githubusercontent.com/74629111/227910641-f667708c-9fec-4809-897a-aa6343e5f1cf.png">


# Thankyou Page
After submiting the data in the Checkout Page you will be sent in Thank you page. You will see that your order has been done succesfuly, and there is a button that when you click it send you back home.
<img width="1217" alt="thankyou_page" src="https://user-images.githubusercontent.com/74629111/227905621-61066078-465f-42ea-a5a2-b424a7c72a85.png">


