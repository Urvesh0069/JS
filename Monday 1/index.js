function total() {
  let unit = document.getElementById('units').value;

  if (unit <= 50)
  {
    document.getElementById('total').innerHTML = unit * 5 + 100;
  }
  else if (unit > 50 && unit <= 100)
  {
    document.getElementById('total').innerHTML = (unit - 50) * 10 + 350;
  }
  else if (unit > 100 && unit <= 150)
    {
      document.getElementById('total').innerHTML = (unit - 100) * 15 + 850;
    }
  else if (unit > 150 && unit <= 250) {
    document.getElementById('total').innerHTML = (unit - 150) * 20 + 1600;
  }
  else {
    document.getElementById('total').innerHTML = (unit - 250) * 25 + 3600;
  }
}

// alert('Total')
