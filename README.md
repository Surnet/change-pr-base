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
uses: ./actions/change-pr-base
with:
  repo: Owner/Repository
  pull-number: 11
  new-base: new-base-branch
  token: ${{ secrets.GITHUB_TOKEN }}
```