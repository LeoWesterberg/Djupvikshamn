export async function getData() {
    return fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var temp  = data.timeSeries[0].parameters[10].values[0]
        return temp
      });
  }
  