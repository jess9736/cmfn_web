const nav = function (name) {
  if (!name)
    return `<ul class="app__header" role="nav">
      <li><a id="home" href="#">Home</a></li>
      <li><a id="Menu" href="#menu">Menu</a></li>
      <li><a id="incr" href="#login">Incription</a></li>
      <li><a id="Test" href="#test">Test</a></li>
    </ul>`;
  return `  <strong><a>${name}</strong></a>`;
};

export default nav;
