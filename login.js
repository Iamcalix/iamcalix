function showform(formId){
    document.querySelectorAll(".formbox").forEach(form=> form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}
 