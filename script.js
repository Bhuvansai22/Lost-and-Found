 document.getElementById("menu-toggle").addEventListener("click", () => {
        document.getElementById("items").classList.toggle("active");
      });

      document.querySelectorAll("#items a").forEach((link) => {
        link.addEventListener("click", () => {
          document.getElementById("items").classList.remove("active");
        });
      });
  document.getElementById("lost-btn1").addEventListener("click", () => {
        document.getElementById("Report-Lost").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
  document.getElementById("found-item-btn").addEventListener("click", () => {
        document.getElementById("Report-Found").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      function reportlost(Itemname, Date, Title, Location, Info, Contact) {
        let html = `
  <div class="lost-cards">
    <h5 id="card-head">${Itemname}</h5>
    <h6 id="card-head1">${Date}</h6>
   <div class="card-img">
    <img id="sample-img" src="images/card.svg" alt="">
   </div>
    <p id="card-foot">${Title}</p>
    <h6 id="card-foot1">${Location}</h6>
    <p class="foot-cont">${Info}</p>
    <button id="contact">${Contact}</button>
</div>`;
        document.getElementById("cards").innerHTML += html;
      }
      reportlost(
        "Wallet",
        "14-Sep-2025",
        "Black Leather Wallet",
        "Library",
        "Contains ID card and cash",
        "Call: 9876543210"
      );

      function reportfound(Itemname, Date, Title, Location, Info, Contact) {
        let html = `
  <div class="found-cards">
    <h5 class="found-card-head">${Itemname}</h5>
    <h6 class="found-card-head1">${Date}</h6>
    <div class="found-card-img">
      <img class="sample-img" src="images/card.svg" alt="">
    </div>
    <p class="found-card-foot">${Title}</p>
    <h6 class="found-card-foot1">${Location}</h6>
    <p class="foot-cont">${Info}</p>
    <button class="found-contact-btn">${Contact}</button>
  </div>`;
        document.getElementById("found-cards").innerHTML += html;
      }

      reportfound(
        "Umbrella",
        "15-Sep-2025",
        "Blue Umbrella",
        "Cafeteria",
        "Found near the table",
        "Call: 9876543211"
      );

      document.getElementById("lost").addEventListener("click", () => {
        document.getElementById("Lost-items").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      document.getElementById("found").addEventListener("click", () => {
        document.getElementById("found-items-section").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });





      // Login
document.getElementById("login").addEventListener("click", () => {
  window.location.href = "login.html"; // opens in the same tab
});

       document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("⚠️ Please fill in all fields.");
      } else if (!email.includes("@")) {
        alert("⚠️ Please enter a valid email address.");
      } else if (password.length < 6) {
        alert("⚠️ Password must be at least 6 characters.");
      } else {
        alert("✅ Login Successful (demo).");
      
      }
    });
   
       document.querySelector(".google-btn").addEventListener("click", () => {
      alert("🌐 Google Login (demo only)");
    });

    document.querySelector(".facebook-btn").addEventListener("click", () => {
      alert("🌐 Facebook Login (demo only)");
    });
