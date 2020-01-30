function generateHtml({ avatar_url, name, location, html_url, blog, bio, public_repos, followers, following, starRepos }) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>${name}'s Resume</title>
    <style>
        .card{
            width:30rem;
            height:11rem;
            margin-bottom:40px;
            margin-top:30px;
        }
       
    </style>
</head>

 <div class="row justify-content-center">
    <div class="col col-md-auto">
    <div id="nameInfo" class="card text-center" style="width: 30rem;">
        <img src="${avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">${name}</p>
            <a href="http://www.google.com/maps/place/${location}" target="_blank">${location}</a>
            <a href="${html_url}" target="_blank">Github</a>
            <a href="${bio}" target="_blank">Blog</a>
        </div>    
    </div>
  </div>

    
    </div>
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
                    <p class="card-text">${starRepos}</p>
                </div>
            </div>
        </div>
    </div>

</body>

</html>`;
}

module.exports = {
    generateHtml : generateHtml
  }