document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var anjumanId = document.getElementById("anjumanId").value;
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var amount = document.getElementById("amount").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;

    // Create the receipt URL with query parameters
    var receiptUrl = "receipt.html?" +
      "anjumanId=" + encodeURIComponent(anjumanId) +
      "&name=" + encodeURIComponent(name) +
      "&phoneNumber=" + encodeURIComponent(phoneNumber) +
      "&amount=" + encodeURIComponent(amount) +
      "&address=" + encodeURIComponent(address) +
      "&date=" + encodeURIComponent(date);

    // Redirect to the receipt page
    window.location.href = receiptUrl;
  });

  