async function fetchData() {
    const [userData, postData] = await Promise.all([
      fetch('https://api.example.com/user'),
      fetch('https://api.example.com/post')
    ]);
  
    const userDataJson = await userData.json();
    const postDataJson = await postData.json();
  
    return { userData: userDataJson, postData: postDataJson };
  }
  