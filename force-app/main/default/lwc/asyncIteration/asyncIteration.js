import { LightningElement } from "lwc";

export default class AsyncIteration extends LightningElement {
  async asyncIteration() {
      async function* fetchLwcRecipesCommits(repo) {
        let url = "https://api.github.com/trailheadapps/repos/lwc-recipes/commits";
      
        while (url) {
          // GitHub API responds with a JSON of 30 commits
          // providing a link to the next page in the Link header 
          const response = await fetch(url);
      
          const body = await response.json();
      
          // Extract URL for the next page
          let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
          url = (nextPage) ? nextPage[1] : undefined;

          for(let commit of body) { //Yield commits one by one, until the page ends
            yield commit;
          }
        }
      }

      for await (const commit of fetchLwcRecipesCommits()) {
        console.log(commit.author.login);
      }

    /*
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      const iterables = [
        sleep(1000).then(() => { console.log("Promise 1 resolved"); return "Astro";}),
        sleep(3000).then(() => { console.log("Promise 2 resolved"); return "Codey";}),
        sleep(2000).then(() => { console.log("Promise 3 resolved"); return "Appy";})
      ];

      const mascots = [];
      const startTimestamp = Date.now();
      for await (const obj of iterables) {
        console.log(`${obj} arrived in ${Date.now() - startTimestamp} ms!`);
        mascots.push(obj);
      }

      console.log(`These mascots went to the party:${mascots.join(',')}`);

      // expected ouput
      //  Promise 1 resolved
      //  Astro arrived in 1000 ms!
      //  Promise 3 resolved
      //  Promise 2 resolved
      //  Codey arrived in 3000 ms!
      //  Appy arrived in 3000 ms!
      //  These mascots went to the party:Astro,Codey,Appy
    */

    /*
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      const otherIterables = [
        sleep(1000).then(() => { console.log("Other promise 1 resolved"); return "Cloudy";}),
        sleep(3000).then(() => { console.log("Other promise 2 resolved"); return "Einstein";}),
        sleep(2000).then(() => { console.log("Other promise 3 resolved"); return "Blaze";})
        ]

      const startTimestamp2 = Date.now();
      const mascots2 = [];
      for await (const obj of await Promise.all(otherIterables)) {
        console.log(`${obj} arrived in ${Date.now() - startTimestamp2} ms!`);
        mascots2.push(obj);
      }

      console.log(`These mascots went to the party:${mascots2.join(',')}`);
    */
  }

  get code() {
    return `async function* fetchLwcRecipesCommits(repo) {
      let url = "https://api.github.com/repos/trailheadapps/lwc-recipes/commits";
    
      while (url) {
        // GitHub API responds with a JSON of 30 commits
        // providing a link to the next page in the Link header 
        const response = await fetch(url);
    
        const body = await response.json();
    
        // Extract URL for the next page
        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        url = (nextPage) ? nextPage[1] : undefined;

        for(let commit of body) { //Yield commits one by one, until the page ends
          yield commit;
        }
      }
    }

    for await (const commit of fetchLwcRecipesCommits()) {
      console.log(commit.author.login);
    }`
  }
}
