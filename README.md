# Say thank you to GitHub issue creators

Say thank you to everyone who takes the time to create an issue in your Github repository, using serverless technology.

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)
[![Greenkeeper badge](https://badges.greenkeeper.io/johnpapa/serverless-thank-you.svg)](https://greenkeeper.io/)

[![Red-and-White-Dating-Presentation.jpg](https://i.postimg.cc/hvgMrn9F/Red-and-White-Dating-Presentation.jpg)](https://postimg.cc/5Y7w4Z7p)

Have you ever contributed to an OSS project on GitHub, perhaps creating an issue, and instantly received a reply? Wouldn't it be nice if that reply to your issue thanked you? This challenge is to automate creating holiday themed "thank you" replies to all issues created in one or more of your GitHub repositories.

The holiday season is a time for smiling more and taking the time to say thank you to those around us. Say thank you to everyone who takes the time to create an issue in your Github repository, using serverless technology.

You can use any technologies you prefer to solve this challenge. The solution included here uses GitHub, VS Code, and Azure Functions.

Enjoy your challenge and Happy Holidays!

-- [John Papa](https://twitter.com/john_papa)

## Resources and Tools 🚀

Tools

- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-0000-jopapa)**
- **[Azure Functions Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=javascript-0000-jopapa)**
- **[Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=javascript-0000-jopapa)**
- **[Free Azure Trial](https://azure.microsoft.com/free?WT.mc_id=javascript-0000-jopapa)**

Docs

- **[Azure Functions docs - Webhooks](https://docs.microsoft.com/azure/azure-functions/functions-bindings-http-webhook?tabs=csharp&WT.mc_id=javascript-0000-jopapa#webhooks&WT.mc_id=25daysofserverless-github-jopapa)**

- **[GitHub - Create a Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line?WT.mc_id=25daysofserverless-github-jopapa)**
- **[GitHub - Webhook documentation](https://developer.github.com/webhooks?WT.mc_id=25daysofserverless-github-jopapa)**
- **[GitHub API - IssuesEvent Reference](https://developer.github.com/v3/activity/events/types/#issuesevent?WT.mc_id=25daysofserverless-github-jopapa)**
- **[Octokit - GitHub REST API client for JavaScript](https://github.com/octokit/rest.js)** and **[Docs](https://octokit.github.io/rest.js/)**
- **[Learn - Monitor GitHub events by using a webhook with Azure Functions](https://docs.microsoft.com/learn/modules/monitor-github-events-with-a-function-triggered-by-a-webhook?WT.mc_id=javascript-0000-jopapa)**

## Getting Started 🔥

Here is how you can execute this application locally.

1. Install the tools

   - **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-0000-jopapa)**
   - **[Azure Functions Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=javascript-0000-jopapa)**
   - **[Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=javascript-0000-jopapa)**

2. Clone this repository

   ```bash
   git clone https://github.com/simonaco/serverless-challenges.git
   cd serverless-challenges/week-2/challenge-9/serverless-thank-you
   ```

3. Install the npm packages

   ```bash
   npm install
   ```

4. Rename `local.settings.example.json` to `local.settings.json` and paste your [Personal Access Token from GitHub](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line?WT.mc_id=25daysofserverless-github-jopapa) into the `githubKey` setting's value.

5. Run the app

   ```bash
   npm start
   ```

6. Make a POST request to your endpoint <http://localhost:7071/api/SayThankYou> sending the sample request JSON found in the file `sample.json`

   > Hint - you can use [Postman](https://www.getpostman.com/), [Insomnia](https://insomnia.rest/), or any HTTP tool to make the request.

## Next Steps 🏃

Learn more about serverless with Free Training!

- ✅ **[Serverless Free Courses](https://docs.microsoft.com/learn/browse/?term=azure functions&WT.mc_id=javascript-0000-jopapa)**

## Additional Resources ⭐️

Some additional awesome serverless resources

- ✅ **[Azure Functions documentation](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=javascript-0000-jopapa)**
- ✅ **[Azure SDK for JavaScript Documentation](https://docs.microsoft.com/azure/javascript/?WT.mc_id=javascript-0000-jopapa)**
- ✅ **[Create your first function using Visual Studio Code](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=javascript-0000-jopapa)**
- ✅ **[Free E-Book - Azure Serverless Computing Cookbook, Second Edition](https://azure.microsoft.com/resources/azure-serverless-computing-cookbook/?WT.mc_id=javascript-0000-jopapa)**

## I have doubts ... What do I do

If you have any doubts about the challenges, feel free to open an **[ISSUE HERE](https://github.com/simonaco/serverless-challenges/issues)**. As soon as possible we will be answering any questions/doubts that you may have!
