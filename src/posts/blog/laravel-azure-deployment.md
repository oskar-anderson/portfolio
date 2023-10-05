---
slug: "laravel-azure-deployment"
title: "Deploying Laravel to Azure"
slugDirectory: "blog/"
thumbnail: "/static/img/blog/laravel-azure-deployment/thumbnail.png"
intro: "How to deploy Laravel to Azure"
tags: ["tech"]
minToRead: 6
publishedDate: "04.10.2023"
authorName: "Karl Oskar Anderson"
---

Laravel comes prepackaged with Sail library since early 2021. Sail is used to scaffold a new Laravel project running on Docker. It provides a lightweight CLI for interacting with Laravel's default Docker setup. This speeds up development as there is no need to setup Docker manually.

Applications running in Docker Linux containers work faster when configured to use the Linux filesystem through WSL.

Here is a rundown on setting up a Windows development environment and scaffolding a Laravel Sail project and getting it deployed on Azure.

### WSL setup
WSL should be installable by running `wsl --install`. Personally that did not work out of the box for me as I got "WslRegistrationDistribution failed with error: 0x80370114" error message. Instead I had to install WSL though the Microsoft Store first and then run `wsl --install` that will setup also Ubuntu default distro environment. Running `ubuntu` command will now open a Ubuntu terminal.

Opening the terminal should ask to setup a user account. Sometimes the Ubuntu environment gets created without a user account. To fix this run `sudo useradd -m wsl-anderson`, set the password `sudo passwd wsl-anderson`, login into the created account using `login` and switch from sh shell to bash `bash`. Alternatively, the easier solution would be to uninstall and start from scratch.

Make sure that you are using WSL version 2 by running `wsl -l -v`.

Development is going to happen inside WSL directory. When it comes to tools, there is an VSCode WSL extension that adds better support for autocompletion and running commands.

