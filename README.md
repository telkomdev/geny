### Geny

Project template for creating CLI App with `Nodejs`

#### Development mode

The npm link command allow us to locally ‘symlink a package folder’, and for our needs, it will locally install any command listed in the bin field of our package.json.

The npm link command is used from within the NodeJS package directory we want to symlink:

```shell
$ node link
```

Now we can executed from anywhere

```shell
$ geny
```