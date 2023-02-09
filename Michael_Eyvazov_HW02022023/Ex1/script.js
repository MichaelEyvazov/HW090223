document.querySelector('button').addEventListener('click',()=>{
    const data = {
        firstname: document.querySelector('#firstname').value,
        lastname: document.querySelector('#lastname').value,
        age: document.querySelector('#age').value,
        country: document.querySelector('#country').value,
        hometown: document.querySelector('#hometown').value,
    };
    localStorage.setItem('savedData',JSON.stringify(data));

    refresh();
});

let refresh = () =>{
    let stored = JSON.parse(localStorage.getItem('savedData'));
    document.querySelector('#output').innerText = 
    `First name: ${stored.firstname}
    Last name: ${stored.lastname}
    Age: ${stored.age}
    Country: ${stored.country}
    Hometown: ${stored.hometown}
    `
};

refresh();