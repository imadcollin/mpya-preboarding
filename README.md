# MPYA Preboarding client


## Discription 

A simple Client-server application for creating ToDo list, this project is build using   

##### Keywords
ReactJs, Node, Express, Docker, Mlab, Java, MongoDB. 
### Installation

You need  [Npm.js]( https://www.npmjs.com/) 

Download  [Node.js](https://nodejs.org/)  to run.

Install the following Tools/Libraries in your local machine ****

```
Clone the project from Github or Donwlaod it 
```
#### Run 
```
npm install 
```
Navigate to:http://localhost:3000/

#### Docker 

```
docker build -t mpya-preboarding-test:dev . 
```

```
docker run  -it --rm -v ${PWD}:/app  -v /app/node_modules  -p 3001:3000 -e CHOKIDAR_USEPOLLING=true  mpya-preboarding-test
```

Navigate to: http://localhost:3001/ 

#### Docker compose

```
docker-compose up -d --build
```

#### Production 

```
docker build -f Dockerfile.prod -t mpya-preboarding-test:prod . 
```

```
docker run -it --rm -p 1337:80 mpya-preboarding-test:prod
```

Navigate to : http://localhost:1337/

Fire up the container 

```
docker-compose -f docker-compose.prod.yml up -d --build
```

#### DataBase 
Mlab. 

<!-- 
<img width="274" alt="Screenshot 2020-10-07 at 15 00 39" src="https://user-images.githubusercontent.com/15781725/95334100-f5bb7680-08ad-11eb-9281-25f1429fcdb8.png">
-

<img width="274" alt="Screenshot 2020-10-07 at 15 00 48" src="https://user-images.githubusercontent.com/15781725/95334069-e9371e00-08ad-11eb-928b-26a08dd8f35f.png">
 -->