[Official docs](https://learn.microsoft.com/en-us/windows/wsl/install)

### Docker

Docker setup is really straight forward. Just download and run the installation executable with default configuration (WSL 2 instead of Hyper-V). After installation you should be instructed to close the window and log out. Do it. 

[install here](https://www.docker.com/products/docker-desktop/)


### Laravel

Scaffold Laravel project using the recommended way with Laravel Sail. First make sure Docker Engine is running (start Docker Desktop). Then open the WSL Ubuntu terminal, `mkdir --parents dev/PROJECT_NAME && cd dev/PROJECT_NAME`. Then run `curl -s https://laravel.build/backend?with=pgsql | bash`. I do not recommend running the `curl` command without arguments, if you do not like Postgres you can see a full list of supported arguments [here](https://laravel.com/docs/10.x#choosing-your-sail-services). 


__Troubleshooting - Docker in not running__


Go to `Docker Desktop -> Settings -> Resources -> WSL integration` Check "Enable integration with my default WSL distro". Check the installed Linux distro (most likely named Ubuntu) "Enable integration with additional distros".

This step should only be tried if the error occurred as sometimes WSL works with "Enable integration with additional distros" disabled as well.

[Solution link](https://stackoverflow.com/questions/65467799/laravel-sail-is-not-working-properly-in-ubuntu-20-04-lts)



### PHPStorm IDE

PHPStorm can be installation can be found [here](https://www.jetbrains.com/phpstorm/).

Once installed open the Laravel app. PHPStorm might not support displaying for the WSL distro, so open the directory manually.
`File -> Open -> \\wsl$\Ubuntu\home\your_username\dev\PROJECT_NAME\backend`.


### PHP

Install PHP and Composer in WSL, this is needed to generate `vendor` directory. The newly scaffolded Laravel project should already contain the vendor directory, but this step is needed for dealing with Git as the directory is ignored by Git.

First install PHP. The version does not have to strictly match with app PHP version.
```bash
sudo apt update
sudo apt install php

# While at it also add a database driver for executing migration
sudo apt install php-pgsql
```

Then install Composer PHP dependency manager.
```bash
# Install Composer - https://getcomposer.org/download/
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

# By default there might be some strange behavior when Composer is also installed locally
which composer
# If this is prints /mnt/c/ProgramData/ComposerSetup/bin/composer there might be some unexpected future behavior
# Moke the composer install global just in case
sudo mv composer.phar /usr/local/bin/composer
# Check if everything works
which composer
# This should now print /usr/local/bin/composer

# Generate vendor directory. This should fail due to some missing extensions
composer install

# Needed for composer
sudo apt install php-xml
sudo apt install php-curl
sudo apt install php-zip

composer install
```

Finally you can start the app by running `./vendor/bin/sail up -d` and visiting http://localhost:80. You should see the default Laravel new project view.

__Troubleshooting__: localhost shows "Apache2 Default Page" - The website being displayed is not from the container. Something crashed the container. Check logs.



### Adjusting docker settings
Before deploying the application, we must be able to create a working local Docker production image. This requires changing Docker configuration.

The deployment docker-compose is a little different than the one use for development. The main difference is that the application does not use volumes that are shared between the local machine and running container. The production container is based on a Docker image that already has all the application code copied over.

In order to customize the default Docker setup run:
```bash
sail artisan sail:publish
```
This will move the Dockerfile and other configuration out of the Laravel Sail vendor folder.

Next, create a copy of `docker-compose.yml` named `docker-compose-prod.yml`. Remove these lines from the app container:
```yml
#        volumes:
#            - '.:/var/www/html'
```

Change the `context` and `dockerfile` lines to make sure that the coping happens from the correct path:
services:
```yml
services:
    webapp:
        build:
            # context: ./docker/8.2
            # dockerfile: Dockerfile
            context: .
            dockerfile: docker/8.2/Dockerfile-prod
```

Make a copy of the previously used Dockerfile and name it "Dockerfile-prod". 

Replace these lines:
```dockerfile
RUN setcap "cap_net_bind_service=+ep" /usr/bin/php8.2

RUN groupadd --force -g $WWWGROUP sail
RUN useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u 1337 sail


COPY start-container /usr/local/bin/start-container
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY php.ini /etc/php/8.2/cli/conf.d/99-sail.ini

RUN chmod +x /usr/local/bin/start-container

EXPOSE 8000
```



with these:
```dockerfile

RUN setcap "cap_net_bind_service=+ep" /usr/bin/php8.2

COPY . /var/www/html

COPY ./docker/8.2/start-container /usr/local/bin/start-container
COPY ./docker/8.2/supervisord-prod.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./docker/8.2/php.ini /etc/php/8.2/cli/conf.d/99-sail.ini

RUN chmod +x /usr/local/bin/start-container

EXPOSE 8000

ENTRYPOINT ["start-container"]
```

The sail user is removed as it will cause the app to crash due to permission issues accessing `storage/logs` directory. In addition the user needs to be removed from "suprevisord.conf" file as well. Create a copy of "supervisord.conf" named "supervisord-prod.conf" and comment out the user:
```ini
# This causes problem with deployment - https://stackoverflow.com/questions/47574727/supervisor-invalid-user-name
# user=sail
```

Lastly add these lines to .env to make sure it is configured for deployment:
```ini
# https://stackoverflow.com/questions/50552970/laravel-docker-the-stream-or-file-var-www-html-storage-logs-laravel-log-co
WWWGROUP=1000
WWWUSER=1000
```

Finally, create the images and the container. Then validate that everything works by opening the running container app in a browser:
```php
// Run in `/backend` directory
./vendor/bin/sail -f docker-compose-prod.yml up -d
// Open browser http://localhost:8081/
```

### Deployment to Azure
Deployment is done using Docker images pushed to Docker Hub.

#### Run the app
Create the images and the container.
```php
// Run in `/backend` directory
// Running and building the app in one step
./vendor/bin/sail -f docker-compose-prod.yml up -d

// Building and running the app as separate steps
./vendor/bin/sail -f docker-compose-prod.yml build
docker run -d --restart=always -p 8080:80 sail-8.2/app:latest
```

#### Docker Hub
Images need to be tagged for publishing
```bash
docker tag [local_image_name] [username]/[remote_image_name]:[tagname: latest | test]
```

Publish docker image to registry:
```bash
# Manual login is not the best practice, but it does works
docker login -u [username] -p [password]
# Replace name templates with your name values
docker push username/remote_image_name:latest
```


### Azure
Login to Azure - https://portal.azure.com.

Navigate to `Azure services -> App Services -> Create -> Web App`.

Specify these settings in tabs:

#### Basics:

* Create new resource group - easy to kill everything later in one go
* Instance name – some_website_name.azurewebsites.net
* Publish: Docker image
* Operating system: Linux
* Location: North Europe
* Sku and size: Free F1

#### Docker:

* Options: Single Container
* Image Source: Docker Hub
* Access Type: Public
* Image and tag: [your_repo/your_image:your_tag]

That should be all. Click `Review + create -> create`. 
Deployment should take 2 minutes. 
Click "Go to resource". There should be a link to the deployed app.
Check out the app link, link should be like this https://some_website_name.azurewebsites.net.


### Summary

This guide went over all the steps needed to setup a development environment for working on a Laravel Sails project. In addition it covered deployment the app to Azure. 

Hopefully it proves to be a helpful.