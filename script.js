function processDemo() {

  const input = document.getElementById("videoLink");
  const message = document.getElementById("demoMessage");

  if (input.value.trim() === "") {

    message.innerText =
      "Please paste an authorized video link first.";

    message.style.color = "#b8ff3d";

    return;
  }

  message.innerText =
    "Video link received. Real processing will be connected in the next step.";

  message.style.color = "#b8ff3d";
}