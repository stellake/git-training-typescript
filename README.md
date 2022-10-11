# Git training (TypeScript)
This is a training exercise in dealing with and resolving conflicts using Git.

### Setup
1. Fork this repository.
   This is so that you can push the results of your work to a place that won't affect other people.
2. Clone the fork.
3. Open the project with an IDE of your choice.
4. Install the packages - ```npm install```
5. Run the tests - ```npm run test```

### Task
This repository has several branches.
Your task is to combine them into one that will contain the features of all of them.
Beware - conflicts lie ahead (that is, after all, the main point of the exercise)!

Branches in the repo:

* cleanup-computation
* compute-array
* handle-negatives
* handle-null
* main
* negative-recursion
* optional-recursion

### Correctness
Branches tend to include tests.
Conveniently, whoever wrote the tests made sure they are all in different files, so there should be no conflicts there.

Tests are always (supposed to be) right, and you should not need to edit them to make them pass.

### Stretch goals
There is more than one way to get to any goal, and resolving merge conflicts is no exception.
Here are some ideas for getting more out of the exercise:
* Try getting it done only using rebasing
* Try getting it done only using merging
* Try getting it done only with command line
* Try getting it done only with a git UI tool of your choice (e.g. any IDE with git support, GitKraken, etc.)

If you modified any of existing branches, you might want to explore ways of reverting it (without going for an overkill and re-forking the original repo):
* reflog
* adding remote to the original repo and resetting `--hard`
