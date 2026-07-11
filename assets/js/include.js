async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent("header", "../assets/components/header.html");
loadComponent("hero", "../assets/components/hero.html");
loadComponent("product", "../assets/components/product.html");
loadComponent("aboutus", "../assets/components/aboutus.html");
loadComponent("help", "../assets/components/help.html");
loadComponent("footer", "../assets/components/footer.html");