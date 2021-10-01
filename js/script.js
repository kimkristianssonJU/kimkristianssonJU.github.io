const gitApiUrl = "https://api.github.com/users/kimkristianssonJU/repos"

fetchData = async(url) => {
    const response = await fetch(url);
    const data = response.json();
    return data
}

customCreateElements = (tag, htmlClasses, parent) => {
    element = document.createElement(tag);
    htmlClasses.forEach(htmlClass => {
        element.classList.add(htmlClass);
    });
    parent.appendChild(element);
    return element;
}

createRepositoryList = async(url) => {
    const myReposData = await fetchData(url);

    let ulElement = customCreateElements("ul", ["list-group"], document.querySelector(".container"));

    myReposData.forEach(repos => {
        let liElement = customCreateElements("li", ["list-group-item"], ulElement);
        let anchorElement = customCreateElements("a", [], liElement);
        anchorElement.innerText = repos.name;
        anchorElement.href = repos.html_url;

    });
}

createRepositoryList(gitApiUrl);