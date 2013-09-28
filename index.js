
var Runner = require('./lib')

var create = function(emitter, config, context, cb){
  console.log(">>>>> RUNNER:: CREATED")
  var runner = new Runner(emitter, config)
  runner.loadExtensions(context.extensionPaths, cb)
}

module.exports = {
  // Strider runner requires:
  config: {
    pty: Boolean
  },

  // function(emitter, opts, cb) -> creates a 'runner' bound to the emitter
  create: create,
    // Must handle events:
    // --> 'job.new' (job, ...
    // --> 'job.cancel' jobid
    // Events it is expected to emit
    // <-- 'browser.update' eventname, data
    // <-- 'job.queued' jobid, time
    // <-- 'job.done' { id: jobid, commands: [...], times: {...}, test_status: int, deploy_status: int }

    // Backwards compat: TODO remove
    // --> queue.new_job
    // <-- queue.job_update
    // <-- queue.job_complete

  // We expose these for other modules / unit testing
  Runner : Runner
}
