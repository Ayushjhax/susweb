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
  if (auth.isAuthenticated()) {
    hideSignUpButton();
  }
};

function setHooks() {
  provider("connect", async (params) => {
    console.log({ type: "connect", params: params });
    hideSignUpButton();
  });
}

function hideSignUpButton() {
  const registerButton = document.getElementById("registerLink");

  if (registerButton) {
    registerButton.style.display = "none";
  }
}

async function connect() {
  const provider = await auth.connect();
  alert("Successfully connected");
  window.location.href = "front.html";
}
