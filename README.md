This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project is a re-imagination of the home page from Ancourage Academy's website.

## Getting Started
(Before everything, ensure that you have node.js installed on your laptop. Check out [this link](https://nodejs.org/en/download).)

Firstly, ensure that you are in the project's folder to install all the necessary packages locally, run:

```bash
cd <path-to-the-project-folder>
npm insatll
```


**How to Deploy Locally**

First, run the development server:

```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**If You Want to Visualise It on Mobile Devices**

run:

```bash
npx next dev --hostname 0.0.0.0
```

Then in another window, run
```bash
ipconfig
```
to find out the ip address of your laptop in the LAN.
(let's say it's 192.168.0.112)

Then, on the mobile device, input [192.168.0.112:3000](http://localhost:3000) __(3000 is the default port)__ into the browser to view the webpage.