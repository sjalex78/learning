function hello() {
  return 'hello world'
};

// NOTE: need module.exports as we are doing a "require" in run.sh
//       otherwise could have been
//         export function hello() {
//       OR
//         export { hello }
module.exports = {
  hello: hello
}
