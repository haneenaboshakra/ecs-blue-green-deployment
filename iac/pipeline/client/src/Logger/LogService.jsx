let logBuffer = [];
const bufferLimit = 10;
const flushInterval = 5000; 

const sendBufferedLogs = async () => {
  if (logBuffer.length === 0) return;

  try {
    await fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logBuffer), 
    });
    logBuffer = []; 
  } catch (error) {
    console.error('Error sending buffered logs to server', error);
  }
};


export const logToServer = (logType, message, additionalData = {}) => {
  const logData = {
    logType,
    message,
    additionalData,
    timestamp: new Date().toISOString(),
    url: window.location.href,
  };

  // logBuffer.push(logData);
  console.log('Log data:', logData);
  
  if (logBuffer.length >= bufferLimit) {
    sendBufferedLogs();
  }
};

setInterval(sendBufferedLogs, flushInterval);