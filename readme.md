# How to run?

Clone the repository in your machine, and then run the following commands

```bash

npm install
# to install node dependencies, you can also use yarn instead

docker build -t some-amazing-name:1.0 ./
# building docker image following the steps given on ./Dockerfile

docker run -p 3333:8080 generated_image_hash # this goes the image hash
#              ↑
#  Local port to redirect docker
```
