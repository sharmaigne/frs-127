<h1>Initial Setup</h1>

_Welcome to our repo!_

### step #0: install node

make sure you have node installed, preferably the latest but I think anything from v18 works.

### step #1: clone the github repository

in your terminal, navigate to the directory you want to add the project on and run:

```bash
git clone https://github.com/sharmaigne/frs-127.git
```

This will create a new folder called `frs-127` in your current directory.

### step #2: install the dependencies

you should now have a copy of the `dev` branch in your directory.

Navigate to the `frs-127` folder and check the branch using the command

```bash
git branch
```

Now, you have the code but not the dependencies. Install them through this command:

```bash
npm i
```

### Running the Dev Server

After installing the dependencies, you're ready to run the app.

In your terminal, run

```bash
npm run dev
```

and follow the link provided (usually localhost 3000)

Congrats! You've successfully setup the project.

<br>
<h1>Git Workflow</h1>

This section will guide you through the basics of git and github.

Wait actually kapoy sulat T - T next time nalang ni.

<br>

# Style Guide
**Note:** This will not be enforced super strictly, but do take note of them as practice for real world conventions.

## Git
### Branch Naming

We follow the usual naming conventions for git branches.

See the cheatsheet here: [Naming Conventions for Git Branches](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534)


### Commits

Follow conventional commits. See [here](https://www.conventionalcommits.org/en/v1.0.0/).


## Next JS
### Avoid `any` type
This is an antipattern. It gets rid of the the benefits of type-safety and will be harder to debug in the long run. If you get an error with typescript that can be fixed by using `any`, ask first.

### Arrow Functions
In JS, functions can be written either anonymously as arrow functions, or with the usual syntax.

For consistency's sake, we will be using arrow functions in all cases unless there is clear reason not to.

**Example:**
```TypeScript
// This is a normal function
export default function Navbar() {
    return (
        <nav> I am a navbar <nav>
    )
}
```
```TS
// This is an arrow function
const Navbar = () => {
    return (
        <nav> I am a navbar <nav>
    )
}

export default Navbar
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
