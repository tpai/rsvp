RSVP
===

This repo is a presentation and RSVP for our wedding, it fully support fancy front end developing.

[![cover](https://i.imgur.com/nU9EfEz.jpg)](https://rsvp.tonypai.com.tw)

## Usage

Start development server

```
yarn dev
```

Build distribution files

```
yarn build
```

## Deployment

First, change the username` to `[YOUR_DOCKER_ACCOUNT_USERNAME]` in `build.sh`.

Then run this command:

```
sh ./build.sh [version]
```

> e.g. `sh ./build.sh 1.3.1`

Docker image will build and push to docker hub.

Pull image in any docker support platform, start container, and the port will be `3000`.

## Credits

- [Tigerfat](https://issuu.com/tigerfat)(My Wife): All design work and images.
- Me: Codes and deployment.
