# Contributing to Podcast List Updater

Thank you for your interest in contributing to my podcast list! This guide will help you understand how to use this script and easily add new podcasts to the list. If you have any questions or need help, feel free to open an issue in the repository, and we'll do our best to assist you.

## Prerequisites

Before you can run the script or contribute, ensure you have the following installed on your machine:

- Node.js (Download and install from [Node.js official website](https://nodejs.org/))
- Git (Download and install from [Git official website](https://git-scm.com/))

## Setting Up Your Environment

1. **Fork the Repository**: Start by forking the repository to your GitHub account.

2. **Clone the Repository**: Clone the repository to your local machine using Git:

```bash
git clone https://github.com/<your-username>/podcast-list-updater.git
```

3. **Install Dependencies**: Navigate into the project directory and install any required dependencies:
   cd podcast-list-updater
   npm install

## How to Use the Script

The script is designed to insert a new podcast into a specified position within the `README.md` file's "My favorites" section. To run the script, use the following command syntax:

```bash
node add-podcast.js "[position]" "[Podcast Name]" "[Podcast URL]" "[Language]"
```

- `"[position]"` is the numeric position where you want to insert the new podcast. (e.g., `1` for the first position)
- `"[Podcast Name]"` is the name of the podcast you're adding.
- `"[Podcast URL]"` is the link to the podcast.
- `"[Language]"` is the language of the podcast (e.g., `EN` for English).

Example:

```bash
node add-podcast.js "2" "New Podcast" "https://newpodcast.com" "EN"
```

## Contributing Changes

1. **Create a New Branch**: Before making changes, create a new branch for your work:

```bash
git checkout -b <branch-name>
```

2. **Make Your Changes**: Implement your changes or improvements to the script or documentation.

3. **Commit Your Changes**: Once you're satisfied with your changes, commit them to your branch:
   git add .
   git commit -m "A descriptive commit message"

4. **Push Your Changes**: Push your changes to your forked repository:
   git push origin <branch-name>

5. **Create a Pull Request**: Go to the original repository on GitHub, and you'll see an option to create a pull request from your branch. Fill out the pull request form with a description of your changes.

## Need Help?

If you have any questions or need assistance, feel free to open an issue in the repository, and we'll do our best to help you out.

Thank you for contributing to the podcast list!
