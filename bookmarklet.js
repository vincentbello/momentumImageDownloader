// extension id = laookkfknpbbblfpciffpaejjkokdgca
javascript: (
  function () {

  var toCamelCase = function(str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/,\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
  }

  var background = document.querySelector('#background > li'),
      extId = 'laookkfknpbbblfpciffpaejjkokdgca',
      errorMessage = 'You must be on a new tab & have Momentum installed.';
  if (document.title === 'New Tab' && background) {
    var style = background.getAttribute('style');
    if (style.indexOf(extId) > -1) {
      var url = style.substring(style.indexOf('(') + 1, style.indexOf(')')),
          description = document.querySelector('#background-info > span.title'),
          filename = (description) ? toCamelCase(description.innerHTML) : url.substring(url.lastIndexOf('/') + 1).split('?')[0],
          xhr = new XMLHttpRequest();

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function () {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        delete a;
      };
      xhr.open('GET', url);
      xhr.send();
    } else {
      alert(errorMessage);
    }
  } else {
    alert(errorMessage);
  }

}
());