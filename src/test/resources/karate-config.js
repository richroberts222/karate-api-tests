function fn() {
  karate.log('karate-config.js loaded');
  var config = {
    baseUrl: 'https://reqres.in/api',
    headers: { 'x-api-key': 'reqres-free-v1' }
  };
  return config;
}
