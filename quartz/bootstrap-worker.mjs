#!/usr/bin/env node
import r from"workerpool";let cacheFile="./.quartz-cache/transpiled-worker.mjs",{parseFiles:e}=await import("./.quartz-cache/transpiled-worker.mjs");r.worker({parseFiles:e});