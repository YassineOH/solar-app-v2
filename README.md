# solar-app-v2

**N.B**: This is my second version of the same app.

<hr />

As I renewable energy engineer I try always to merge my academic knowledge with my passion of _web development_. <br />
This is a **fullstack** app that shows the economic and environmental benefits of having a photovoltaic installation.

## The backend.

The backend consists of small express application. It has two controllers, one for fetching meterological data _(because of CORS policy imposed by the api)_, the second for registering the client request in mysql DB.

## The frontend

The frontend uses **React.js** as a core library with other packages to enhance the UI like _tailwindcss_ and _healessui_, it's also storybook to test the components in isolated environnement.<br />

the run the application you need to **env variables**: <br />

```.env
DATABASE_URL=your_mysql_url
VITE_MAPS_API_KEY=google_map_api_GCP
```

<br />

to run the frontend:

```sh
cd client && npm i && npm run dev
```

<br />

to run the backend

```sh
npm run dev
```
