function ClickSquare(){
  var tableStyle = document.getElementById('table-style');
  var selectedElement;

  tableStyle.onclick = function(event) {
    var target = event.target;
      if (target.tagName == 'TD') {
        setRedlight(target);
        return;
      }
    target = target.parentNode;
  }

  function setRedlight(node) {
    if (selectedElement) {
      selectedElement.classList.remove('redlight');
    }
    selectedElement = node;
    node.classList.add('redlight');
  } 
}

ClickSquare();   