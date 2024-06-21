const nav = function (params) {
  if (!params)
    return `<ul class="app__header" role="nav">
      <li><a id="home" href="#">Home</a></li>
      <li><a id="Menu" href="#menu">Menu</a></li>
      <li><a id="incr" href="#login">Incription</a></li>
      <li><a id="Test" href="#test">Test</a></li>
    </ul>`;
  return `<ul><li><a>produit</a></li></ul>`;
};

export default nav;
