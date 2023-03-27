<?
$cardNumber = $_POST['cardNumber'];
$date = $_POST['date'];
$cvv = $_POST['cvv'];

// Validate the checkout data in server side
$errors = array();
if (empty($cardNumber)) {
    $errors['cardNumber'] = 'Card number is required';
}
if (empty($date)) {
    $errors['date'] = 'Expiration date is required';
}
if (empty($cvv)) {
    $errors['cvv'] = 'CVV is required';
}
$shippingData = array();
if(isset($_COOKIE['shippingData'])) {
    $shippingData = json_decode($_COOKIE['shippingData'], true);
}


// If there are validation errors, return them to the client
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode($errors);
    exit();
}

// Store the checkout and shipping data in a MySQL database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "xktask";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//insert values into the created table of created database
$sql = "INSERT INTO orders (card_number, date, cvv, name, surname, phone_number, email, zip, address, state) 
        VALUES (:card_number, :date, :cvv, :name, :surname, :phone_number, :email, :zip, :address, :state)";
$stmt = $pdo->prepare($sql);
$stmt->execute([
  'card_number' => $cardNumber,
  'date' => $date,
  'cvv' => $cvv,
  'name' => $shippingData['name'],
  'surname' => $shippingData['surname'],
  'phone_number' => $shippingData['phonenumber'],
  'email' => $shippingData['email'],
  'zip' => $shippingData['zip'],
  'address' => $shippingData['address'],
  'state' => $shippingData['state']
]);

// Execute the statement
if ($stmt->execute()) {
    echo "Order saved successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>