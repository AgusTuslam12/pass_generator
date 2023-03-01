let copyPass = document.getElementById("hasilpass")
let copyhash = document.querySelector(".hash-pass .copy-hash")

copyPass.addEventListener("click", () => {
    navigator.clipboard.writeText(password.value);
    copyPass.classList.replace("uil-copy", "uil-file-check-alt"); //replace iconeplace icon
  });

  copyhash.addEventListener("click", () => {
    navigator.clipboard.writeText(hash.value);
    copyhash.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
  });