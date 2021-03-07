let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

var myCode = `
let savedHtmlText = document.documentElement.innerHTML;
document.documentElement.innerHTML = 'NEW LORD IN THE JUNGLE<br>' + savedHtmlText;
`;

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
         {code: 'document.body.style.color = "' + color + '";'});
            // {code: 'document.body.style.backgroundColor = "' + color + '";'});
        // {code: 'document.documentElement.innerHTML = " I tried setting the color to: ' + color + '";'});
        //   {code: myCode});
    });
  };