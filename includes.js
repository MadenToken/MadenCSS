document.getElementById("navbar").innerHTML = `
<div class="row surface row-items-hor-center row-gutter-1" style="height: 50px;">
  <!-- Logo -->
  <div class="col res-col-2 col-items-hor-center">
    <div style="color:#f0bb0c" class="fs-xxl"><a href="index.html">MADENIX</a></div>
  </div>
  <!-- Menu -->
  <div class="col res-col-9 col-items-hor-center fs-xl">
    THIS PAGE IS MADE WITH MadenCSS
  </div>
</div>
`;

document.getElementById("footer").innerHTML = `
<div class="row surface on-surface mt-1">
  <div class="col-12 text-center p-3">
    &copy; 2025 MADENIX all free to use
    <a href="emptyTemplate.html">Empty Template</a>
  </div>
</div>
`;

document.getElementById("leftMenu").innerHTML = `
    <h3 class="m-1">HOME</h3>
    <ul class="m-1">
      <li><a href="#">Get Started</a></li>
      <li><a href="#">Grids</a></li>
      <li><a href="#">Colors</a></li>
    </ul>
    <h3 class="m-1 mt-3">COMPONENTS</h3>
    <ul class="m-1">
      <li><a href="#">Alerts</a></li>
      <li><a href="#">Buttons</a></li>
      <li><a href="#">Cards</a></li>
      <li><a href="#">Collapsible</a></li>
      <li><a href="#">Forms</a></li>
      <li><a href="#">Heros</a></li>
      <li><a href="#">Navbars</a></li>
      <li><a href="#">Modals</a></li>
      <li><a href="#">Tables</a></li>
    </ul>
`;
