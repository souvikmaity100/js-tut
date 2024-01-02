const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

