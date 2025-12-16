
const getData = async () => {
    const keyword = document.getElementById("keywordInput").value;
    const url = "https://jsonplaceholder.typicode.com/users?id=" + keyword;
    if (!keyword) {
        alert("Please enter a keyword");
    }
    const data = await fetchData(url);
    displayData(data);
}

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

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
