self.onmessage = function(e) {
  const {module, memory} = e.data;
  const instance = new WebAssembly.Instance(module, {
    js: { mem: memory }
  });
  console.log("clock instance created")
  console.log(instance.exports.counter())
}
