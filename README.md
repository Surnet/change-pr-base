# Deprecated

Please use the GitHub CLI for this use case.
```yaml
- name: Change Base of PR
  run: |
    gh pr edit $PR_NUMBER --repo $REPO --base $BASE_BRANCH
  env:
    REPO: Owner/Repository
    PR_NUMBER: 11
    BASE_BRANCH: new-base-branch
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```


# change-pr-base

This action changes the Pull Request's base branch.

## Inputs

## `repo`

**Required** The repository name with syntax Owner/Repository

## `pull-number`

**Required** Number of the pull request to change

## `new-base`

**Required** The name of the branch that shall be changed

## `token`

**Required** GitHub Token

## Example usage

```yaml
name: Change Base of PR
uses: Surnet/change-pr-base@v1.0
with:
  repo: Owner/Repository
  pull-number: 11
  new-base: new-base-branch
  token: ${{ secrets.GITHUB_TOKEN }}
```
