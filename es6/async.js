async function fetchData() {
    const data = await fetch('https://api.example.com/data');
    return data.json();
  }
  