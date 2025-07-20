function fn() {
  var env = karate.env; // reads -Dkarate.env system property
  karate.log('karate-config.js loaded for environment:', env);

  var config = {};

  if (!env) {
    env = 'dev'; // fallback default
  }

  if (env === 'dev') {
    config.baseUrl = 'https://reqres.in/api';
    config.headers = { 'x-api-key': 'reqres-free-v1' };
  } else if (env === 'custom') {
    config.baseUrl = 'https://your-custom-api.com';
    config.headers = { 'x-api-key': 'custom-key-123' };
  } else if (env === 'staging') {
    config.baseUrl = 'https://staging-api.example.com';
    config.headers = { 'Authorization': 'Bearer staging-token' };
   } else if (env === 'store') {
    config.baseUrl = 'https://fakestoreapi.com';
    config.headers = {}; // store API doesn’t need auth
  }

  return config;
}
