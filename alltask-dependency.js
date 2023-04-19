const tasks = {
  a: {
    job: function () {
        console.log("a done");
    },
    depedencies: []
  },
  b: {
    job: function () {
        console.log("b done");
    },
    depedencies: []
  },
  c: {
    job: function () {
        console.log("c done");
    },
    depedencies: ["a", "b"]
  },
  d: {
    job: function () {
        console.log("d done");
    },
    depedencies: []
  },
  e: {
    job: function () {
        console.log("e done");
    },
    depedencies: ["a", "b"]
  },
  f: {
    job: function () {
        console.log("f done");
    },
    depedencies: ["d"]
  }
};

const done = new Set();
function run(name) {
  if (done.has(name)) return;
  done.add(name);
  const task = tasks[name];
  	for (const dep of task.depedencies) run(dep);
  task.job();
  
}
for (const name in tasks) run(name);
