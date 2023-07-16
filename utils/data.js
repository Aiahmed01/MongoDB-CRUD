// Generate a random username
const getRandomUsername = () => {
    const usernames = ['john123', 'emma456', 'alex789', 'lucas321', 'sophia654'];
    const randomIndex = Math.floor(Math.random() * usernames.length);
    return usernames[randomIndex];
  };
  
  // Generate a random email
  const getRandomEmail = () => {
    const emails = ['john@example.com', 'emma@example.com', 'alex@example.com', 'lucas@example.com', 'sophia@example.com'];
    const randomIndex = Math.floor(Math.random() * emails.length);
    return emails[randomIndex];
  };
  
  module.exports = { getRandomUsername, getRandomEmail };
  