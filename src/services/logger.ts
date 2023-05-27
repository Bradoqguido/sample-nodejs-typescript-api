// Add your log level here.
const LOG_LEVELS: any = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};

const LOG_LEVEL = LOG_LEVELS[process.env.LOG_LEVEL || 'error'];

const log = (type: string, level: string, ...args: any[]) => {
    // Deferred logging
    if (typeof args[0] === 'function') {
        args[0] = args[0]();
    }

    console.log(`[${type}][${level}] ${args.join(' ')}`);
};

// Add your log type here.
const loggers: any = {
    api: {},
    process: {},
    database: {}
};

for (const logger in loggers) {
    for (const levelName in LOG_LEVELS) {
        const level = LOG_LEVELS[levelName];

        loggers[logger][levelName] = (...args: any) => {
            if (level >= LOG_LEVEL) log(logger, levelName, ...args);
        };
    }
}

export {
    loggers
}
