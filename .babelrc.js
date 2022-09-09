
const presets = [];
const plugins = [];

// For JEST
if (import.meta.env["VITE_APP_ENV"] === "test") {
    presets.push("react-app");
    plugins.push([
        "@babel/plugin-transform-react-jsx",
        {
            "runtime": "automatic"
        }
    ]);
}
  
module.exports = {presets, plugins};
