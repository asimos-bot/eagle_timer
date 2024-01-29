const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 1,
  shared: true
});

const buffer = new DataView(memory.buffer)

async function show() {
  console.log(buffer.getBigUint64(0, true))
}

async function start() {
  // shared memory


  // get clock wasm
  const response = await fetch("./clock.wasm");
  const module = new WebAssembly.Module(await response.arrayBuffer());
  const clockWorker = new Worker('./clock.js');
  clockWorker.postMessage({module: module, memory: memory}) 
}

window.onload = () => {
  document.getElementById("btn-start-script").onclick = start;
  document.getElementById("btn-show-counter").onclick = show;
}

