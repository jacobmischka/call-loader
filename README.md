Calls the default export of an ECMAScript module instead of exporting it, and exports the result. Essentially [apply-loader][apply-loader] for ECMAScript modules, minus any configuration options or arguments.

This is extremely simplistic as it's meant to fulfill a simple use case. Anything much more complicated and you should probably just call the function by hand after importing it.

In fact, you should probably just do that anyway.

[apply-loader]: https://www.npmjs.com/package/apply-loader
