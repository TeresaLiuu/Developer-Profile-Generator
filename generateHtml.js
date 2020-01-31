function generateHtml({ avatar_url, name, location, html_url, blog, bio, public_repos, followers, following, star_repos }) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c9c3a0343e.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <title>${name}'s Resume</title>
        <style>
        .card {
            width: 30rem;
            height: 8rem;
            margin-bottom: 40px;
            margin-top: 30px;
            
        }

        .rounded-circle {
            position: relative;
            height: 250px;
            width: 250px;
            border: 10px solid white;
            margin-top: 30px;
        }

        #nameInfo {
            width:65rem;
            height: 400px;
            position: absolute;
            display: flex;
            justify-content: center;
            margin-top: 200px;
            padding-top: 100px;
        }

        a {
            display: inline-block;
            margin-right: 40px;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 25px;
            font-weight: 900;
            color: white;
            background-color: lightgray;
        }

        #container {
            position: relative;
        }
        #githubInfo{
            padding-top: 400px;
            background-color: lightcyan;
        }
    </style>
    </head>
    
    <div id="container" class="text-center">
        <div class="row justify-content-md-center">
        <div id="nameInfo" class="card mx-auto">
            <div class="card-body">
                <p class="card-text">${name}</p>
                <p>Bio : ${bio}</p>
                <a href="https://www.google.com/maps/place/${location}" target="_blank">
                <span><i class="fas fa-map-marker-alt"></i></span>${location}</a>
                <a href="${html_url}" target="_blank">
                <span><i class="fab fa-github-alt"></i></span>Github</a>
                <a href="${blog}" target="_blank" class="fas fa-rss">Blog</a>
            </div>
        </div>
        </div>
        <img class="rounded-circle" src="${avatar_url}"  alt="...">
    
    
    <div id="githubInfo">
    <div class="row  justify-content-around">
            <div class="col-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Public Repositories</h5>
                        <p class="card-text">${public_repos}</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Followers</h5>
                        <p class="card-text">${followers}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row  justify-content-around">
            <div class="col-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Follwing </h5>
                        <p class="card-text">${following}</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Github stars </h5>
                        <p class="card-text">${star_repos}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    
    </body>
    
    </html>`;
}



module.exports = {
    generateHtml: generateHtml,
}