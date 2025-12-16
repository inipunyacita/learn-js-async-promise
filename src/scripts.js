
//this is a async function that called fetchData function using await means it will wait for the fetchData function to finish
const getData = async () => {
    const keyword = document.getElementById("keywordInput").value;
    const url = "https://jsonplaceholder.typicode.com/users?id=" + keyword;
    if (!keyword) {
        alert("Please enter a keyword");
    }
    const data = await fetchData(url);
    // below displayData function use for display the data in the table
    displayData(data);
}

// this is a async function that use for fetching the data from the API and get parameter url in the getData function
const fetchData = async (url) => {
    // we use try & catch to check the error while fetching the data from the API
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error);
    }
}

// this is a function that use for display the data in the table
const displayData = (data) => {
    const result = document.getElementById("resultArea");
    const resultTableHead = document.getElementById("resultTableHead");
    const resultTableBody = document.getElementById("resultTableBody");
    resultTableHead.removeAttribute("hidden");
    resultTableBody.innerHTML = "";
    for (items of data) {
        resultTableBody.innerHTML = resultTableBody.innerHTML + `
       <tr>
            <td>${items.id}</td>
            <td>${items.name}</td>
            <td>${items.username}</td>
            <td>${items.email}</td>
            <td>${items.phone}</td>
            <td>${items.website}</td>
        </tr>
       `
    };
}
