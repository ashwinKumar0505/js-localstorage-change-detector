/* eslint-disable no-unused-vars */

window.addEventListener('load', setTheName);

function setTheName() {
  document.getElementById('name').innerHTML = localStorage.getItem('name')
    ? localStorage.getItem('name')
    : 'no name';
  document.getElementById('state').innerHTML = localStorage.getItem('state')
    ? localStorage.getItem('state')
    : 'no state';
  document.getElementById('country').innerHTML = localStorage.getItem('country')
    ? localStorage.getItem('country')
    : 'no country';

  lsChangeDetector.addChangeListener('onChange', null , modify);
}

function nameValueHandler() {
  const value = document.getElementById('inputField1').value;
  localStorage.setItem('name', value);
  document.getElementById('name').innerHTML = document.getElementById(
    'inputField1',
  ).value;
}

function stateValueHandler() {
  const value = document.getElementById('inputField2').value;
  localStorage.setItem('state', value);
  document.getElementById('state').innerHTML = document.getElementById(
    'inputField2',
  ).value;
}

function countryValueHandler() {
  const value = document.getElementById('inputField3').value;
  localStorage.setItem('country', value);
  document.getElementById('country').innerHTML = document.getElementById(
    'inputField3',
  ).value;
}

function modify(key, value) {
  document.getElementById(key).innerHTML = value;
}
