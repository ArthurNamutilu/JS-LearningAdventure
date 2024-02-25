async function fetchData() {
    try {
      const data = await fetch('https://api.example.com/data');
      return data.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  