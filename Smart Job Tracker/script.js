function addJob() {
  let company = document.getElementById("company").value;
  let role = document.getElementById("role").value;
  let status = document.getElementById("status").value;

  if (company === "" || role === "") {
    alert("Please fill all fields");
    return;
  }

  let jobDiv = document.createElement("div");
  jobDiv.classList.add("job");

  jobDiv.innerHTML = `
    <h3>${company}</h3>
    <p>${role}</p>
    <p>Status: ${status}</p>
  `;

  document.getElementById("jobList").appendChild(jobDiv);

  // Clear inputs
  document.getElementById("company").value = "";
  document.getElementById("role").value = "";
}