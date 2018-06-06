const fs = require('fs-extra');
const dossier = '.temp';
const fichier = './temp/pubs.json';
const mock = '../pub-services/pub-services/mocks/pubs.json';

fs.remove(dossier)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})
.then(() => {
   fs.ensureDir(dossier)
   .catch(err => {
     console.error(err)
   })
})
.then(() =>{
  fs.ensureFile(fichier)
  .catch(err => {
    console.error(err)
  })
})
.then(() =>{
  fs.copy(mock, fichier)
  .catch(err => {
    console.error(err)
})
});

fs.watchFile(fichier, (curr, prev) => {
  console.log(`Fichier`+fichier+" modifié");
});
