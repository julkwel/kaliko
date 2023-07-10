const ingredients = ['Atody'];
const mainItems = ['Matsiro', 'Presto', 'Sedap'];
const btnGenerator = document.getElementById('run-generator');
const mainHolder = document.getElementById('main-holder');
const ingHolder = document.getElementById('ingredient-holder');
const btnClearResult = document.getElementById('clear-result');
const whishMessageContainer = document.getElementById('wishes-message');
const loadItContainer = document.getElementById("load-it");

btnGenerator.onclick = function() {
    loadIt(true);
    setTimeout(() => {
        loadIt(false);
        doGenerate();
        btnClearResult.removeAttribute('disabled');
        whishMessageContainer.style.display = 'block';
    }, 1000);
}

btnClearResult.onclick = function() {
    cleanRes();
    whishMessageContainer.style.display = 'none';
}

cleanRes = () => {
    mainHolder.innerText = '';
    ingHolder.innerText = '';
}

doGenerate = () => {
    mainHolder.innerText = '- ' + getMain();
    ingHolder.innerText = '- ' + getIngredient();
}

getMain = () => {
    return mainItems[Math.floor(Math.random()*mainItems.length)];
}

getIngredient = () => {
    return ingredients[Math.floor(Math.random()*ingredients.length)];
}

loadIt = (load) => {
    loadItContainer.style.display = load === true ? 'flex' : 'none';
}