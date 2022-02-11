let routes = {};
let templates = {};

let app_div = document.getElementById('app');

function home(){
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'About';

    div.innerHTML = <h1>Home</h1>;
    div.appendChild(link);

    app_div.appendChild(div);
};

function about() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'Home';

    div.innerHTML = '<h1>About</h1>';
    div.appendChild(link);

    app_div.appendChild(div);
};

function route(path, templates){
    if(typeof template === 'Function'){
        return routes[path] = template;

    }else if(typeof template === 'string'){
        return routes [path] = templates[template];

    }else{
        return;
    };
};

function template(name, templateFunction) {
    return templates[name] = templateFunction;
};

template('home', function(){
    home();
});

template('abaout', function(){
    about();
});

route('/', 'home');
route('/about', 'about');

function resolveRoute(route) {
    try {
        return routes[route];
    } catch {
        throw new Error(`Route ${route} not found`);
    };
};