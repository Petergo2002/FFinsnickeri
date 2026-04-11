const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'stitch-exports');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const files = [
  { url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2U1NDdhN2I1MzA5NTRkMWM4MTUyYWQwODg2ODlmNmVkEgsSBxCrwJ-v_RAYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTM3Nzk1Nzg5NDc2MTc4Mjc3&filename=&opi=89354086", name: "1-Contact.html" },
  { url: "https://lh3.googleusercontent.com/aida/ADBb0uhcKjQjUxArS4HUEWRBcHLPhwp4fX8aDUAWn8CPnBADUmg5qrS5kWZLCaYB7lbFnqXo5ScFMw7NHEGihBeKQ7UzK3ldJHEqt6yROptVMnscQklJKu2DkKtbmyEv2zifCoQkj4zCteNEOLxa3K79kgY0Kgf5x2z5lkBpEzaioc4GIX_SCQoPrVltsz8vfZTN1EPnweb11eun6BHNvNdU2bigA_Gs3_qbYzl963B2jXKQjAcGNOCN9tycRQ", name: "1-Contact.png" },

  { url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ViNDc4ODA5MWU2MTRkYmY5M2NkMjZjNjRhY2ZlOGJmEgsSBxCrwJ-v_RAYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTM3Nzk1Nzg5NDc2MTc4Mjc3&filename=&opi=89354086", name: "2-Projects-Kundcase.html" },
  { url: "https://lh3.googleusercontent.com/aida/ADBb0uhaNVmV4yMdMXNrr5g4TUK6eKKZ5rq37oHCLMF6WfnfLaxhYyn8BHS8niUfOJmi8t3eZYtoGSnJo6qw0PuEhs-U-QxzH3fMwgUnDJ9RrfIGGztehqTs1qWw_zQ5jWpxbY3uUkE_kgAcQoWKWzdUgSl1O5eT_M47b1vvPbg1Xdh02uOkrm_9E3r-GwP2O0oNS9zjii4axDDMCd2P7jRth_GB6JEvYrWbKOJWZH825ZPF-6qbl3aeGfDhdLA", name: "2-Projects-Kundcase.png" },

  { url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzI0YjA1MzU2YjVjNzRlZmRiZGY4MmZiMzY1NjM2NGY5EgsSBxCrwJ-v_RAYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTM3Nzk1Nzg5NDc2MTc4Mjc3&filename=&opi=89354086", name: "3-Service-Taktvatt.html" },
  { url: "https://lh3.googleusercontent.com/aida/ADBb0ugX18EzWx8U80oUN3qmofchz1SWM5jN3pUBiGune3eSJ4c59jYL3atJXY9gNvkW933nDEL9SV85kBDEViVL34Mqu1L2OGfWDGZAHLeItGgg4CserVgvOB0IY0ryN8G8CD-DNaH7yP1qkDsEza2FRPr1UojKJ2vpF9JVRKNiuIqJpevhxzlY189ZPl32HK2IZF6X0HCEZLia3ATnD78xe5Bae_uQURa9MLPQiwOq7050UHiKiLdivEOnXVI", name: "3-Service-Taktvatt.png" },

  { url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzA5YjIxNmQ5NzRiYjRhMGQ4MmM0NTQ0Mjg5OWUxODE3EgsSBxCrwJ-v_RAYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTM3Nzk1Nzg5NDc2MTc4Mjc3&filename=&opi=89354086", name: "4-Services-Overview.html" },
  { url: "https://lh3.googleusercontent.com/aida/ADBb0uhy_ADAwgXvEX3mdeWmxRPPq99otLvGC15GQnOiebmDQNcObkALdl0KtH_o3apcI_4Mz1FqN0_na0dvlkz1ManWy23PTG4TGFMr20uCFFzJxZTi1jk66kOfeaEO2DNKZx8YcgdbuntJJLqirNVLKe7RSHbshuJOuxNljrL1zsp8sL3wc1YkkxDJ-YOXjYeotuZo0F0lfY5fe5RqwGu01GE4oGyfmUjNERv6gda1d3nPHNRkCkaElkbrlvo", name: "4-Services-Overview.png" },

  { url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2I5NzMwZjRiYjdhOTQwM2U4NmRjMTMzZjdiMDU5YjNjEgsSBxCrwJ-v_RAYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTM3Nzk1Nzg5NDc2MTc4Mjc3&filename=&opi=89354086", name: "5-Home-Page.html" },
  { url: "https://lh3.googleusercontent.com/aida/ADBb0ujyZkDttZwb679A3t5PfXtonK1KgSDNNRDOYqBz-N-SuRmQD_RoRImpEfFZ82K1XSRO-316jtH2zhAWE0xs47zxbp2RvVvOafoPqkHQjTvPG7dnTIxX2pJ9wjAwtyOqNbGDaky1qv9XZkIhv5Gxm0HkW5M8C0M63VXeMS7n7PW6ksnZkwP3g7w6TXNDcVGxVrQpZkNANNR5IyuNeUfbRWEpAUlsqKEs1ZQD2zZF8gTwJwHTSHjzqx_saqw", name: "5-Home-Page.png" }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  for (const f of files) {
    const dest = path.join(dir, f.name);
    console.log(`Downloading ${f.name}...`);
    try {
      await download(f.url, dest);
      console.log(`Success: ${f.name}`);
    } catch (e) {
      console.error(`Failed: ${f.name}`, e);
    }
  }
}

main();
