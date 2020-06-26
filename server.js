// Set a local variable populated by the environment variable $NAME
const FAV_INSTRUCTOR = process.env.NAME || 'instructor not set';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${ FAV_INSTRUCTOR } rocks!`);
    await sleep(5000);
  }
}

main();
