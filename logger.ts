import winston from 'winston';

const timeFormat = 'YYYY-MM-DD HH:mm:ss';

const printFormat = winston.format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const options: winston.LoggerOptions = {
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: timeFormat }),
    winston.format.colorize(),
    printFormat
  ),
  transports: [
    new winston.transports.Console(),
  ],
};

export const logger = winston.createLogger(options);