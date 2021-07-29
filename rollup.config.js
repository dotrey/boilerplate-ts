import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import typescript from "@rollup/plugin-typescript";

export default {
    // see https://rollupjs.org/guide/en/#big-list-of-options for config details
    input: "src/index.ts",
    external : [
        // Exclude imports from the bundle
        "jquery"
    ],
    output: {
        file: "./dist/bundle.js",
        // Use "iife" if the bundle is self-contained, or "es" to create a ES6 module
        format: "iife",
        // Name is required for the variable that holds the iife (not needed for "es")
        name : "MyBundle",
        globals : {
            // If there are global variables available, e.g. from another package.
            // You could also us a value like "window.some_var || undefined"
            "jquery" : "$"
        },
        sourcemap : true
    },
    plugins: [
        typescript(),

        nodeResolve({
            browser : true
        }),

        commonjs({
            include : "node_modules/**"
        }),

        filesize()
    ]
};