let data = ''

function getJsonSchema(url) {
  fetch(url).then(function (response) {
    return response.json
  })
}
