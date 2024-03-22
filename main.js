const { AuthProvider } = window.arcana.auth;

let provider;
const auth = new AuthProvider(
  "xar_test_4202ee73474195d8bfc5d14d7d1c78d8567eeff2"
);
provider = auth.provider;
setHooks();

window.onload = async () => {
  await auth.init();
  console.log("Auth initialization complete");

  // Check if the user is authenticated
  if (auth.isAuthenticated()) {
    hideSignUpButton();
  }
};

function setHooks() {
  provider("connect", async (params) => {
    console.log({ type: "connect", params: params });

    // Assuming "connect" indicates successful authentication
    hideSignUpButton();
  });
}

function hideSignUpButton() {
  // Get the register button element
  const registerButton = document.getElementById("registerLink");

  // If the user is authenticated, hide the registration button
  if (registerButton) {
    registerButton.style.display = "none";
  }
}

async function connect() {
  const provider = await auth.connect();
  alert("Successfully connected");
  window.location.href = "front.html";
}
